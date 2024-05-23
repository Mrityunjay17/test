import explore5Svg from "@/images/collections/explore5.svg";
import explore6Svg from "@/images/collections/explore6.svg";
import explore7Svg from "@/images/collections/explore7.svg";
import explore9Svg from "@/images/collections/explore9.svg";
import explore5Png from "@/images/collections/explore5.png";
import explore6Png from "@/images/collections/explore6.png";
import explore7Png from "@/images/collections/explore7.png";
import explore9Png from "@/images/collections/explore9.png";
import ExploreType from "@/interface/explore";

const explore: ExploreType[] = [
	{
		id: 1,
        name: "Eatable Seeds",
		description: "Manufacturar",
		image: explore9Png,
		svgBg: explore9Svg,
        href: "/categories/eatableseeds",
		color: "bg-orange-50",
		count: 343,
	},
	{
		id: 2,
		name: "Super Food",
		href: "/categories/superfood",
		description: "Manufacturar",
		image: explore5Png,
		svgBg: explore5Svg,
		color: "bg-blue-50",
		count: 222,
	},
	{
		id: 3,
		href: "/categories/dryfruits",
		name: "Dry Fruits",
		description: "Manufacturar",
		image: explore6Png,
		svgBg: explore6Svg,
		color: "bg-orange-50",
		count: 155,
	},
	{
		id: 4,
		href: "/categories/dailyneeds",
		name: "Daily Needs",
		description: "Manufacturar",
		image: explore7Png,
		svgBg: explore7Svg,
		color: "bg-stone-100",
		count: 98,
	},
];

export default explore;
