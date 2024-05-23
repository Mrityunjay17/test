import { StaticImageData } from "next/image";
import { Route } from "@/routers/types";

interface ExploreType {
	id: number;
	name: string;
	description: string;
	image: string | StaticImageData;
	svgBg: string;
	href: Route;
	color?: string;
	count?: number;
}

export default ExploreType;
