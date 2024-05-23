"use client";

import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import CollectionCard from "./CollectionCard";
import TopProduct from "@/interface/topProduct";

export interface SectionSliderLargeProductProps {
	className?: string;
	itemClassName?: string;
	data: Array<TopProduct>;
}

const SectionSliderLargeProduct: FC<SectionSliderLargeProductProps> = ({
	className = "",
	data = [],
}) => {
	const sliderRef = useRef(null);

	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		const OPTIONS: Partial<Glide.Options> = {
			perView: 3,
			gap: 32,
			bound: true,
			breakpoints: {
				1280: {
					gap: 28,
					perView: 2.5,
				},
				1024: {
					gap: 20,
					perView: 2.15,
				},
				768: {
					gap: 20,
					perView: 1.5,
				},

				500: {
					gap: 20,
					perView: 1,
				},
			},
		};
		if (!sliderRef.current) return;

		let slider = new Glide(sliderRef.current, OPTIONS);
		slider.mount();
		setIsShow(true);
		return () => {
			slider.destroy();
		};
	}, [sliderRef]);

	return (
		<div className={`nc-SectionSliderLargeProduct ${className}`}>
			<div
				ref={sliderRef}
				className={`flow-root ${isShow ? "" : "invisible"}`}
			>
				<Heading isCenter={false} hasNextPrev>
					Top Products
				</Heading>
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{data.map((product, index) => (
							<li className={`glide__slide`} key={index}>
								<CollectionCard
									name={product.name}
									price={product.price}
									imgs={product.images}
									description={product.description}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SectionSliderLargeProduct;
