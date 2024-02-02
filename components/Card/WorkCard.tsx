import Button from "../Button/Button";

export default function WorkCard({ title, description, image }: any) {
	return (
		<div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" data-aos-offset="0">
			<div className="transition ease-in-out relative mt-16 lg:mt-12 text-gray-700 bg-white shadow-md rounded-xl w-48 h-72 lg:w-72 lg:h-96 work-card">
				<div className="relative overflow-hidden text-white rounded-t-xl" style={{ minHeight: "145px" }}>
					<img src={image} alt="logo" className="w-full h-full object-cover" style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
				</div>
				<div className="p-6">
					<h5 className="block mb-2 font-sans text-lg lg:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
						{title}
					</h5>
					<p className="block font-sans text-base lg:text-lg antialiased font-light leading-relaxed text-inherit">{description}</p>
				</div>
				<div className="p-6 pt-0">
					<Button>More details</Button>
				</div>
			</div>
		</div>
	);
}

/*<div
			data-aos="fade-zoom-in"
			data-aos-easing="ease-in-back"
			data-aos-delay="400"
			data-aos-offset="0"
			className="snap-center flex text-white h-full w-72 rounded-2xl lg:m-10 m-5"
		>
			<div className="transition ease-in-out hover:scale-105 duration-300">
				<div className="flex">
					<Image className="rounded-t-lg" alt="logo" src={image} height={255} width={255} />
				</div>
				<div className="bg-black flex flex-col space-y-4 p-4 justify-center items-left rounded-b-2xl">
					<h5>{title}</h5>
					<p>{description}</p>
					{ TODO : Replace this button by a link to the project }
					<Button>More details</Button>
				</div>
			</div>
		</div>
*/
