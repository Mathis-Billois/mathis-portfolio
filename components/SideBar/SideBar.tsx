import Image from "next/image";
export default function SideBar() {
	return (
		<div className="invisible lg:visible flex flex-col fixed lg:ml-16 lg:mt-56 space-y-4 ml-8 mt-20">
			<Image className="bg-white rounded-full" alt="logo" src="/linkedin.png" height={25} width={25} />
			<Image className="bg-white rounded-full" alt="logo" src="/github.png" height={25} width={25} />
			<Image className="bg-white rounded-full" alt="logo" src="/instagram.png" height={25} width={25} />
		</div>
	);
}
