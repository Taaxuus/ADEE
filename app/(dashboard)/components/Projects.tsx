"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projects } from "../../utilities/projectsObject";
import CarouselItem from "./CorouselItem";

export default function Projects() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024, // at max-width 1024px
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768, // at max-width 600px
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 600, // at max-width 600px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 600, // at max-width 600px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480, // at max-width 480px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section
			id="projects"
			className="w-full flex flex-col h-screen p-0 overflow-hidden">
			<Slider {...settings}>
				{projects.map((project) => (
					<CarouselItem key={project.name} project={project} />
				))}
			</Slider>
		</section>
	);
}
