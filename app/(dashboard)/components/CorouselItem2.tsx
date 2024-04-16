"use client";
import React from "react";

interface Props {
	project: {
		name: string;
		bg: string; // This should be a URL path if it's used for backgrounds
		description: string;
	};
}

export default function CarouselItem({ project }: Props) {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div
				style={{
					backgroundImage: `url(${project.bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="w-full h-full flex justify-center items-center">
				<div className="text-white text-2xl font-bold p-10">{project.name}</div>
			</div>
		</div>
	);
}
