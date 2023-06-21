export default function TextArea({ name, placeholder, extraStyle }: any) {
	const firstLetter = name.charAt(0).toUpperCase();
	const otherLetters = name.slice(1);
	console.log(firstLetter);
	console.log(otherLetters);
	console.log(firstLetter + otherLetters);
	const labelValue = firstLetter + otherLetters;

	return (
		<div className="flex flex-col mb-4 w-full">
			<label className="text-white mb-2" htmlFor={name}>
				{labelValue}
			</label>
			<textarea
				placeholder={placeholder}
				className={"bg-zinc-400 placeholder:text-black placeholder:opacity-50 px-3 w-full h-14 rounded-lg h-32 p-3 max-h-72 " + extraStyle}
				id={name}
				name={name}
			/>
		</div>
	);
}
