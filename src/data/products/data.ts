import { productImgs } from "@/contains/fakeData";

const products = [
	{
		id: 1,
		name: "Rey Nylon Backpack",
		description: "Brown cockroach wings",
		price: 74,
		image: productImgs[16],
		category: "Eatable Seeds",
		link: "/product-detail/",
		status: "New in",
		rating: "4.4",
		numberOfReviews: 98,
	},
	{
		id: 2,
		name: 'Round Buckle 1" Belt',
		description: "Classic green",
		price: 68,
		image: productImgs[1],
		category: "Super Food",
		link: "/product-detail/",
		status: "50% Discount",
		rating: "4.9",
		numberOfReviews: 98,
	},
	{
		id: 3,
		name: "Waffle Knit Beanie",
		description: "New blue aqua",
		price: 132,
		image: productImgs[15],
		category: "Dry Fruits",
		link: "/product-detail/",
		rating: "4.9",
		numberOfReviews: 98,
	},
	{
		id: 4,
		name: "Travel Pet Carrier",
		description: "Dark pink 2023",
		price: 28,
		image: productImgs[3],
		category: "Daily Needs",
		link: "/product-detail/",
		status: "Sold Out",
		rating: "4.9",
		numberOfReviews: 98,
	},
];

export default products;
