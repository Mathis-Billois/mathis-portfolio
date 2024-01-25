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
					<Image className="rounded-t-2xl" alt="logo" src={image} height={70} width={288} />
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

/*
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
*/
