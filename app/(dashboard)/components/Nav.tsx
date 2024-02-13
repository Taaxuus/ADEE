"use client";
import { useState } from "react";

export default function Nav() {
	// State to manage the visibility of the mobile menu
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed z-50 ">
			<div className=" max-w-7xl px-2 sm:px-6  lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
						{/* Mobile menu button */}
						<button
							onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isOpen ? "true" : "false"} // Reflect the open state for accessibility
						>
							{/* Icon when menu is closed */}
							<svg
								className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
							{/* Icon when menu is open */}
							<svg
								className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex flex-1  sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<div className="">ADEE</div>
						</div>
						<div className="flex flex-shrink-0 items-center">
							<div className="">telNR</div>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<div className="space-y-1 px-2 pt-2 pb-3 flex">
									{/* Mobile navigation links */}
									<a
										href="#"
										className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
										aria-current="page">
										Strona głowna
									</a>
									<a
										href="#"
										className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
										O mnie
									</a>
									<a
										href="#"
										className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
										Projekty
									</a>
									<a
										href="#"
										className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
										Kontakt
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile menu, show/hide based on menu state */}
			<div
				className={`${isOpen ? "block" : "hidden"} sm:hidden `}
				id="mobile-menu">
				<div className="space-y-1 px-2 pt-2 pb-3">
					{/* Mobile navigation links */}
					<a
						href="#"
						className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
						aria-current="page">
						Dashboard
					</a>
					<a
						href="#"
						className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
						Team
					</a>
					<a
						href="#"
						className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
						Projects
					</a>
					<a
						href="#"
						className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
						Calendar
					</a>
				</div>
			</div>
		</nav>
	);
}
