"use client";

import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

import ProjectCard from "../_components/project-card";
import { useUserStore } from "@/app/_store/user-store";
import { UploadForm } from "../_components/upload-form";
import { Project, findAllProjects } from "@/app/_services/users/project";

export default function MyProjects() {
	const user = useUserStore(state => state.user);

	const [open, setOpen] = useState(false);
	const [projects, setProjects] = useState<Project[]>([]);

	const data = async () => {
		const res = await findAllProjects({ userId: user.id });
		setProjects(res);
	};

	useEffect(() => {
		data();
	}, []);

	return (
		<div className="flex-1 h-full grid grid-cols-2 gap-x-8 gap-y-8 px-8 py-8">
			{projects.map(project => {
				return <ProjectCard project={project} key={project.id} />;
			})}

			<div className="absolute right-8 bottom-8">
				<Dialog.Root>
					<Dialog.Trigger>
						<div
							onClick={() => setOpen(true)}
							className="bg-pink rounded-full px-3 py-3 max-w-14 cursor-pointer duration-200 hover:shadow-button hover:scale-110">
							<Plus className="h-8 w-8 text-white" weight="bold" />
						</div>
						<UploadForm open={open} setOpen={setOpen} />
					</Dialog.Trigger>
				</Dialog.Root>
			</div>
		</div>
	);
}
