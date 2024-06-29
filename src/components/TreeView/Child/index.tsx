import { PropsWithChildren } from "react";

export function TreeViewChild({ children }: Readonly<PropsWithChildren>) {
	return <div>{children}</div>;
}
