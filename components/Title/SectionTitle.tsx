export default function SectionTitle({ children, extraStyle }: any) {
	return (
		<h1 data-aos="fade-left" className={"lg:text-2xl text-lg section-title " + extraStyle}>
			{children.toUpperCase()}
		</h1>
	);
}
