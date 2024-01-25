import Image from "next/image";
import MainTitle from "../Title/MainTitle";

export default function HomeSection() {
	return (
		<div>
			<div id="home" className="bg-home-color h-screen flex items-center justify-center flex-col">
				<Image data-aos="fade-zoom-in" data-aos-duration="2500" className="rounded-xl" alt="logo" src="/PP.jpg" height={250} width={250} />
				<div className="text-center">
					<MainTitle>Mathis Billois</MainTitle>
					<h2 className="lg:text-2xl text-lg text-white">Student in Web Development</h2>
				</div>
			</div>
		</div>
	);
}
