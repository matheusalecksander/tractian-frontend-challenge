import { useContext, useEffect, useState } from "react";
import { Board } from "../../components/Board";
import { BoardInfos } from "./containers/BoardInfos";
import { BoardTitle } from "./containers/BoardTitle";
import { MainContainer } from "./containers/MainContainer";
import { CompaniesContext } from "../../contexts/companies.context";
import { ILocationAssets } from "../../domain/interfaces/locations-assets.interface";
import { TreeView } from "../../components/TreeView";
import { AssetType } from "../../domain/enuns/asset-type.enum";
import { FaCodepen } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { theme } from "../../_config/theme";

export function Main() {
	const { getCompanyAssets, loadingAssets } = useContext(CompaniesContext);
	const [assets, setAssets] = useState<ILocationAssets[]>([]);
	useEffect(() => {
		getCompanyAssets().then(setAssets);
	}, [getCompanyAssets]);

	function handleNode(type: AssetType, name: string) {
		const icons = {
			[AssetType.LOCATION]: <FiMapPin color={theme.colors.blue._50} />,
			[AssetType.ASSET]: <IoCubeOutline color={theme.colors.blue._50} />,
			[AssetType.COMPONENT]: <FaCodepen color={theme.colors.blue._50} />,
		};

		return (
			<span style={{ display: "flex", gap: "1rem" }}>
				{icons[type]}
				{name}
			</span>
		);
	}

	function generateTree(asset: ILocationAssets) {
		return (
			<TreeView.Root style={{ padding: "1rem" }}>
				{asset.childrens?.length ? (
					<>
						<TreeView.Parent>{handleNode(asset.type, asset.name)}</TreeView.Parent>
						{asset.childrens?.map((child) => (
							<TreeView.Child key={child.id}>{generateTree(child)}</TreeView.Child>
						))}
					</>
				) : (
					<TreeView.Child key={asset.id}>{handleNode(asset.type, asset.name)}</TreeView.Child>
				)}
			</TreeView.Root>
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
					{!loadingAssets &&
						assets.map((asset) => (
							<div style={{ border: "1px solid red" }} key={asset.id}>
								{generateTree(asset)}
							</div>
						))}
				</Board.Body>
			</Board.Root>
		</MainContainer>
	);
}
