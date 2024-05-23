import { Route } from "@/routers/types";
import { StaticImageData } from "next/image";

interface TopProduct {
	id: number;
	name: string;
	price: number;
	images: Array<StaticImageData | string>;
	description: string;
	link: Route;
}

export default TopProduct;
