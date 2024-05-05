import { create } from "zustand";
import { Classification } from "../_services/users/classification";

interface ActualClassificationStore {
	classification: Classification;
	addClassification: (classification: Classification) => void;
	removeClassification: () => void;
}

export const useActualClassificationStore = create<ActualClassificationStore>(
	set => ({
		classification: {} as Classification,
		addClassification: classification =>
			set(state => ({ classification: classification })),
		removeClassification: () => set({ classification: {} as Classification }),
	}),
);
