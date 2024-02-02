import { useState, useEffect } from "react";
import MainTitle from "../Title/MainTitle";

export default function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenuAndScrollTo = (sectionId: string) => {
		setIsOpen(false);
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}

		return () => {
			document.body.style.overflow = "visible";
		};
	}, [isOpen]);

	return (
		<nav>
			<div className={`fixed z-50 lg:invisible flex text-white w-full flex-col ${isOpen ? "open" : ""}`}>
				<div className={`m-6 ${isOpen ? "blurred translate-x-0" : "translate-x-0"}`}>
					<div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-3xl bg-white p-2" onClick={toggleMenu}>
						<div className="space-y-2">
							<span
								className={`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out ${
									isOpen ? "translate-y-1.5 rotate-45" : ""
								}`}
							></span>
							<span
								className={`block h-1 w-8 origin-center rounded-full bg-violet-500 transition-transform ease-in-out ${
									isOpen ? "w-10 -translate-y-1.5 -rotate-45" : ""
								}`}
							></span>
						</div>
					</div>
				</div>
				{isOpen === true && (
					<div className="flex flex-col mobile-nav-text-color items-center text-white text-xl pt-10">
						<a className="p-2" href="#home" onClick={() => closeMenuAndScrollTo("home")}>
							<MainTitle>Home</MainTitle>
						</a>
						<a className="p-2" href="#about" onClick={() => closeMenuAndScrollTo("about")}>
							<MainTitle>About</MainTitle>
						</a>
						<a className="p-2" href="#work" onClick={() => closeMenuAndScrollTo("work")}>
							<MainTitle>Work</MainTitle>
						</a>
						<a className="p-2" href="#contact" onClick={() => closeMenuAndScrollTo("contact")}>
							<MainTitle>Contact</MainTitle>
						</a>
					</div>
				)}
			</div>
			{isOpen && <div className="overlay" onClick={toggleMenu}></div>}
		</nav>
	);
}
