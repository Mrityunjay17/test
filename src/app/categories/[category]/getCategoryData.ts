"use server";
import categories from "@/data/categories/data";
import products from "@/data/products/data";

const getData = (category: string) => {
	const categoryData = categories.find(({ key }) => key === category);
	if (categoryData) {
		const { name } = categoryData;
		const categoryProductes = products.filter(
			({ category: itemCategory }) => itemCategory === name
		);
		return { ...categoryData, products: categoryProductes };
	}

	return categoryData;
};

export default getData;
