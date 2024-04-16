"use client";
import React from "react";
import { Carousel } from "nuka-carousel";
import CorouselItem from "./CorouselItem";

export default function Projects() {
	return (
		<section className="w-full h-screen p-0">
			<Carousel showDots>
				<CorouselItem bgImg="p1" />
				<CorouselItem bgImg="p2" />
				<CorouselItem bgImg="p3" />
			</Carousel>
		</section>
	);
}
