import { StaticImageData } from "next/image";

interface HowItsWork {
	img: StaticImageData | string;
	imgDark: StaticImageData | string;
	title: string;
	desc: string;
	id: number;
}

export default HowItsWork;
