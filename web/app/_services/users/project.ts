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

interface CreateProjectRequest {
	userId: number;
	name: string;
}

interface UpdateProjectRequest {
	projectId: number;
	name: string;
	totalFields: number;
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

export async function createProject({ userId, name }: CreateProjectRequest) {
	return await fetchWrapper<Project>("projects", {
		method: "POST",
		body: JSON.stringify({
			userId: userId,
			name: name.toString(),
		}),
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}

export async function updateProject({
	name,
	projectId,
	totalFields,
}: UpdateProjectRequest) {
	return await fetchWrapper<Project>(`projects/${projectId}`, {
		method: "PUT",
		body: JSON.stringify({
			name: name.toString(),
			totalFields: totalFields,
		}),
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
