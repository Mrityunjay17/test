import ncNanoId from "@/utils/ncNanoId";
import NavItemType from "@/interface/navItem";

const navigationData: NavItemType[] = [
	{
		id: ncNanoId(),
		href: "/categories/eatableseeds",
		name: "Eatable Seeds",
	},
	{
		id: ncNanoId(),
		href: "/categories/superfood",
		name: "Super Food",
	},
	{
		id: ncNanoId(),
		href: "/categories/dryfruits",
		name: "Dry Fruits",
	},
	{
		id: ncNanoId(),
		href: "/categories/dailyneeds",
		name: "Daily Needs",
	},
];

export default navigationData;
