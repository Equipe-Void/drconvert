"use client";

import { ListMagnifyingGlass, Plus } from "@phosphor-icons/react";
import ClassificationCard from "./_components/classification-card";

export default function NonSaved() {
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
		</div>
	);
}
