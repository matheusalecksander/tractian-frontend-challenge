import { useContext, useEffect, useState } from "react";
import { Board } from "../../components/Board";
import { BoardInfos } from "./containers/BoardInfos";
import { BoardTitle } from "./containers/BoardTitle";
import { MainContainer } from "./containers/MainContainer";
import { CompaniesContext } from "../../contexts/companies.context";
import { ILocationAssets } from "../../domain/interfaces/locations-assets.interface";

export function Main() {
	const { getCompanyAssets, loadingAssets } = useContext(CompaniesContext);
	const [assets, setAssets] = useState<ILocationAssets[]>([]);
	useEffect(() => {
		getCompanyAssets().then(setAssets);
	}, [getCompanyAssets]);

	function generateTree(asset: ILocationAssets) {
		return (
			<div style={{ padding: "1rem" }}>
				<span>name: {asset.name}</span>
				<span>type: {asset.type}</span>
				<br />
				{asset.childrens?.map((childAsset) => (
					<div key={childAsset.id}>{generateTree(childAsset)}</div>
				))}
			</div>
		);
	}

	return (
		<MainContainer>
			<Board.Root>
				<Board.Header>
					<BoardTitle />
					<BoardInfos />
				</Board.Header>
				<Board.Body>
					{!loadingAssets && assets.map((asset) => (
						<div style={{ border: "1px solid red" }} key={asset.id}>
							{generateTree(asset)}
						</div>
					))}
				</Board.Body>
			</Board.Root>
		</MainContainer>
	);
}
