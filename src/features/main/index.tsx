import { useContext } from "react";
import { Board } from "../../components/Board";
import { BoardInfos } from "./containers/BoardInfos";
import { BoardTitle } from "./containers/BoardTitle";
import { MainContainer } from "./containers/MainContainer";
import { CompaniesContext } from "../../contexts/companies.context";

export function Main() {
	const { getCompanyAssets } = useContext(CompaniesContext);

	getCompanyAssets();

	return (
		<MainContainer>
			<Board.Root>
				<Board.Header>
					<BoardTitle />
					<BoardInfos />
				</Board.Header>
			</Board.Root>
		</MainContainer>
	);
}
