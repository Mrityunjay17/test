import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/herobanner/hero-right.png";
import imageRightPng2 from "@/images/herobanner/hero-right-2.png";
import imageRightPng3 from "@/images/herobanner/hero-right-3.png";
import heroBanner from "@/interface/heroBanner";

const heroBannerData: heroBanner[] = [
	{
		image: imageRightPng2,
		heading: "Exclusive collection for everyone",
		subHeading: "In this season, find the best 🔥",
		btnText: "Explore now",
		btnLink: "/",
	},
	{
		image: imageRightPng3,
		heading: "Exclusive collection for everyone",
		subHeading: "In this season, find the best 🔥",
		btnText: "Explore now",
		btnLink: "/",
	},
	{
		image: imageRightPng,
		heading: "Exclusive collection for everyone",
		subHeading: "In this season, find the best 🔥",
		btnText: "Explore now",
		btnLink: "/",
	},
];

export default heroBannerData;
