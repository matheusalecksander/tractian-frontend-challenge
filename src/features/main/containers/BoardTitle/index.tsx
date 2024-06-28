import { Container, LightText, Title } from "./style";

export function BoardTitle() {
	const companyName = "Jaguar";
	return (
		<Container>
			<Title>Ativos</Title>
			<LightText>/ {companyName}</LightText>
		</Container>
	);
}
