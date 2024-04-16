"use client";
import React from "react"; // Ensure React is imported
import { Carousel } from "nuka-carousel";

import { projects } from "../../utilities/projectsObject";
import CarouselItem from "./CorouselItem2";

export default function Projects() {
	return (
		<section
			id="projects"
			className="w-full flex flex-col h-screen p-0 overflow-hidden">
			<Carousel className="w-full" autoplay={true} autoplayInterval={3000}>
				{projects.map((project) => (
					<CarouselItem key={project.name} project={project} />
				))}
			</Carousel>
		</section>
	);
}
