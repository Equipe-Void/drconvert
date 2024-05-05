"use client";

import { Files } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

import ClassificationFormStage1 from "./classification-form-stage1";
import ClassificationFormStage2 from "./classification-form-stage2";
import { useClassificationStageStore } from "@/app/_store/classification-stage-store";

interface ClassificationFormProps {
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

export function ClassificationForm({ open, setOpen }: ClassificationFormProps) {
	const classificationStage = useClassificationStageStore();

	return (
		<Dialog.Root open={open} onOpenChange={setOpen} defaultOpen={false}>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black0/90 inset-0 fixed overflow-y-auto grid place-items-center p-8">
					<Dialog.Content className="bg-black1 text-black2 min-w-[28.813rem] h-auto shadow-lg shadow-black0/25 rounded-xl">
						<Dialog.Title className="flex items-center gap-4 text-white font-medium px-8 py-8 border-b border-b-gray2/30">
							<Files className="h-7 w-7 text-white" weight="fill" />
							<div className="flex flex-col gap-1">
								<p className="font-bold text-white text-base">
									{(classificationStage.stage === 1 && "Classificação") ||
										"Tipos de entrada/saída"}
								</p>
								<p className="font-normal text-gray1 text-xs">
									{(classificationStage.stage === 1 &&
										"Complete as etapas para criar uma classificação") ||
										"Adicione pelo menos um exemplo de entrada/saída para concluir"}
								</p>
							</div>
						</Dialog.Title>

						{(classificationStage.stage === 1 && (
							<ClassificationFormStage1 />
						)) || <ClassificationFormStage2 />}
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
