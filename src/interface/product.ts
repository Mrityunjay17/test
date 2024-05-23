import { StaticImageData } from "next/image";

interface Product {
	id: number;
	name: string;
	price: number;
	image: StaticImageData | string;
	description: string;
	category: string;
	link: "/product-detail/";
	tags?: string[];
	status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
	rating?: string;
	numberOfReviews?: number;
}

export default Product;
