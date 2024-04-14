import { create } from "zustand";

interface HeaderTitleStore {
	title: string;
	addTitle: (title: string) => void;
	removeTitle: () => void;
}

export const useHeaderTitle = create<HeaderTitleStore>(set => ({
	title: "",
	addTitle: title => set(state => ({ title: title })),
	removeTitle: () => set({ title: "" }),
}));
