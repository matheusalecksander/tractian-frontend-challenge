import { createContext } from "react";
import { Company } from "../domain/interfaces/company.interface";
import { ILocationAssets } from "../domain/interfaces/locations-assets.interface";

export interface ICompaniesContext {
	companies: Company[];
	getCompanyAssets: () => Promise<ILocationAssets[]>;
	loadingAssets: boolean;
	setSelectedCompany: (companyId?: string) => void;
	company: Company | undefined;
}

export const CompaniesContext = createContext<ICompaniesContext>({
	companies: [],
	getCompanyAssets: async () => Promise.resolve([]),
	loadingAssets: false,
	company: undefined,
	setSelectedCompany: () => {},
});
