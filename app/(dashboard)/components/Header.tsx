import { BsFillBuildingsFill } from "react-icons/bs";

export default function Header() {
	return (
		<div className=" relative bg-header w-screen h-screen bg-hero bg-no-repeat bg-cover flex justify-center items-center bg-center bg-fixed">
			{/* shadow */}
			<div className="absolute w-full h-full bg-black opacity-40"></div>

			<div className="z-10 flex justify-center items-center">
				<div className="text-9xl">
					<BsFillBuildingsFill />
				</div>
				<h3 className="text-2xl opacity-70">Strona w budowie</h3>
			</div>
		</div>
	);
}
