import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import VectorImg from "@/images/VectorHIW.svg";
import Badge from "@/shared/Badge/Badge";
import Image from "next/image";
import howItsWorkData from "./howItWork";
import HowItsWork from "@/interface/howItsWork";

export interface HowItWorkProps {
	className?: string;
	data: Array<HowItsWork>;
}

const HowItWork: FC<HowItWorkProps> = ({ className = "", data = [] }) => {
	return (
		<div className={`nc-SectionHowItWork ${className}`}>
			<div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
				<Image
					className="hidden md:block absolute inset-x-0 top-5"
					src={VectorImg}
					alt="vector"
				/>
				{data.map((item: (typeof data)[number], index: number) => (
					<div
						key={item.id}
						className="relative flex flex-col items-center max-w-xs mx-auto"
					>
						<NcImage
							containerClassName="mb-4 sm:mb-10 max-w-[140px] mx-auto"
							className="rounded-3xl"
							src={item.img}
							sizes="150px"
							alt="HIW"
						/>
						<div className="text-center mt-auto space-y-5">
							<Badge
								name={`Step ${index + 1}`}
								color={
									!index
										? "red"
										: index === 1
										? "indigo"
										: index === 2
										? "yellow"
										: "purple"
								}
							/>
							<h3 className="text-base font-semibold">
								{item.title}
							</h3>
							<span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
								{item.desc}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HowItWork;