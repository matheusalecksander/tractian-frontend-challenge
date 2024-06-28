import { createContext } from "react";
import { Company } from "../domain/interfaces/company.interface";
import { IAsset } from "../domain/interfaces/asset.interface";

export interface ICompaniesContext {
	companies: Company[];
	assets: IAsset[];
	getCompanyAssets: () => Promise<void>;
	setSelectedCompany: (companyId?: string) => void;
	company: Company | undefined;
}

export const CompaniesContext = createContext<ICompaniesContext>({
	companies: [],
	assets: [],
	getCompanyAssets: async () => {},
	company: undefined,
	setSelectedCompany: () => {},
});
