import { create } from "zustand";

import { Field } from "../_services/users/field";

interface FieldStore {
	fields: Omit<Field, "project">[];
	addField: (field: Omit<Field, "project">) => void;
	removeFields: () => void;
}

export const useNonSavedFieldStore = create<FieldStore>(set => ({
	fields: [] as Field[],
	addField: field =>
		set(state => ({
			fields: [...state.fields, field],
		})),
	removeFields: () => set({ fields: [] as Field[] }),
}));
