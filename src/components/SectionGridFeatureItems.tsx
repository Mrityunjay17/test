import React, { FC } from "react";
import ProductCard from "@/components/ProductCard";
import { Product, PRODUCTS } from "@/data/data";
import Heading from "@/shared/Heading/Heading";

export interface SectionGridFeatureItemsProps {
	data?: Product[];
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
	data = PRODUCTS,
}) => {
	return (
		<div className="nc-SectionGridFeatureItems relative">
			<Heading>{`What's trending now`}</Heading>
			<div
				className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
			>
				{data.map((item, index) => (
					<ProductCard data={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default SectionGridFeatureItems;
