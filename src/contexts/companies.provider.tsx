import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { Company } from "../domain/interfaces/company.interface";
import { CompaniesContext, ICompaniesContext } from "./companies.context";
import { ILocation } from "../domain/interfaces/location.interface";
import { IAsset } from "../domain/interfaces/asset.interface";
import { ILocationAssets } from "../domain/interfaces/locations-assets.interface";
import { AssetType } from "../domain/enuns/asset-type.enum";

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

		return groupLocationsAndAssets(locations, assets)
	}, [company]);

	function groupLocationsAndAssets(locations: ILocation[], assets: IAsset[]): ILocationAssets[] {
		if (!locations.length || !assets.length) {
			return [];
		}

		const locationMap = new Map<string, ILocationAssets>();
		const assetMap = new Map<string, ILocationAssets>();

		locations.forEach((location) => {
			locationMap.set(location.id, {
				id: location.id,
				name: location.name,
				type: AssetType.LOCATION,
				parentId: location.parentId,
				childrens: [],
			});
		});

		assets.forEach((asset) => {
			assetMap.set(asset.id, {
				id: asset.id,
				name: asset.name,
				type: asset.sensorType ? AssetType.COMPONENT : AssetType.ASSET,
				parentId: asset.parentId,
				locationId: asset.locationId,
				sensorType: asset.sensorType,
				status: asset.status,
				childrens: [],
			});
		});

		assets.forEach((asset) => {
			const assetNode = assetMap.get(asset.id);
			if (asset.parentId) {
				const parentAsset = assetMap.get(asset.parentId);
				parentAsset?.childrens?.push(assetNode!);
			}

			if (asset.locationId) {
				const parentLocation = locationMap.get(asset.locationId);
				parentLocation?.childrens?.push(assetNode!);
			}
		});

		locations.forEach((location) => {
			const locationNode = locationMap.get(location.id);
			if (location.parentId) {
				const parentLocation = locationMap.get(location.parentId);
				parentLocation?.childrens?.push(locationNode!);
			}
		});

		const result: ILocationAssets[] = [];
		locationMap.forEach((location) => {
			if (!location.parentId) {
				result.push(location);
			}
		});

		assetMap.forEach(asset => {
			if (!asset.parentId && !asset.locationId) {
				result.push(asset);
			}
		});
		return result;
	}

	const contextValues: ICompaniesContext = useMemo(
		() => ({
			companies,
			getCompanyAssets,
			setSelectedCompany,
			company,
		}),
		[companies, getCompanyAssets, setSelectedCompany, company],
	);

	return <CompaniesContext.Provider value={contextValues}>{children}</CompaniesContext.Provider>;
}
