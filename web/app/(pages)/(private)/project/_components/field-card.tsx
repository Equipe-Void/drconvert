"use client";

import { clsx } from "clsx";
import Select from "react-select";
import { useState } from "react";
import { Check, Trash } from "@phosphor-icons/react";

import { useNonSavedFieldStore } from "@/app/_store/non-saved-field-store";
import { fieldTypes, yesOrNot } from "@/app/_constants/field-select-values";
import { useNonSavedProjectStore } from "@/app/_store/non-saved-project.store";

interface FieldCardProps {
	field?: {
		name: string;
		type: string;
		isIdentifier: boolean;
		isNullable: boolean;
	};
	header?: string;
	nonSaved: boolean;
	index: number;
}

export interface Option {
	value: string;
	label: string;
}

export default function FieldCard({
	field,
	nonSaved,
	header,
	index,
}: FieldCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(true);
	const [type, setType] = useState<Option | null>({} as Option);
	const [name, setName] = useState(header || (field && field?.name));
	const [isNullable, setIsNullable] = useState<Option | null>({} as Option);
	const [isIdentifier, setIsIdentifier] = useState<Option | null>({} as Option);

	const addField = useNonSavedFieldStore(state => state.addfield);
	const removeHeader = useNonSavedProjectStore(state => state.removeHeaders);

	const handleRemoveField = () => {
		setIsOpen(true);

		if (nonSaved) {
			removeHeader(header!);
		}
	};

	const handleEnd = () => {
		setIsEditing(false);

		if (type && isNullable && isIdentifier) {
			addField({
				name: name!,
				type: type!.value,
				isNullable: isNullable!.value === "true",
				isIdentifier: isIdentifier!.value === "true",
			});
		}
	};

	return (
		<div
			className={`${index !== 0 && "border-t border-t-gray2"} py-5 flex justify-between items-center`}>
			<div className="flex gap-x-20">
				<input
					type="text"
					placeholder="Nome do campo"
					value={name}
					onChange={e => setName(e.target.value)}
					className={clsx(
						"px-2 rounded-md h-6 w-[7rem] bg-gray2/50 font-medium text-xs text-gray1",
						"outline-none border-0 focus-within:text-white",
					)}
				/>

				<Select
					defaultValue={type}
					onChange={setType}
					options={fieldTypes}
					className="rounded-md h-6 w-[6rem] bg-gray2/50 font-medium text-xs text-gray1"
					unstyled
					styles={customStyles}
				/>

				<Select
					defaultValue={isNullable}
					onChange={setIsNullable}
					options={yesOrNot}
					className="rounded-md h-6 w-[7rem] bg-gray2/50 font-medium text-xs text-gray1"
					unstyled
					styles={customStyles}
				/>

				<Select
					defaultValue={isIdentifier}
					onChange={setIsIdentifier}
					options={yesOrNot}
					className="rounded-md h-6 w-[8rem] bg-gray2/50 font-medium text-xs text-gray1"
					unstyled
					styles={customStyles}
				/>
			</div>
			<div className="flex items-center gap-6 cursor-pointer">
				<Check
					onClick={() => handleEnd()}
					className={`h-[1.12rem] w-[1.12rem] ${(isEditing && "text-green") || "text-gray2"} duration-150`}
				/>

				<Trash
					onClick={() => handleRemoveField()}
					className="h-[1.12rem] w-[1.12rem] text-gray2 hover:text-red duration-150"
				/>
			</div>
		</div>
	);
}

const customStyles = {
	option: (defaultStyles: any, state: { isSelected: any }) => ({
		backgroundColor: "rgb(63 67 73)",
		color: state.isSelected ? "#FFF" : "rgb(128 128 129)",
		fontSize: "0.75rem",
		lineHeight: "1rem",
		padding: 6,
	}),
	control: (defaultStyles: any) => ({
		height: 24,
		display: "flex",
		width: "100%",
		backgroundColor: "rgb(63 67 73 / 0.5)",
		borderRadius: "0.375rem",
		border: "none",
	}),
	singleValue: (defaultStyles: any) => ({
		...defaultStyles,
		color: "rgb(128 128 129)",
		backgroundColor: "transparent",
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
		padding: 8,
	}),
};
