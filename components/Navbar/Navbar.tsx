export default function Navbar() {
	return (
		<nav>
			<div className="invisible lg:visible flex space-x-14 fixed text-white w-full justify-end lg:pt-10 lg:pr-12 lg:text-lg text-base pt-5 pr-6">
				<a className="hover:text-2xl hover:-translate-y-1 hover:scale-110 ease-in-out duration-300" href="#home">
					Home
				</a>
				<a className="hover:text-2xl hover:-translate-y-1 hover:scale-110 ease-in-out duration-300" href="#about">
					About
				</a>
				<a className="hover:text-2xl hover:-translate-y-1 hover:scale-110 ease-in-out duration-300" href="#work">
					Work
				</a>
				<a className="hover:text-2xl hover:-translate-y-1 hover:scale-110 ease-in-out duration-300" href="#contact">
					Contact
				</a>
			</div>
		</nav>
	);
}
