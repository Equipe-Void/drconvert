"use client";

import { clsx } from "clsx";
import Select from "react-select";
import { useState } from "react";
import { Check, Trash } from "@phosphor-icons/react";

import { useStageStore } from "@/app/_store/stage-store";
import { remove_accents } from "@/app/_functions/remove-accents";
import { useNonSavedFieldStore } from "@/app/_store/non-saved-field-store";
import { fieldTypes, yesOrNot } from "@/app/_constants/field-select-values";
import { useNonSavedProjectStore } from "@/app/_store/non-saved-project.store";

interface FieldCardProps {
	field?: {
		id: number;
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

	const stage = useStageStore(state => state.stage);
	const addField = useNonSavedFieldStore(state => state.addField);
	const removeHeader = useNonSavedProjectStore(state => state.removeHeaders);

	const handleRemoveField = () => {
		setIsOpen(true);

		if (nonSaved) {
			removeHeader(header!);
		}
	};

	const handleEnd = () => {
		setIsEditing(false);

		if (name && type && isNullable && isIdentifier) {
			addField({
				name: name!,
				type: type!.value,
				isNullable: isNullable!.value === "true",
				isIdentifier: false,
			});
		}
	};

	const handleEndField = () => {
		if (name && type && isNullable && isIdentifier) {
			setIsEditing(false);

			addField({
				id: field!.id,
				name: remove_accents(name),
				type: type!.value || field!.type,
				isNullable: isNullable!.value === "true" || field!.isNullable,
				isIdentifier: isIdentifier!.value === "true" || field!.isIdentifier,
			});
		}
	};

	return (
		<div
			className={`${index !== 0 && "border-t border-t-gray2"} py-5 flex justify-between items-center`}>
			<div className="flex gap-x-20">
				{!nonSaved && stage === "B" ? (
					<div className="flex items-center gap-x-20">
						<p className="text-xs w-[7rem] text-gray1 font-black">{name}</p>
						<p className="text-xs w-[6rem] text-gray1 font-black">
							{field?.type}
						</p>
						<p className="text-xs w-[7rem] text-gray1 font-black">
							{(field?.isNullable && "Sim") || "Não"}
						</p>
					</div>
				) : null}

				{nonSaved || stage === "LZ" ? (
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
							defaultValue={
								(field && { value: field!.type, label: field!.type }) || type
							}
							onChange={setType}
							options={fieldTypes}
							className="rounded-md h-6 w-[6rem] bg-gray2/50 font-medium text-xs text-gray1"
							unstyled
							styles={customStyles}
						/>

						<Select
							defaultValue={
								(field && {
									value: field!.isNullable.toString(),
									label: field!.isNullable.toString(),
								}) ||
								isNullable
							}
							onChange={setIsNullable}
							options={yesOrNot}
							className="rounded-md h-6 w-[7rem] bg-gray2/50 font-medium text-xs text-gray1"
							unstyled
							styles={customStyles}
						/>
					</div>
				) : null}

				{!nonSaved && stage === "B" ? (
					<Select
						defaultValue={
							(field && {
								value: field!.isIdentifier.toString(),
								label: field!.isIdentifier.toString(),
							}) ||
							isIdentifier
						}
						onChange={setIsIdentifier}
						options={yesOrNot}
						className="rounded-md h-6 w-[8rem] bg-gray2/50 font-medium text-xs text-gray1"
						unstyled
						styles={customStyles}
					/>
				) : null}
			</div>
			<div className="flex items-center gap-6 cursor-pointer">
				{(field && (
					<Check
						onClick={() => handleEndField()}
						className={`h-[1.12rem] w-[1.12rem] ${(isEditing && "text-green") || "text-gray2"} duration-150`}
					/>
				)) || (
					<Check
						onClick={() => handleEnd()}
						className={`h-[1.12rem] w-[1.12rem] ${(isEditing && "text-green") || "text-gray2"} duration-150`}
					/>
				)}

				{!field && (
					<Trash
						onClick={() => handleRemoveField()}
						className="h-[1.12rem] w-[1.12rem] text-gray2 hover:text-red duration-150"
					/>
				)}
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
