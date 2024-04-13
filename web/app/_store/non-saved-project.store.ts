import { create } from "zustand";
import { Project } from "../_services/users/project";

interface ProjectStore {
	project: Project;
	headers: string[];
	totalFields: number;
	addProject: (project: Project) => void;
	removeProject: () => void;
	addHeaders: (headers: string[]) => void;
	removeHeaders: () => void;
	addTotalFields: (totalFields: number) => void;
	removeTotalFields: () => void;
}

export const useNonSavedProjectStore = create<ProjectStore>(set => ({
	project: {} as Project,
	addProject: project => set(state => ({ project: project })),
	removeProject: () => set({ project: {} as Project }),
	headers: [],
	addHeaders: headers => set(state => ({ headers: headers })),
	removeHeaders: () => set({ headers: [] }),
	totalFields: 0,
	addTotalFields: totalFields => set(state => ({ totalFields: totalFields })),
	removeTotalFields: () => set({ totalFields: 0 }),
}));
