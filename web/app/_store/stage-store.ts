import { create } from "zustand";

interface StageStore {
	stage: String;
	addStage: (stage: string) => void;
	removeStage: () => void;
}

export const useStageStore = create<StageStore>(set => ({
	stage: "LZ",
	addStage: stage => set(state => ({ stage: stage })),
	removeStage: () => set({ stage: "LZ" }),
}));
