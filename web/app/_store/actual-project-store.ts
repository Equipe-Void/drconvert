import { create } from "zustand";
import { Project } from "../_services/users/projects";

interface ProjectStore {
	project: Project;
	addProject: (project: Project) => void;
	removeProject: () => void;
}

export const useProjectStore = create<ProjectStore>(set => ({
	project: {} as Project,
	addProject: project => set(state => ({ project: project })),
	removeProject: () => set({ project: {} as Project }),
}));
