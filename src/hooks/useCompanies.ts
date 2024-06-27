import { useEffect, useState } from "react";
import { Company } from "../domain/interfaces/company.interface";

export function useCompanies() {
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

	return { companies };
}
