import { PropsWithChildren } from "react";

export function BoardBody({ children }: Readonly<PropsWithChildren>) {
	return <div>{children}</div>;
}
