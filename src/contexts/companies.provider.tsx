import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { Company } from "../domain/interfaces/company.interface";
import { CompaniesContext, ICompaniesContext } from "./companies.context";
import { ILocation } from "../domain/interfaces/location.interface";
import { IAsset } from "../domain/interfaces/asset.interface";

export function CompaniesContextProvider({ children }: Readonly<PropsWithChildren>) {
	const [company, setCompany] = useState<Company | undefined>();
	const [companies, setCompanies] = useState<Company[]>([]);

	useEffect(() => {
		fetch("https://fake-api.tractian.com/companies")
			.then((response) =>
				response.json().then((json) => {
					setCompanies(json);
				}),
			)
			.catch(() => setCompanies([]));
	}, []);

	const setSelectedCompany = useCallback(
		(companyId?: string) => {
			const selectedCompany = companies.find((company) => company.id === companyId);
			setCompany(selectedCompany);
		},
		[companies],
	);

	const getCompanyAssets = useCallback(async () => {
		const locationsResponse = await fetch(`https://fake-api.tractian.com/companies/${company?.id}/locations`);
		const locations = await locationsResponse.json();
		const assetsResponse = await fetch(`https://fake-api.tractian.com/companies/${company?.id}/assets`);
		const assets = await assetsResponse.json();

		const grouped = groupLocationsAndAssets(locations, assets);
		console.log(grouped);
	}, [company]);

	function groupLocationsAndAssets(locations: ILocation[], assets: IAsset[]) {
		if (!locations.length) {
			return [];
		}

		const childrenByParent = locations.reduce((acc: { [x: string]: any }, item) => {
			const parentId = item.parentId;
			if (parentId) {
				if (!acc[parentId]) {
					acc[parentId] = [];
				}
				acc[parentId].push(item);
			}
			return acc;
		}, {});

		const getHierarchy = (item: ILocation) => {
			const itemId = item.id;
			const hierarchy = { ...item, childrens: [] };
			if (childrenByParent[itemId]) {
				hierarchy.childrens = childrenByParent[itemId].map(getHierarchy);
			}
			return hierarchy;
		};

		const hierarchy = locations.filter((item) => item.parentId === null).map(getHierarchy);

		return hierarchy;
	}

	const contextValues: ICompaniesContext = useMemo(
		() => ({
			assets: [],
			companies,
			getCompanyAssets,
			setSelectedCompany,
			company,
		}),
		[companies, getCompanyAssets, setSelectedCompany, company],
	);

	return <CompaniesContext.Provider value={contextValues}>{children}</CompaniesContext.Provider>;
}
