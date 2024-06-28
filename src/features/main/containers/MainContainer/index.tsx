import { PropsWithChildren } from "react";
import { Container } from "./style";

export function MainContainer({ children }: Readonly<PropsWithChildren>) {
	return <Container>{children}</Container>;
}
