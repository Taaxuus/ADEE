"use client";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

interface Props {
	project: {
		name: string;
		bg: string; // This should be a URL path if it's used for backgrounds
		description: string;
	};
}

export default function CarouselItem({ project }: Props) {
	const [infoShow, setInfoShow] = useState(false);

	return (
		<div className="w-full h-screen flex relative justify-center items-center">
			<div
				style={{
					backgroundImage: `url(${project.bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="w-full h-full flex justify-center items-center">
				<div className="text-white text-2xl font-bold p-10">{project.name}</div>
				<div
					onMouseEnter={() => setInfoShow(true)}
					onMouseLeave={() => setInfoShow(false)}
					className="absolute bottom-2 right-0 mr-5 z-50">
					<p className="text-2xl hover:scale-110 transition-transform duration-300 cursor-help">
						<FaInfoCircle />
					</p>
				</div>

				{infoShow && (
					<div className="absolute h-full w-full left-0 top-0 bg-black bg-opacity-80 transition-opacity duration-1000 ease-in-out">
						<div className="text-white text-xl p-10 transition-opacity duration-1000 ease-in-out">
							{project.description}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
