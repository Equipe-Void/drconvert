"use client";

import { HTMLAttributes, useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends HTMLAttributes<HTMLDivElement | HTMLInputElement> {
	placeholder: string;
	type: string;
	register?: UseFormRegisterReturn<string>;
}

const Input = ({ placeholder, type, register }: InputProps) => {
	const [show, setShow] = useState(false);

	return (
		<div
			className={`w-full h-14 pr-8 rounded-md bg-black1 border border-solid border-transparent focus-within:border-pink
      ${type === "password" && "flex"}`}>
			<input
				{...register}
				type={(show && "text") || type}
				className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm
      text-gray1 focus-within:text-white rounded-md"
				placeholder={placeholder}
			/>
			{type === "password" && (
				<div
					className="h-full flex items-center cursor-pointer"
					onClick={() => setShow(!show)}>
					{(show && <Eye className="text-gray1 h-6 w-6" />) || (
						<EyeSlash className="text-gray1 h-6 w-6" />
					)}
				</div>
			)}
		</div>
	);
};

export default Input;
