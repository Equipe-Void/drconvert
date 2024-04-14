"use client";

import { FloppyDisk, ListMagnifyingGlass, Plus } from "@phosphor-icons/react";

import FieldCard from "../_components/field-card";
import { useProjectStore } from "@/app/_store/actual-project-store";

export default function Project() {
	const project = useProjectStore(state => state.project);

	return (
		<div className="p-8">
			<header className="flex justify-between">
				<div className="flex gap-x-2">
					<input
						type="text"
						placeholder="Digite o nome de um campo"
						className="w-[22.875rem] h-12 pr-8 bg-black1/60 border border-solid border-transparent focus-within:border-pink placeholder-gray1 outline-none px-4 font-normal text-sm
						text-gray1 focus-within:text-white rounded-md"
					/>
					<button className="h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4 hover:bg-black1 duration-200">
						<ListMagnifyingGlass className="text-white h-[1.12rem] w-[1.12rem]" />
						PESQUISAR
					</button>
				</div>

				<div className="flex gap-x-2">
					<button className="h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4 hover:bg-black1 duration-200">
						<FloppyDisk className="text-white h-[1.12rem] w-[1.12rem]" />
						SALVAR
					</button>
					<button className="h-12 rounded-md bg-black1 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4">
						<Plus className="text-white h-[1.12rem] w-[1.12rem]" />
						ADICIONAR CAMPO
					</button>
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
					{project.fields.map((f, i) => {
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
