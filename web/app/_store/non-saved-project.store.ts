import { create } from "zustand";
import { Project } from "../_services/users/project";

interface ProjectStore {
	project: Project;
	addProject: (project: Project) => void;
	removeProject: () => void;
}

export const useNonSavedProjectStore = create<ProjectStore>(set => ({
	project: {} as Project,
	addProject: project => set(state => ({ project: project })),
	removeProject: () => set({ project: {} as Project }),
}));
