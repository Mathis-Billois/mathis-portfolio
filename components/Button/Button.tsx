export default function Button({ children }: any) {
	return (
		<button className="text-violet-500 border border-violet-500 hover:bg-violet-500 hover:text-white text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-lg">
			{children}
		</button>
	);
}
