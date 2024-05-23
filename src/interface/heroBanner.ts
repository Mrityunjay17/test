import { StaticImageData } from "next/image";
import { Route } from "@/routers/types";

interface HeroBanner {
	image: StaticImageData | string;
	heading: string;
	subHeading: string;
	btnText: string;
	btnLink: Route;
}

export default HeroBanner;
