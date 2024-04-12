import Cookies from "js-cookie";

import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

export interface Project {
	id: number;
	name: string;
	fields: [
		{
			id: number;
			name: string;
			type: string;
			isIdentifier: boolean;
			isNullable: boolean;
		},
	];
	files: File[];
	totalFields: number;
}

interface MyProjectsRequest {
	userId: number;
}

export async function findAllProjects({ userId }: MyProjectsRequest) {
	return await fetchWrapper<Project[]>(`projects/${userId}`, {
		method: "GET",
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}