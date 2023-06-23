import Image from "next/image";
export default function SideBar() {
	return (
		<div className="invisible lg:visible flex flex-col fixed lg:ml-16 lg:mt-56 space-y-4 ml-8 mt-20">
			<a target="_blank" href="https://www.linkedin.com/in/mathis-billois-a336ab254/">
				<Image className="bg-white rounded-full" alt="logo" src="/linkedin.png" height={25} width={25} />
			</a>
			<a target="_blank" href="https://github.com/Mathis-Billois">
				<Image className="bg-white rounded-full" alt="logo" src="/github.png" height={25} width={25} />
			</a>
			<a target="_blank" href="https://www.instagram.com/mts.crea/">
				<Image className="bg-white rounded-full" alt="logo" src="/instagram.png" height={25} width={25} />
			</a>
		</div>
	);
}
