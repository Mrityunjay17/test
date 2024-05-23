"use client";

import React, { FC } from "react";
import CardCategory4 from "@/components/CardCategories/CardCategory4";
import Heading from "@/components/Heading/Heading";
import ExploreType from "@/interface/explore";

export interface SectionGridMoreExploreProps {
	className?: string;
	gridClassName?: string;
	data: ExploreType[];
}

const SectionGridMoreExplore: FC<SectionGridMoreExploreProps> = ({
	className = "",
	gridClassName = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
	data = [],
}) => {
	const renderHeading = () => {
		return (
			<div>
				<Heading
					className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
					fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
					isCenter
					desc=""
				>
					Start exploring.
				</Heading>
			</div>
		);
	};

	return (
		<div className={`nc-SectionGridMoreExplore relative ${className}`}>
			{renderHeading()}
			<div className={`grid gap-4 md:gap-7 ${gridClassName}`}>
				{data.map(item => (
					<CardCategory4
						bgSVG={item.svgBg}
						featuredImage={item.image}
						key={item.id}
						color={item.color}
						{...item}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionGridMoreExplore;
