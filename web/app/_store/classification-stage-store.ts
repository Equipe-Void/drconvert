import { create } from "zustand";

interface ClassificationStageStore {
	stage: number;
	addStage: (stage: number) => void;
	removeStage: () => void;
}

export const useClassificationStageStore = create<ClassificationStageStore>(
	set => ({
		stage: 1,
		addStage: stage => set(state => ({ stage: stage })),
		removeStage: () => set({ stage: 1 }),
	}),
);
