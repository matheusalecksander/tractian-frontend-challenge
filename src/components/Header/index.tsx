import { Logo } from "../Logo";
import { NavButtons } from "../NavButtons";
import { Container } from "./style";

export function Header() {
	return (
		<Container>
			<Logo />
			<NavButtons />
		</Container>
	);
}
