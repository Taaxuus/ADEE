import React from "react";
import { GiFamilyHouse, GiHouse } from "react-icons/gi";
import { MdArchitecture } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
export default function About() {
	return (
		<section
			id="about"
			className="h-screen w-full flex flex-col  bg-gradient-to-r from-slate-900 to-slate-700 relative p-0">
			<h3 className="text-slate-100 absolute opacity-20 text-9xl left-20 top-20 font-bold z-20">
				O biurze
			</h3>
			<h4 className="self-center  p-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-slate-100 to-amber-800">
				ADEE
			</h4>
			<div className="w-full h-full flex ">
				<div className="h-full w-1/3   justify-center border-r-[1px] flex gap-2 flex-col p-4">
					<h4>Tytuł</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
						pariatur quibusdam consequatur, repudiandae laborum aliquid dolorem
						alias amet minima libero porro nemo repellat, corrupti voluptatem,
						explicabo nobis ipsum minus. Quos soluta laboriosam obcaecati
						reprehenderit ducimus accusantium recusandae officiis quis nemo sint
						excepturi aut dolorem iure nihil quo provident dolore error, quae
						similique. Quia, obcaecati aut earum in quae porro a.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
						pariatur quibusdam consequatur, repudiandae laborum aliquid dolorem
						alias amet minima libero porro nemo repellat, corrupti voluptatem,
						explicabo nobis ipsum minus. Quos soluta laboriosam obcaecati
						reprehenderit ducimus accusantium recusandae officiis quis nemo sint
						excepturi aut dolorem iure nihil quo provident dolore error, quae
						similique. Quia, obcaecati aut earum in quae porro a.
					</p>
				</div>
				<div className="h-full w-1/3   justify-center border-r-[1px] flex gap-2 flex-col p-4">
					{/* <h4>
						Specjalizacje <span className="text-amber-500">:</span>
					</h4> */}
					<div className="flex flex-col gap-4 justify-center items-center">
						<span className=" text-amber-700 text-8xl">
							<MdArchitecture />
						</span>
						<p className="uppercase">Planowanie</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							pariatur quibusdam consequatur, repudiandae laborum aliquid
							dolorem alias amet minima libero porro nemo repellat, corrupti
						</p>
					</div>
					<div className="flex flex-col gap-4 justify-center items-center">
						<span className=" text-amber-700 text-8xl">
							<GiFamilyHouse />
						</span>
						<p className="uppercase">Wnętrza</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							pariatur quibusdam consequatur, repudiandae laborum aliquid
							dolorem alias amet minima libero porro nemo repellat, corrupti
						</p>
					</div>
					<div className="flex flex-col gap-4 justify-center items-center">
						<span className=" text-amber-700 text-8xl">
							<FaBuildingColumns />
						</span>
						<p className="uppercase">Archotektura</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							pariatur quibusdam consequatur, repudiandae laborum aliquid
							dolorem alias amet minima libero porro nemo repellat, corrupti
						</p>
					</div>
				</div>
				<div className="h-full w-1/3 border-r-[1px]  p-2">
					<p>Tutaj bedzie jakies fajne zdjecie </p>
				</div>
			</div>
		</section>
	);
}