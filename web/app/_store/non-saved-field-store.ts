import { create } from "zustand";

import { Field } from "../_services/users/field";

interface FieldStore {
	fields: Omit<Field, "project">[];
	addfield: (field: Omit<Field, "project">) => void;
	removefields: () => void;
}

export const useNonSavedFieldStore = create<FieldStore>(set => ({
	fields: [] as Field[],
	addfield: field =>
		set(state => ({
			fields: [...state.fields, field],
		})),
	removefields: () => set({ fields: [] as Field[] }),
}));
