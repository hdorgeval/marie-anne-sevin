import type { FC } from "react";

export interface PageSubTitleProps {
	className?: string;
	children: React.ReactNode;
}
export const PageSubTitle: FC<PageSubTitleProps> = ({
	className,
	children,
}) => {
	return (
		<h2 className={`fs-2 text-light font-monserrat ${className}`}>
			{children}
		</h2>
	);
};

PageSubTitle.displayName = "PageSubTitle";
