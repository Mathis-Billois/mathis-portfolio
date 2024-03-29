import { useState } from "react";
import MainTitle from "../Title/MainTitle";
import Button from "../Button/Button";
import SectionTitle from "../Title/SectionTitle";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e: { target: { name: any; value: any } }) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8888/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				alert("Message sent successfully!");

				setFormData({
					name: "",
					email: "",
					message: "",
				});
			} else {
				alert("Failed to send message.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			alert("An error occurred while sending the message.");
		}
	};

	return (
		<div id="contact" className="bg-black w-full lg:h-screen h-auto flex flex-col py-12">
			<div className="flex flex-col overflow-x-hidden w-full">
				<SectionTitle extraStyle="lg:mt-24 text-center">contact</SectionTitle>
			</div>
			<div className="flex flex-col lg:flex-row justify-center lg:space-x-36 mt-12">
				<div data-aos="fade-right" className="lg:w-1/4 w-full lg:text-left text-center space-y-11">
					<MainTitle>Let's Talk</MainTitle>
					<p className="lg:text-lg text-base text-white lg:mx-0 mx-6">
						I am currently looking for an internship in May and an apprenticeship for September 2024 as a Web Developer and if my profile interests
						you, do not hesitate to contact me.
					</p>
				</div>
				<div className="flex flex-col m-6 lg:m-0 lg:w-72">
					<form onSubmit={handleSubmit}>
						<Input placeholder="Write your name here" name="name" value={formData.name} onChange={handleChange} />
						<Input placeholder="Write your email here" name="email" value={formData.email} onChange={handleChange} />
						<TextArea placeholder="Write your message here" name="message" value={formData.message} onChange={handleChange} />
						<div className="text-right mt-2 lg:mt-8">
							<Button type="submit">Send Message</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
