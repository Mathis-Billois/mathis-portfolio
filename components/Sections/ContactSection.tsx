import MainTitle from "../Title/MainTitle";
import Button from "../Button/Button";
import SectionTitle from "../Title/SectionTitle";
import Input from "../Input/Input";
import Image from "next/image";
import TextArea from "../Input/TextArea";

export default function ContactSection() {
	return (
		<div id="contact" className="bg-black w-full lg:h-screen h-auto flex flex-col py-12">
			<div className="flex flex-col overflow-x-hidden w-full">
				<SectionTitle extraStyle="lg:mt-24 text-center">contact</SectionTitle>
			</div>
			<div className="flex flex-col lg:flex-row justify-center lg:space-x-36 mt-12">
				<div data-aos="fade-right" className="lg:w-1/4 w-full lg:text-left text-center space-y-11">
					<MainTitle>Let's Talk</MainTitle>
					<p className="lg:text-lg text-base text-white lg:mx-0 mx-6">
						I am currently looking for an internship in May and an apprenticeship for September 2024 as a Web Developer and if my profile interests
						you, do not hesitate to contact me.
					</p>
					<div className="flex flex-row lg:justify-start justify-center space-x-4">
						<a target="_blank" href="https://www.linkedin.com/in/mathis-billois-16b167284/">
							<Image className="bg-white rounded-full" alt="logo" src="/linkedin.png" height={25} width={25} />
						</a>
						<a target="_blank" href="https://github.com/Mathis-Billois">
							<Image className="bg-white rounded-full" alt="logo" src="/github.png" height={25} width={25} />
						</a>
						<a target="_blank" href="https://www.instagram.com/mts.crea/">
							<Image className="bg-white rounded-full" alt="logo" src="/instagram.png" height={25} width={25} />
						</a>
					</div>
				</div>
				<div className="flex flex-col m-6 lg:m-0 lg:w-72">
					<Input placeholder="Write your name here" name="name" />
					<Input placeholder="Write your email here" name="email" />
					<TextArea placeholder="Write your message here" name="message" />
					<div className="text-right mt-2 lg:mt-8">
						<Button>Send Message</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
