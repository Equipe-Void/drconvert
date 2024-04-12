"use client";

import { useRouter } from "next/navigation";
import { GearSix } from "@phosphor-icons/react";

import { Project } from "@/app/_services/users/projects";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const router = useRouter();

	return (
		<div className="bg-black1 h-max rounded-md min-w-[30.938rem] px-6 py-6 hover:bg-black1/85 duration-200">
			<div className="flex item-center justify-between">
				<h2 className="font-semibold text-white/75 text-xl">{project.name}</h2>
				<div className="cursor-pointer">
					<GearSix className="h-6 w-6 text-gray2 hover:text-white/65 duration-200" />
				</div>
			</div>
			<div className="flex justify-between py-5">
				<div className="flex flex-col gap-1">
					<p className="font-bold text-white text-4xl">{project.totalFields}</p>
					<p className="font-medium text-white/35 text-xs">Total de campos</p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="font-bold text-white text-4xl">
						{project.fields.length}
					</p>
					<p className="font-medium text-white/35 text-xs">Campos válidos</p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="font-bold text-white text-4xl">
						{project.fields.map(field => {
							let fieldsIdentifiers = [];
							if (field.isIdentifier) {
								fieldsIdentifiers.push(field);
							}
							return fieldsIdentifiers.length;
						})}
					</p>
					<p className="font-medium text-white/35 text-xs">Chaves primárias</p>
				</div>
			</div>
			<div className="flex justify-end">
				<div
					onClick={() => router.push("/project")}
					className="cursor-pointer w-max font-bold text-white/75 text-xs bg-gray2/35 rounded-md px-4 py-3 hover:text-white duration-200">
					IR PARA O PROJETO
				</div>
			</div>
		</div>
	);
}
