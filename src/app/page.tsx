import React from "react";
import HowItWork from "@/components/HowItWork";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import HeroBanner from "@/components/HeroBanner";
import New_Products from "@/data/products/newProducts";
import herobanner from "@/data/herobanner/data";
import howItWork from "@/data/howItWork/data";
import exploreData from "@/data/explore/data";
import Top_Products from "@/data/products/topProducts";

function homePage() {
	return (
		<div className="nc-PageHome2 relative overflow-hidden">
			<div className="container px-4">
				<HeroBanner data={herobanner} />
			</div>

			<div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
				<HowItWork data={howItWork} />

				{/* SECTION */}
				<SectionSliderProductCard
					data={New_Products.filter((_, i) => i < 8)}
				/>

				<SectionSliderLargeProduct data={Top_Products} />

				{/* SECTION */}
				<div className="relative py-24 lg:py-32">
					<BackgroundSection />
					<SectionGridMoreExplore data={exploreData} />
				</div>
			</div>
		</div>
	);
}

export default homePage;
