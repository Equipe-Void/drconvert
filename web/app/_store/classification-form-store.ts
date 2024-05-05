import { create } from "zustand";

interface ClassificationFormStateStore {
	open: boolean;
	addOpen: (open: boolean) => void;
	removeOpen: () => void;
}

export const useClassificationFormStateStore =
	create<ClassificationFormStateStore>(set => ({
		open: false,
		addOpen: open => set(state => ({ open: open })),
		removeOpen: () => set({ open: false }),
	}));
