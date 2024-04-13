"use client";

import { useNonSavedProjectStore } from "@/app/_store/non-saved-project.store";
import { Trash } from "@phosphor-icons/react";

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
}

export default function FieldCard({ field, nonSaved, header }: FieldCardProps) {
	const removeHeader = useNonSavedProjectStore(state => state.removeHeaders);

	const handleRemoveHeader = () => {
		if (nonSaved) {
			removeHeader(header!);
		}
	};

	return (
		<tr className="border-b dark:bg-black1 border-gray2">
			<td className="px-6 py-4">
				<div
					className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
					<input
						type="text"
						placeholder="Digite um campo..."
						value={(field && field.name) || (header && header)}
						className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white rounded-md"
					/>
				</div>
			</td>
			<td className="px-6 py-4">
				<div
					className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
					<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
						<option className="bg-gray2 text-white" value="">
							Selecione uma opção
						</option>
						<option className="bg-gray2 text-white" value="opcao1">
							Opção 1
						</option>
						<option className="bg-gray2 text-white" value="opcao2">
							Opção 2
						</option>
						<option className="bg-gray2 text-white" value="opcao3">
							Opção 3
						</option>
					</select>
				</div>
			</td>
			<td className="px-6 py-4">
				<div
					className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
					<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
						<option className="bg-gray2 text-white" value="">
							Selecione uma opção
						</option>
						<option className="bg-gray2 text-white" value="opcao1">
							Opção 1
						</option>
						<option className="bg-gray2 text-white" value="opcao2">
							Opção 2
						</option>
						<option className="bg-gray2 text-white" value="opcao3">
							Opção 3
						</option>
					</select>
				</div>
			</td>
			<td className="px-6 py-4 float-right">
				<Trash
					onClick={() => handleRemoveHeader()}
					className="h-10 w-10 text-gray1 hover:text-black1 cursor-pointer hover:bg-pink/80 duration-200 hover:shadow-button p-2 rounded-full"
				/>
			</td>
		</tr>
	);
}
