import { create } from "zustand";

interface ReloadPageStore {
	reloadPage: boolean;
	addReloadPage: (reloadPage: boolean) => void;
	removeReloadPage: () => void;
}

export const useReloadPageStore = create<ReloadPageStore>(set => ({
	reloadPage: false,
	addReloadPage: reloadPage => set(state => ({ reloadPage: reloadPage })),
	removeReloadPage: () => set({ reloadPage: false }),
}));
