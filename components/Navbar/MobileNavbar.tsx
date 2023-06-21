import { useEffect, useState } from "react";

export default function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			<div className="visible bg-home-color fixed z-50 lg:invisible flex text-white w-full flex-col">
				<div onClick={() => setIsOpen(!isOpen)} className="m-6">
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>
				{isOpen === true && (
					<div className="flex flex-col text-left my-6">
						<a className="border-y border-purple-400 p-5" href="#home">
							Home
						</a>
						<a className="p-5" href="#about">
							About
						</a>
						<a className="border-t border-purple-400 p-5" href="#work">
							Work
						</a>
						<a className="border-y border-purple-400 p-5" href="#contact">
							Contact
						</a>
					</div>
				)}
			</div>
		</nav>
	);
}
