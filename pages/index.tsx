import Footer from "@/components/Footer/Footer";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";
import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import HomeSection from "@/components/Sections/HomeSection";
import WorkSection from "@/components/Sections/WorkSection";
import SideBar from "@/components/SideBar/SideBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<main className="">
			<Navbar />
			<MobileNavbar />
			<SideBar />
			<HomeSection />
			<AboutSection />
			<WorkSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
