import WorkCard from "../Card/WorkCard";
import SectionTitle from "../Title/SectionTitle";

export default function WorkSection() {
	return (
		<div id="work" className="w-full h-screen flex flex-col">
			<div className="bg-home-color w-full h-auto flex flex-col lg:mt-24 my-12">
				<div className="flex flex-col overflow-x-hidden w-full">
					<SectionTitle extraStyle="text-center mb-9">work</SectionTitle>
					<div className="text-white text-center lg:text-lg lg:mb-0 mb-12 text-sm flex justify-center lg:space-x-14 space-x-8">
						<h2>My Projects</h2>
					</div>
				</div>
				<div className="flex lg:justify-center items-center overflow-x-scroll snap-x">
					<div className="flex flex-row flex-nowrap lg:flex-wrap lg:justify-center lg:mx-40 lg:my-8 space-x-4">
						<WorkCard title="Portfolio" description="J'ai le plaisir de vous présenter mon Portfolio Website." image="/Logo.PNG" />
						<WorkCard title="Mangaka" description="Voici un projet réalisé en cours afin d'évaluer mes compétences." image="/logo-mangaka.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
