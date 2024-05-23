import { Route } from "@/routers/types";

interface NavItemType {
	id: string;
	name: string;
	href: Route;
	targetBlank?: boolean;
	children?: NavItemType[];
	type?: "dropdown" | "megaMenu" | "none";
	isNew?: boolean;
}

export default NavItemType;
