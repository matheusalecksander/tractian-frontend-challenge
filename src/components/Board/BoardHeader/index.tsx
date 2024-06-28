import { PropsWithChildren } from "react";
import { Container } from "./style";

export function BoardHeader({ children }: Readonly<PropsWithChildren>) {
	return <Container>{children}</Container>;
}
