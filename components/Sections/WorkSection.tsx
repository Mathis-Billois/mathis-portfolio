import WorkCard from "../Card/WorkCard";
import SectionTitle from "../Title/SectionTitle";

export default function WorkSection() {
	return (
		<div id="work" className="w-full h-auto flex flex-col">
			<div className="bg-home-color w-full h-auto flex flex-col lg:mt-24 my-12">
				<div className="flex flex-col overflow-x-hidden w-full">
					<SectionTitle extraStyle="text-center mb-9">work</SectionTitle>
					<div className="text-white text-center lg:text-lg lg:mb-0 mb-12 text-sm flex justify-center lg:space-x-14 space-x-8">
						<h2>ALL</h2>
						<h2>WEB DEVELOPMENT</h2>
						<h2>WEB DESIGN</h2>
					</div>
				</div>
				<div className="flex lg:justify-center items-center overflow-x-scroll snap-x">
					<div className="flex flex-row flex-nowrap lg:flex-wrap lg:justify-center lg:mx-40 lg:my-8">
						<WorkCard title="PROJECT 1" description="voici mon tout premier projet ..." image="/Logo.PNG" />
						<WorkCard title="PROJECT 2" description="voici mon second projet ..." image="/Logo1.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
