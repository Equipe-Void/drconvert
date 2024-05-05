import Cookies from "js-cookie";

import { fetchWrapper } from "@/app/_functions/fetch-wrapper";
import { Option } from "@/app/(pages)/(private)/project/_components/field-card";
interface UploadFileRequest {
	file: File;
	projectId: number;
	separator: string;
	hasHeader: Option;
}

export async function uploadFile({
	file,
	projectId,
	separator,
	hasHeader,
}: UploadFileRequest) {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("projectId", projectId.toString());
	formData.append("separator", separator);
	formData.append("hasHeader", hasHeader.value);

	return await fetchWrapper<string[]>("files/upload", {
		method: "POST",
		body: formData,
		headers: new Headers({
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
