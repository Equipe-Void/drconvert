import Cookies from "js-cookie";

import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

interface UploadFileRequest {
	file: File;
	projectId: number;
	separator: string;
}

interface Headers {
	Array: string;
}

export async function uploadFile({
	file,
	projectId,
	separator,
}: UploadFileRequest) {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("projectId", projectId.toString());
	formData.append("separator", separator);

	return await fetchWrapper<Headers>("files/upload", {
		method: "POST",
		body: formData,
		headers: new Headers({
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
