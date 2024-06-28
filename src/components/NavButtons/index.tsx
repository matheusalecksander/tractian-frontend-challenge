import { ButtonsContainer, NavButton } from "./style";
import { AiOutlineGold } from "react-icons/ai";
import { useCompanies } from "../../hooks/useCompanies";
import { useEffect } from "react";

export function NavButtons() {
	const { companies, setSelectedCompany, company } = useCompanies();

	useEffect(() => {
		if (!company && companies.length) {
			setSelectedCompany(companies[0].id);
		}
	}, [company, setSelectedCompany, companies]);

	return (
		<ButtonsContainer>
			{companies.map((item) => (
				<NavButton isActive={company?.id === item.id} key={item.id} onClick={() => setSelectedCompany(item?.id)}>
					<AiOutlineGold size={22} /> {item.name}
				</NavButton>
			))}
		</ButtonsContainer>
	);
}
