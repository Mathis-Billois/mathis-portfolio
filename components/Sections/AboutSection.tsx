import Image from "next/image";
import MainTitle from "../Title/MainTitle";
import SectionTitle from "../Title/SectionTitle";

export default function AboutSection() {
	return (
		<div id="about" className="bg-black lg:h-screen h-auto flex flex-col items-center justify-center w-full">
			<div className="flex flex-col lg:flex-row flex-1 items-center justify-center px-10 py-20 lg:p-0 w-full">
				<div className="flex flex-col w-full lg:w-2/5 items-center justify-center mb-12 lg:m-0">
					<a href="/CV.png" target="_blank" rel="noopener noreferrer">
						<Image className="flex-1 rounded-md cursor-pointer" alt="logo" src="/CV.png" height={300} width={300} />
					</a>
				</div>
				<div className="flex flex-col w-full lg:w-1/3 lg:mr-36">
					<div className="flex flex-col w-full overflow-x-hidden">
						<SectionTitle>About</SectionTitle>
						<MainTitle>Mathis Billois</MainTitle>
						<p className=" text-white mt-8 lg:text-lg text-base">
							Hi, I'm Mathis, a student at EMM to become a Web Developper. I am a very curious person, which leads me to have a great interest in the
							digital world.
							<br></br>
							<br></br>
							<br></br>I let you discover my portfolio site to show you what I can do as a student in Web development. Feel free to email me back if
							you have any questions or anything.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
