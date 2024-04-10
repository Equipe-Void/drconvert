import { create } from "zustand";

export interface User {
	id: number;
	userType: string;
	name: string;
	email: string;
	roles: [
		{
			id: number;
			role: string;
		},
	];
	authorities: [
		{
			authority: string;
		},
	];
	username: string;
}

interface UserStore {
	user: User;
	addUser: (user: User) => void;
	removeUser: () => void;
}

export const useUserStore = create<UserStore>(set => ({
	user: {} as User,
	addUser: user => set(state => ({ user: user })),
	removeUser: () => set({ user: {} as User }),
}));
