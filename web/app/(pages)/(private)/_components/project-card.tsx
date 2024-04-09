"use client";

import { GearSix } from "@phosphor-icons/react";

export default function ProjectCard() {
	return (
		<div className="bg-black1 rounded-md min-w-[30.938rem] px-6 py-6 hover:bg-black1/85 duration-200">
			<div className="flex item-center justify-between">
				<h2 className="font-semibold text-white/75 text-xl">Projeto 1</h2>
				<div className="cursor-pointer">
					<GearSix className="h-6 w-6 text-gray2 hover:text-white/65 duration-200" />
				</div>
			</div>
			<div className="flex justify-between py-5">
				<div className="flex flex-col gap-1">
					<p className="font-bold text-white text-4xl">20</p>
					<p className="font-medium text-white/35 text-xs">Total de campos</p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="font-bold text-white text-4xl">10</p>
					<p className="font-medium text-white/35 text-xs">Campos válidos</p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="font-bold text-white text-4xl">2</p>
					<p className="font-medium text-white/35 text-xs">Chaves primárias</p>
				</div>
			</div>
			<div className="flex justify-end">
				<div className="cursor-pointer w-max font-bold text-white/75 text-xs bg-gray2/35 rounded-md px-4 py-3 hover:text-white duration-200">
					IR PARA O PROJETO
				</div>
			</div>
		</div>
	);
}
