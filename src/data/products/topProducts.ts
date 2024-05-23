import full1Img from "@/images/products/full1.png";
import full11Img from "@/images/products/full1-1.png";
import full12Img from "@/images/products/full1-2.png";
import full13Img from "@/images/products/full1-3.png";
//
import full2Img from "@/images/products/full2.png";
import full21Img from "@/images/products/full2-1.png";
import full22Img from "@/images/products/full2-2.png";
import full23Img from "@/images/products/full2-3.png";
//
import full3Img from "@/images/products/full3.png";
import full31Img from "@/images/products/full3-1.png";
import full32Img from "@/images/products/full3-2.png";
import full33Img from "@/images/products/full3-3.png";
import TopProduct from "@/interface/topProduct";


const Top_Products: TopProduct[] = [
	{
		id: 1,
		images: [full1Img, full11Img, full12Img, full13Img],
		name: "Suede Bomber Jacket",
		description: "Orange",
		price: 52,
		link: "product-detail",
	},
	{
		id: 2,
		images: [full2Img, full21Img, full22Img, full23Img],
		name: "Downtown Pet Tote",
		description: "Black and Orange",
		price: 88,
        link: "product-detail",
	},
	{
		id: 3,
		images: [full3Img, full31Img, full32Img, full33Img],
		name: "Cader Leather Sneakers",
		description: "3 Sizes Available",
		price: 60,
        link: "product-detail",
	},
    {
		id: 4,
		images: [full2Img, full21Img, full22Img, full23Img],
		name: "Downtown Pet Tote",
		description: "Black and Orange",
		price: 88,
        link: "product-detail",
	},
];

export default Top_Products;
