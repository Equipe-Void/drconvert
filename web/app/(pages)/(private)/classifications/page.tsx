"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ListMagnifyingGlass, Plus } from "@phosphor-icons/react";

import ClassificationCard from "./_components/classification-card";
import { ClassificationForm } from "./_components/classification-form";
import { useClassificationFormStateStore } from "@/app/_store/classification-form-store";

export default function NonSaved() {
	const useClassificationFormState = useClassificationFormStateStore();

	return (
		<div className="p-8">
			<header className="flex justify-between">
				<div className="flex gap-x-2">
					<input
						type="text"
						placeholder="Digite uma classificação"
						className="w-[22.875rem] h-12 pr-8 bg-black1/60 border border-solid border-transparent focus-within:border-pink placeholder-gray1 outline-none px-4 font-normal text-sm
						text-gray1 focus-within:text-white rounded-md"
						// value={filterText}
						// onChange={e => setFilterText(e.target.value)}
					/>
					<button className="h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4">
						<ListMagnifyingGlass className="text-white h-[1.12rem] w-[1.12rem]" />
						PESQUISAR
					</button>
				</div>

				<div className="flex gap-x-2">
					<button className="h-12 rounded-md bg-black1 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4">
						<Plus className="text-white h-[1.12rem] w-[1.12rem]" />
						ADICIONAR CLASSIFICAÇÃO
					</button>
				</div>
			</header>

			<div className="rounded-md border border-solid border-black1 mt-8">
				<header className="flex items-center justify-between px-6 py-2">
					<div className="flex gap-x-20">
						<p className="font-medium text-sm text-white/85 w-[9rem]">
							Nome da classificação
						</p>
						<p className="font-medium text-sm text-white/85 w-[8rem]">
							Tipos adicionados
						</p>
						<p className="font-medium text-sm text-white/85 w-[10rem]">
							Exemplo
						</p>
					</div>
					<p className="font-medium text-xs text-gray1">
						Total de classificações (0)
					</p>
				</header>
				<div className="flex-1 bg-black1 px-6">
					{[1, 2, 3].map((c, i) => {
						return <ClassificationCard index={i} />;
					})}
				</div>
			</div>

			<div className="absolute right-8 bottom-8">
				<Dialog.Root>
					<Dialog.Trigger>
						<div
							onClick={() => useClassificationFormState.addOpen(true)}
							className="bg-pink rounded-full px-3 py-3 max-w-14 cursor-pointer duration-200 hover:shadow-button hover:scale-110">
							<Plus className="h-8 w-8 text-white" weight="bold" />
						</div>
						<ClassificationForm
							open={useClassificationFormState.open}
							setOpen={useClassificationFormState.addOpen}
						/>
					</Dialog.Trigger>
				</Dialog.Root>
			</div>
		</div>
	);
}
