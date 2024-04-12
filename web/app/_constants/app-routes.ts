import { Folders, Gear } from "@phosphor-icons/react";

export const userRoutes = [
	{
		name: "Meus Projetos",
		path: "/my-projects",
		icon: Folders,
	},
	{
		name: "Configurações",
		path: "/settings",
		icon: Gear,
	},
];

export const APP_ROUTES = {
	private: {
		user: {
			myProjects: {
				name: "/my-projects",
			},
			settings: {
				name: "/settings",
			},
			project: {
				name: "/project",
			},
		},
	},
	public: {
		login: "/login",
	},
};
