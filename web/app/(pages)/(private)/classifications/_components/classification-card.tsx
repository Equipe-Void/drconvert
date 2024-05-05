"use client";

import { useRouter } from "next/navigation";
import { Trash } from "@phosphor-icons/react";

import { deleteClassification } from "@/app/_services/users/classification";

interface Classification {
	id: number;
	name: string;
	fromTo: [
		{
			id: number;
			input: string;
			output: string;
		},
	];
}

interface ClassificationCardProps {
	classification: Classification;
	index: number;
}

export default function ClassificationCard({
	classification,
	index,
}: ClassificationCardProps) {
	const router = useRouter();

	const handleDeleteClassification = async () => {
		await deleteClassification({ classificationId: classification.id });
		router.push("/classifications");
	};

	return (
		<div
			className={`${index !== 0 && "border-t border-t-gray2"} py-5 flex justify-between items-center`}>
			<div className="flex gap-x-20">
				<div className="flex items-center gap-x-20">
					<p className="text-xs w-[9rem] text-gray1 font-black">
						{classification.name}
					</p>
					<p className="text-xs w-[8rem] text-gray1 font-black">
						{classification.fromTo.length}{" "}
						{classification.fromTo.length === 1 ? "tipo" : "tipos"}
					</p>
					<p className="text-xs w-auto text-white font-black px-3 py-2 rounded-md bg-gray2/50">
						entrada: "{classification.fromTo[0].input}" / saída: "
						{classification.fromTo[0].output}"
					</p>
				</div>
			</div>
			<Trash
				onClick={handleDeleteClassification}
				className="h-[1.12rem] w-[1.12rem] text-gray2 hover:text-red duration-150"
			/>
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
