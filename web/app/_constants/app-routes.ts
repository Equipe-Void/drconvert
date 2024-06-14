import { Files, Folders, Gear, ChartPie, BookOpenText } from "@phosphor-icons/react";

export const userRoutes = [
	{
		name: "Meus Projetos",
		path: "/my-projects",
		icon: Folders,
	},
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: ChartPie,
	},
	{
		name: "Manual de Usuário",
		path: "/manual",
		icon: BookOpenText,
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
			dashboard: {
				name: "/dashboard",
			},
			project: {
				name: "/project",
			},
			classifications: {
				name: "/classifications",
			},
			manual: {
				name: "/manual",
			},
		},
	},
	public: {
		login: "/login",
	},
};
