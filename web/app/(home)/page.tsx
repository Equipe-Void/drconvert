"use client";

import { Plus } from "@phosphor-icons/react";

import ProjectCard from "./_components/project-card";

export default function Home() {
	return (
		<div className="flex-1 grid grid-cols-2 gap-8 px-8 py-8">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<div className="bg-pink rounded-full px-3 py-3 max-w-14 cursor-pointer hover:bg-pink/80 duration-200 shadow-button sticky bottom-8 left-full">
				<Plus className="h-8 w-8 text-white" weight="bold" />
			</div>
		</div>
	);
}
