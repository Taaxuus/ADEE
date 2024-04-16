import React from "react";

interface Props {
	bgImg: string;
}

export default function CorouselItem({ bgImg }: Props) {
	return (
		<div className={`w-full h-screen flex justify-center items-center  `}>
			<div className={`w-1/3 flex justify-center bg-${bgImg} items-center`}>
				<div className="">Title</div>
			</div>
		</div>
	);
}
