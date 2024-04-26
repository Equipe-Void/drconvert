"use client";

import clsx from "clsx";
import Select from "react-select";
import ReactLoading from "react-loading";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import * as Dialog from "@radix-ui/react-dialog";
import { Trash, Upload } from "@phosphor-icons/react";
import { ChangeEvent, useCallback, useState } from "react";
import { fieldTypes, yesOrNot } from "@/app/_constants/field-select-values";

import { AlertDialog } from "@/app/_components/alert";
import { useUserStore } from "@/app/_store/user-store";
import { convertBytes } from "@/app/_functions/convert-size";
import { uploadFile } from "@/app/_services/users/upload-file";
import { useHeaderTitle } from "@/app/_store/header-title-store";
import { createProject, updateProject } from "@/app/_services/users/project";
import { useNonSavedProjectStore } from "@/app/_store/non-saved-project.store";
import { Option } from "../project/_components/field-card";

interface UploadFormProps {
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

export function UploadForm({ open, setOpen }: UploadFormProps) {
	const router = useRouter();

	const user = useUserStore(state => state.user);
	const title = useHeaderTitle(state => state.addTitle);
	const [addHeaders, addProject, addTotalFields] = useNonSavedProjectStore(
		state => [state.addHeaders, state.addProject, state.addTotalFields],
	);

	const [name, setName] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [separator, setSeparator] = useState("");
	const [files, setFiles] = useState<File[] | null>(null);
	const [hasHeader, setHasHeader] = useState<Option | null>({} as Option);
	
	const handleSeparator = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length <= 1) {
			setSeparator(event.target.value);
		}
	};

	const onDrop = useCallback((files: File[]) => {
		setFiles(files);
	}, []);

	const dropzone = useDropzone({
		onDrop,
		accept: {
			"text/csv": [".csv"],
		},
	});

	const removeFile = (index: number) => {
		setFiles([...files!.slice(0, index), ...files!.slice(index + 1)]);
	};

	const removeAllFiles = () => {
		setFiles(null);
	};

	const handleUpload = async () => {
		setLoading(true);
		if (files && separator && hasHeader?.label) {
			const project = await createProject({
				userId: user.id,
				name,
			});

			const headers = await uploadFile({
				file: files![0],
				projectId: project.id,
				separator,
				hasHeader,
			});

			await updateProject({
				projectId: project.id,
				name: project.name,
				totalFields: headers.length,
			});

			addProject(project);
			addHeaders(headers);
			addTotalFields(headers.length);

			title(project.name);

			router.push(
				`/project/non-saved/${project.name.toLocaleLowerCase().split("").toString()}`,
			);
			setLoading(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen} defaultOpen={false}>
			<AlertDialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title="Erro ao fazer upload de arquivo"
				message="Todos os parâmetros devem ser informados para realizar o upload do arquivo"
			/>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black0/90 inset-0 fixed overflow-y-auto grid place-items-center p-8">
					<Dialog.Content className="bg-black1 text-black2 min-w-[28.813rem] h-auto shadow-lg shadow-black0/25 rounded-xl">
						<Dialog.Title className="flex items-center gap-4 text-white font-medium px-8 py-8 border-b border-b-gray2/30">
							<Upload className="h-7 w-7 text-white" weight="fill" />
							<div className="flex flex-col gap-1">
								<p className="font-bold text-white text-base">Upload</p>
								<p className="font-normal text-gray1 text-xs">
									Selecione o arquivo que você quer enviar abaixo
								</p>
							</div>
						</Dialog.Title>

						<div
							{...dropzone.getRootProps()}
							className={`border-dashed border-2 border-gray2 hover:border-pink/65 duration-200 ${dropzone.isDragActive && "border-pink/65"} rounded-md flex flex-col gap-8 mx-8 mt-8 py-8 items-center justify-center cursor-pointer`}>
							<input {...dropzone.getInputProps()} className="hidden" />
							<Upload className="h-7 w-7 text-white" weight="fill" />
							<div className="flex flex-col gap-1 items-center">
								<p className="font-medium text-xs text-white">
									Arraste e solte seu arquivo ou{" "}
									<span className="text-pink">
										clique para enviar manualmente
									</span>
								</p>
								<p className="font-medium text-xs text-gray1">
									Apenas formato de arquivo .csv
								</p>
							</div>
						</div>

						<div className="flex gap-4 w-full mt-4 px-8 flex-col">
							<input
								type="text"
								className={clsx(
									"w-full text-xs py-3 rounded-md outline-none border-0 bg-gray2",
									"focus-within:text-white text-gray1 px-4 placeholder-gray1",
								)}
								placeholder="Defina um nome para o projeto"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
							<div className="flex gap-4 w-full">
								<input
									type="text"
									className={clsx(
										"w-1/2 text-xs py-3 rounded-md outline-none border-0 bg-gray2",
										"focus-within:text-white text-gray1 px-4 placeholder-gray1",
									)}
									placeholder="Especifique o separador"
									maxLength={1}
									value={separator}
									onChange={handleSeparator}
								/>
								<Select
									options={yesOrNot}
									className="rounded-md w-1/2 bg-gray2 font-medium text-xs text-gray1"
									placeholder="Tem header?"
									unstyled
									styles={customStyles}
									onChange={setHasHeader}
								/>
							</div>
						</div>

						<div className="text-white text-xs font-semibold flex flex-col gap-3 px-8 py-8">
							<p className="text-white text-xs font-semibold">
								Arquivos selecionados{" "}
								<span className="text-gray1">({files?.length})</span>
							</p>
							{files &&
								files.map((file, index) => {
									return (
										<div className="bg-gray2 rounded-md px-4 py-3 flex items-center justify-between">
											<div>
												<p className="font-semibold text-xs text-white/80">
													{file.name}
												</p>
												<p className="font-medium text-[10px] text-gray1">
													{convertBytes(file.size)}
												</p>
											</div>
											<Trash
												onClick={() => removeFile(index)}
												className="h-4 w-4 text-gray1 hover:text-red duration-200 cursor-pointer"
											/>
										</div>
									);
								})}
						</div>

						<footer className="flex gap-4 w-full mt-4 px-8 pb-8">
							<Dialog.Close
								onClick={() => removeAllFiles()}
								className="cursor-pointer py-3 px-8 bg-gray2 rounded-md flex items-center justify-center font-semibold text-white text-xs">
								Cancelar
							</Dialog.Close>
							<button
								type="submit"
								onClick={() => handleUpload()}
								className="cursor-pointer py-3 w-fit flex-1 bg-pink rounded-md flex items-center justify-center font-semibold text-white text-xs">
								{(loading && (
									<ReactLoading
										type="spin"
										color="white"
										height={14}
										width={14}
									/>
								)) ||
									"Criar projeto"}
							</button>
						</footer>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

const customStyles = {
	option: (defaultStyles: any, state: { isSelected: any }) => ({
		backgroundColor: "rgb(63 67 73)",
		color: state.isSelected ? "#FFF" : "rgb(128 128 129)",
		fontSize: "0.75rem",
		lineHeight: "1rem",
		padding: 6,
	}),
	control: (defaultStyles: any) => ({
		height: "100%",
		display: "flex",
		width: "100%",
		padding: "0 15px",
		backgroundColor: "rgb(63 67 73 / 0.5)",
		borderRadius: "0.375rem",
		border: "none",
	}),
	singleValue: (defaultStyles: any) => ({
		...defaultStyles,
		color: "rgb(128 128 129)",
		backgroundColor: "transparent",
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
		padding: 8,
	}),
};
