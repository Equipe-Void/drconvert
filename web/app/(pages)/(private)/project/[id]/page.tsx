"use client";

import { useState } from "react";
import ReactLoading from "react-loading";
import { useRouter } from "next/navigation";
import { FloppyDisk, ListMagnifyingGlass, Plus } from "@phosphor-icons/react";

import FieldCard from "../_components/field-card";
import { AlertDialog } from "@/app/_components/alert";
import { Field, updateField } from "@/app/_services/users/field";
import { useProjectStore } from "@/app/_store/actual-project-store";
import { useNonSavedFieldStore } from "@/app/_store/non-saved-field-store";

export default function Project() {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [filterText, setFilterText] = useState("");

	const useField = useNonSavedFieldStore();
	const project = useProjectStore(state => state.project);

	const filteredItems = project.fields.filter(item =>
		item.name.toLocaleLowerCase().includes(filterText),
	);

	const fs = [] as Omit<Field, "project">[];
	project.fields.map(f => fs.push(f));
	useField.fields.map(f => fs.push(f));

	const fieldsToDisplay = filterText ? filteredItems : project.fields;

	const handleUpdateField = () => {
		setLoading(true);
		useField.fields.map(async field => {
			await updateField({ field });
		});

		setIsOpen(true);
		useField.removeFields();
		setTimeout(() => {
			router.push("/my-projects");
		}, 3000);
		setLoading(false);
	};

	return (
		<div className="p-8">
			<AlertDialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title="Atualização dos campos"
				message="Os campos foram atualizados com sucesso!"
			/>
			<header className="flex justify-between">
				<div className="flex gap-x-2">
					<input
						type="text"
						placeholder="Digite o nome de um campo"
						className="w-[22.875rem] h-12 pr-8 bg-black1/60 border border-solid border-transparent focus-within:border-pink placeholder-gray1 outline-none px-4 font-normal text-sm
						text-gray1 focus-within:text-white rounded-md"
						value={filterText}
						onChange={e => setFilterText(e.target.value)}
					/>
					<button className="h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4">
						<ListMagnifyingGlass className="text-white h-[1.12rem] w-[1.12rem]" />
						PESQUISAR
					</button>
				</div>

				<div className="flex gap-x-2">
					<button
						onClick={() => handleUpdateField()}
						className="h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4 hover:bg-black1 duration-200">
						<FloppyDisk className="text-white h-[1.12rem] w-[1.12rem]" />
						{(loading && (
							<ReactLoading type="spin" color="white" height={14} width={14} />
						)) ||
							"SALVAR"}
					</button>
					{/* <button
						onClick={() => handleAddField()}
						className="h-12 rounded-md bg-black1 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4">
						<Plus className="text-white h-[1.12rem] w-[1.12rem]" />
						ADICIONAR CAMPO
					</button> */}
				</div>
			</header>

			<div className="rounded-md border border-solid border-black1 mt-8">
				<header className="flex items-center justify-between px-6 py-2">
					<div className="flex gap-x-20">
						<p className="font-medium text-sm text-white/85 w-[7rem]">
							Nome do campo
						</p>
						<p className="font-medium text-sm text-white/85 w-[6rem]">
							Tipo do campo
						</p>
						<p className="font-medium text-sm text-white/85 w-[7rem]">
							Aceita valor nulo?
						</p>
						<p className="font-medium text-sm text-white/85 w-[8rem]">
							É um identificador?
						</p>
					</div>
					<p className="font-medium text-xs text-gray1">
						Total de campos ({project.fields.length})
					</p>
				</header>
				<div className="flex-1 bg-black1 px-6">
					{fieldsToDisplay.map((f, i) => {
						return (
							<FieldCard
								index={i}
								nonSaved={false}
								field={f}
								key={`${f.id}+${i}`}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
