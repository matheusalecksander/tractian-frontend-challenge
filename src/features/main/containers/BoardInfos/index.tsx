import { BsExclamationCircle } from "react-icons/bs";
import { Container, InfoItem } from "./style";
import { AiOutlineThunderbolt } from "react-icons/ai";

export function BoardInfos() {
	return (
		<Container>
			<InfoItem>
				<AiOutlineThunderbolt /> Sensor de Energia
			</InfoItem>
			<InfoItem>
				<BsExclamationCircle /> Crítico
			</InfoItem>
		</Container>
	);
}
