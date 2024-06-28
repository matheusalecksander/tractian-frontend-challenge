import { PropsWithChildren } from "react";
import { Container } from "./style";

export function BoardRoot({ children }: Readonly<PropsWithChildren>) {
	return <Container>{children}</Container>;
}
