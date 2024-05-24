import { Files, Folders, Gear, ChartPie } from "@phosphor-icons/react";

export const userRoutes = [
	{
		name: "Meus Projetos",
		path: "/my-projects",
		icon: Folders,
	},
	{
	 	name: "Classificações",
	 	path: "/classifications",
	 	icon: Files,
	},
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: ChartPie,
	},
	{
		name: "Settings",
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
			dashboard: {
				name: "/dashboard",
			},
			project: {
				name: "/project",
			},
			classifications: {
				name: "/classifications",
			},
		},
	},
	public: {
		login: "/login",
	},
};
