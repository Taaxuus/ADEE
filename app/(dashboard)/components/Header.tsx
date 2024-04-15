import { BsArrowRightCircle, BsFillBuildingsFill } from "react-icons/bs";

export default function Header() {
	return (
		<div className=" relative   bg-header h-screen  bg-hero bg-no-repeat bg-cover flex justify-end sm:justify-center items-center bg-center bg-fixed">
			{/* shadow */}
			<div className="absolute w-full h-full bg-black opacity-40"></div>

			<div className="z-10 flex w-1/2 flex-col gap-4 p-2 ">
				<h1 className="text-2xl sm:text-4xl">Tutaj będzie twój slogan</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum enim
					nobis recusandae ipsa provident nisi repellendus ducimus, quaerat
					blanditiis eum?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					totam recusandae voluptate? Ut accusantium sapiente dolorum
					reprehenderit. Sunt sed sint, fugiat dicta iusto, esse cum repudiandae
					ab explicabo assumenda ut!
				</p>

				<a href="#about" className="self-end flex gap-2 aid">
					Więcej
					<span className="text-xl">
						<BsArrowRightCircle />
					</span>
				</a>
			</div>
		</div>
	);
}
