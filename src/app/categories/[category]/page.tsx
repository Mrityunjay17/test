import React, { FC } from "react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import getData from "./getCategoryData";

interface CategoryPageProps {
	params: {
		category: string;
	};
}

const CategoryPage: FC<CategoryPageProps> = async ({
	params: { category },
}) => {
	const data = await getData(category);
	if (!data) {
		return notFound();
	}
	const { name, description, products = [] } = data;
	return (
		<div className={`nc-PageCollection`}>
			<div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
				<div className="space-y-10 lg:space-y-14">
					{/* HEADING */}
					<div className="max-w-screen-sm">
						<h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
							{name}
						</h2>
						<span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
							{description}
						</span>
					</div>

					<hr className="border-slate-200 dark:border-slate-700" />
					<main>
						{/* LOOP ITEMS */}
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
							{products.map((item, index) => (
								<ProductCard data={item} key={index} />
							))}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
