"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Contact() {
	const MapComponent = useMemo(
		() => dynamic(() => import("./Map"), { ssr: false }),
		[]
	);

	return (
		<section
			id="contact"
			className="flex flex-col p-0 items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 h-72 w-full">
			<h3 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 p-2">
				Kontakt
			</h3>
			<div className="flex flex-col sm:flex-row flex-grow w-full">
				<div className="flex flex-col justify-center items-center w-full sm:w-1/2 p-4">
					<p className="text-white">123 Fake Street</p>
					<p className="text-white">City, State, Zip</p>
					<p className="text-white">Phone: (123) 456-7890</p>
				</div>
				<div className="w-full sm:w-1/2 h-64 sm:h-auto">
					<MapComponent />
				</div>
			</div>
		</section>
	);
}
