"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

import ProjectCard from "../_components/project-card";
import { UploadForm } from "../_components/upload-form";

export default function MyProjects() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex-1 grid grid-cols-2 gap-8 px-8 py-8">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />

			<Dialog.Root>
				<Dialog.Trigger className="flex justify-end sticky bottom-8 left-full">
					<div
						onClick={() => setOpen(true)}
						className="bg-pink rounded-full px-3 py-3 max-w-14 cursor-pointer hover:bg-pink/80 duration-200 shadow-button">
						<Plus className="h-8 w-8 text-white" weight="bold" />
					</div>
					<UploadForm open={open} setOpen={setOpen} />
				</Dialog.Trigger>
			</Dialog.Root>
		</div>
	);
}
