import React from "react";
import NavigationItem from "./NavigationItem";
import NavItemType from "@/interface/navItem";

export interface NavigationProps {
	data: Array<NavItemType>;
}

const Navigation: React.FC<NavigationProps> = ({ data = [] }) => {
	return (
		<ul className="nc-Navigation flex items-center">
			{data.map(item => (
				<NavigationItem key={item.id} menuItem={item} />
			))}
		</ul>
	);
};

export default Navigation;
