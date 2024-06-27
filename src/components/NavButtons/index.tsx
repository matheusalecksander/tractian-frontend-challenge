import { useEffect } from "react";
import { ButtonsContainer, NavButton } from "./style";
import { AiOutlineGold } from "react-icons/ai";
import { useLocation } from "../../hooks/useLocation";
import { useCompanies } from "../../hooks/useCompanies";

export function NavButtons() {
	const { companies } = useCompanies();
	const { getQueryParam, setQueryParam } = useLocation();

	useEffect(() => {
		if (!getQueryParam("company")) {
			setQueryParam("company", companies[0].id);
		}
	}, [companies, setQueryParam, getQueryParam]);

	return (
		<ButtonsContainer>
			{companies.map((company) => (
				<NavButton
					isActive={getQueryParam("company") === company.id}
					key={company.id}
					onClick={() => setQueryParam("company", company.id)}
				>
					<AiOutlineGold size={22} /> {company.name}
				</NavButton>
			))}
		</ButtonsContainer>
	);
}
