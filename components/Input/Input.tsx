export default function Input({ name, placeholder, extraStyle }: any) {
	const firstLetter = name.charAt(0).toUpperCase();
	const otherLetters = name.slice(1);
	console.log(firstLetter);
	console.log(otherLetters);
	console.log(firstLetter + otherLetters);
	const labelValue = firstLetter + otherLetters;

	return (
		<div className="flex flex-col items-center mb-4">
			<label className="text-white mb-2 after:content-['*'] after:text-red-500 block text-sm font-medium text-start w-full" htmlFor={name}>
				{labelValue}
			</label>
			<input
				placeholder={placeholder}
				className={"bg-zinc-400 placeholder:text-black placeholder:opacity-50 px-3 w-full h-14 rounded-lg " + extraStyle}
				id={name}
				type="text"
				name={name}
			/>
		</div>
	);
}
