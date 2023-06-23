export default function Footer() {
	return (
		<nav>
			<div className="bg-footer text-black flex flex-col items-center w-full h-auto lg:h-48">
				<div className="flex flex-col lg:flex-row text-center space-y-6 lg:space-y-0 lg:space-x-14 mt-9 text-lg">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#work">Work</a>
					<a href="#contact">Contact</a>
				</div>
				<div>
					<h1 className="text-4xl footer-title my-12">Mathis Billois</h1>
				</div>
			</div>
		</nav>
	);
}
