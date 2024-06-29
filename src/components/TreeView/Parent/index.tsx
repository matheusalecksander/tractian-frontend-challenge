import { PropsWithChildren } from "react";
import { FaChevronRight } from "react-icons/fa";

export function TreeViewParent({ children }: Readonly<PropsWithChildren>) {
	return (
		<div style={{ display: "flex" }}>
			<FaChevronRight />
			{children}
		</div>
	);
}
