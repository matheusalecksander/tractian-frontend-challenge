import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {}

export function TreeViewRoot({ children, ...rest }: Readonly<Props>) {
	return <div {...rest}>{children}</div>;
}
