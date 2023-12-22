import Image from "next/image";
import Button from "../Button/Button";

{
	/* TODO : Add "link" argument to put in the link href */
}
export default function WorkCard({ title, description, image }: any) {
	return (
		<div
			data-aos="fade-zoom-in"
			data-aos-easing="ease-in-back"
			data-aos-delay="400"
			data-aos-offset="0"
			className="bg-black snap-center flex flex-col text-white h-full w-72 rounded-2xl lg:m-10 m-5 transition ease-in-out hover:scale-110 duration-300"
		>
			<div className="transition ease-in-out hover:scale-105 duration-300">
				<div className="h-72 w-72 flex">
					<Image className="rounded-t-2xl object-cover" alt="logo" src={image} height={288} width={288} />
				</div>
				<div className="bg-black flex flex-col space-y-4 p-4 justify-center items-left rounded-b-2xl">
					<h1>{title}</h1>
					<p>{description}</p>
					{/* TODO : Replace this button by a link to the project */}
					<Button>More details</Button>
				</div>
			</div>
		</div>
	);
}
