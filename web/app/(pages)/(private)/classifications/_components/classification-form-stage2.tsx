import clsx from "clsx";
import { useState } from "react";
import ReactLoading from "react-loading";

import { AlertDialog } from "@/app/_components/alert";
import { useReloadPageStore } from "@/app/_store/reload-page";
import { createFromTo } from "@/app/_services/users/classification";
import { useClassificationStageStore } from "@/app/_store/classification-stage-store";
import { useActualClassificationStore } from "@/app/_store/actual-classification-store";
import { useClassificationFormStateStore } from "@/app/_store/classification-form-store";

export default function ClassificationFormStage2() {
	const useReloadPage = useReloadPageStore();
	const classificationStage = useClassificationStageStore();
	const actualClassification = useActualClassificationStore();
	const useClassificationFormState = useClassificationFormStateStore();

	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [alertIsOpen, setAlertIsOpen] = useState(false);

	const handleCreateFromTo = async () => {
		setIsLoading(true);

		if (input === "" || output === "") {
			setIsLoading(false);
			setAlertIsOpen(true);
		}

		await createFromTo({
			input: input,
			output: output,
			classificationId: actualClassification.classification.id!,
		});

		classificationStage.removeStage();
		actualClassification.removeClassification();
		setIsLoading(false);
		useClassificationFormState.removeOpen();
		useReloadPage.addReloadPage(true);
	};

	return (
		<div>
			<AlertDialog
				isOpen={alertIsOpen}
				setIsOpen={setAlertIsOpen}
				title="Erro ao criar entrada/saída"
				message="Todos os parâmetros devem ser informados"
			/>
			<div className="flex gap-4 mt-4 px-8 pb-8">
				<input
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
					className={clsx(
						"w-full text-sm py-3 rounded-md outline-none bg-gray2/50",
						"focus-within:text-white text-gray1 px-4 placeholder-gray1",
						"border border-solid border-transparent focus-within:border-pink",
					)}
					placeholder="Digite o valor de entrada"
				/>
				<input
					type="text"
					value={output}
					onChange={e => setOutput(e.target.value)}
					className={clsx(
						"w-full text-sm py-3 rounded-md outline-none bg-gray2/50",
						"focus-within:text-white text-gray1 px-4 placeholder-gray1",
						"border border-solid border-transparent focus-within:border-pink",
					)}
					placeholder="Digite o valor de saída"
				/>
			</div>

			<div className="flex gap-4 w-full mt-4 px-8 pb-8">
				<button
					type="submit"
					onClick={handleCreateFromTo}
					className="cursor-pointer py-3 w-fit flex-1 bg-pink rounded-md flex items-center justify-center font-bold text-white text-xs">
					{(isLoading && (
						<ReactLoading type="spin" color="white" height={14} width={14} />
					)) ||
						"Criar tipo de entrada/saída"}
				</button>
			</div>

			<footer className="flex gap-2 w-full justify-end mt-4 px-8 pb-8">
				<div
					className={`h-8 w-8 rounded-md ${(classificationStage.stage === 1 && "bg-red") || "bg-gray2 opacity-40"} flex items-center justify-center font-black text-xs text-white`}>
					1
				</div>
				<div
					className={`h-8 w-8 rounded-md ${(classificationStage.stage === 2 && "bg-red") || "bg-gray2 opacity-40"} flex items-center justify-center font-black text-xs text-white`}>
					2
				</div>
			</footer>
		</div>
	);
}
