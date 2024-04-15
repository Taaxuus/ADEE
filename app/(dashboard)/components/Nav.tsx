"use client";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export default function Nav() {
	// State to manage the visibility of the mobile menu
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="absolute z-50 w-full bg-black  bg-opacity-25 ">
			<div className="  px-2 sm:px-6  lg:px-8">
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
					<div className="flex flex-1  sm:items-stretch sm:justify-between w-full ">
						<div className="flex  absolute flex-col flex-shrink-0 items-center justify-center  bg-slate-900 bg-opacity-45 pl-6 sm:pl-2 -left-8 top-0 min-w-[200px] w-2/12 h-[300px]">
							<h1 className="text-slate-100 opacity-80 text-6xl font-bold z-20">
								ADEE
							</h1>
							<h2 className="z-20 border-t border-b border-amber-600 p-2">
								Pracownia Architektoniczna
							</h2>
						</div>
						<div className="absolute text-9xl top-48 left-40 opacity-25 font-bold">
							ADEE
						</div>
						<div className="flex  absolute flex-col pt-36   items-center justify-center bg-slate-900 bg-opacity-35  -left-8 min-w-[100px] top-0 max-w-[100px] h-screen">
							<div className="flex  w-screen gap-5   justify-center   items-center -rotate-90">
								<a className="social_icon sm:hidden" href="tel:+48792793736">
									<BsTelephone />
								</a>
								<a className=" hidden sm:block text-sm text-slate-400 " href="">
									+ 48 792 793 736
								</a>
								<a className="social_icon" href="mailto:mailbox.adee@gmail.com">
									<AiOutlineMail />
								</a>
								<a className="social_icon" href="mailto:mailbox.adee@gmail.com">
									<FaLinkedin />
								</a>

								<div className="border-[1px] border-slate-400 opacity-35 w-1/12 "></div>
								<h2 className=" text-amber-600 italic  ">Grzegorz Chodara</h2>
							</div>
						</div>
						<div className="flex flex-shrink-0 items-center">
							<div className=""></div>
						</div>
						<div className="hidden sm:ml-6 sm:block ">
							<div className="flex space-x-4">
								<div className=" px-2 pt-2 pb-3 flex">
									{/* Mobile navigation links */}
									<a href="#" className="nav_link">
										Strona głowna
									</a>
									<a href="#" className="nav_link">
										O mnie
									</a>
									<a href="#" className="nav_link">
										Projekty
									</a>
									<a href="#" className="nav_link">
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
				id="mobile-menu ">
				<div className="flex flex-col justify-end items-end px-2 pt-2 pb-3 z-50 ">
					{/* Mobile navigation links */}
					<a className="nav_link" href="#">
						Dashboard
					</a>
					<a className="nav_link" href="#">
						Team
					</a>
					<a className="nav_link" href="#">
						Projects
					</a>
					<a className="nav_link" href="#">
						Calendar
					</a>
				</div>
			</div>
		</nav>
	);
}
