export default function Navbar() {
	return (
		<nav>
			<div className="invisible lg:visible flex space-x-14 fixed text-white w-full justify-end lg:pt-10 lg:pr-12 lg:text-lg text-base pt-5 pr-6 z-50">
				<a className="underline" href="#home">
					Home
				</a>
				<a className="underline" href="#about">
					About
				</a>
				<a className="underline" href="#work">
					Work
				</a>
				<a className="underline" href="#contact">
					Contact
				</a>
			</div>
		</nav>
	);
}
