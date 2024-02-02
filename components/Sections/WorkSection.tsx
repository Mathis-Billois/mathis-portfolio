import WorkCard from "../Card/WorkCard";
import SectionTitle from "../Title/SectionTitle";

export default function WorkSection() {
	return (
		<div id="work" className="w-full h-screen flex flex-col overflow-x-hidden">
			<div className="bg-home-color w-full h-screen flex flex-col lg:mt-24 my-12">
				<div className="flex flex-col w-full">
					<SectionTitle extraStyle="text-center mb-9">work</SectionTitle>
				</div>
				<div className="flex lg:justify-center items-center overflow-x-hidden">
					<div className="flex flex-row flex-nowrap overflow-x-auto lg:overflow-x-auto overflow-y-hidden lg:overflow-y-hidden lg:justify-center lg:mx-40 lg:my-8 space-x-4">
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						{/* ... (autres WorkCard) */}
					</div>
				</div>
			</div>
		</div>
	);
}
