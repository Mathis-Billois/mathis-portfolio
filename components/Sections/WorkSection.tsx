import SectionTitle from "../Title/SectionTitle";

export default function WorkSection() {
	return (
		<div id="work" className="bg-home-color w-full h-auto flex flex-col lg:mt-24 my-12">
			<div className="flex flex-col overflow-x-hidden w-full">
				<SectionTitle extraStyle="text-center mb-9">work</SectionTitle>
				<div className="text-white text-center lg:text-lg lg:mb-0 mb-12 text-sm flex justify-center lg:space-x-14 space-x-8">
					<h2>ALL</h2>
					<h2>WEB DEVELOPMENT</h2>
					<h2>WEB DESIGN</h2>
				</div>
			</div>
			<div className="flex overflow-x-scroll">
				<div className="flex flex-nowrap lg:flex-wrap lg:justify-center lg:mx-40 lg:mt-8 lg:mt-4 ">
					<div
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="400"
						data-aos-offset="0"
						className="bg-zinc-400 w-52 h-48 rounded-2xl lg:m-10 m-5"
					></div>
					<div
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="400"
						data-aos-offset="0"
						className="bg-zinc-400 w-52 h-48 rounded-2xl lg:m-10 m-5"
					></div>
					<div
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="400"
						data-aos-offset="0"
						className="bg-zinc-400 w-52 h-48 rounded-2xl lg:m-10 m-5"
					></div>
					<div
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="400"
						data-aos-offset="0"
						className="bg-zinc-400 w-52 h-48 rounded-2xl lg:m-10 m-5"
					></div>
					<div
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="400"
						data-aos-offset="0"
						className="bg-zinc-400 w-52 h-48 rounded-2xl lg:m-10 m-5"
					></div>
					<div
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="400"
						data-aos-offset="0"
						className="bg-zinc-400 w-52 h-48 rounded-2xl lg:m-10 m-5"
					></div>
				</div>
			</div>
		</div>
	);
}
