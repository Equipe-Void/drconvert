import clsx from "clsx";
import { useState } from "react";
import ReactLoading from "react-loading";
import * as Dialog from "@radix-ui/react-dialog";

import { AlertDialog } from "@/app/_components/alert";
import { useUserStore } from "@/app/_store/user-store";
import { createClassification } from "@/app/_services/users/classification";
import { useClassificationStageStore } from "@/app/_store/classification-stage-store";
import { useActualClassificationStore } from "@/app/_store/actual-classification-store";

export default function ClassificationFormStage1() {
	const user = useUserStore(state => state.user);
	const actualClassification = useActualClassificationStore(
		state => state.addClassification,
	);
	const classificationStage = useClassificationStageStore();

	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [alertIsOpen, setAlertIsOpen] = useState(false);

	const handleCreateClassification = async () => {
		setIsLoading(true);

		if (name === "") {
			setIsLoading(false);
			setAlertIsOpen(true);
		}

		const classification = await createClassification({
			name: name,
			userId: user.id,
		});

		actualClassification(classification);

		classificationStage.addStage(2);
		setIsLoading(false);
	};

	return (
		<div>
			<AlertDialog
				isOpen={alertIsOpen}
				setIsOpen={setAlertIsOpen}
				title="Erro ao criar classificação"
				message="Todos os parâmetros devem ser informados para criar uma classificação"
			/>
			<div className="mt-4 px-8 pb-8">
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					className={clsx(
						"w-full text-sm h-14 rounded-md outline-none bg-gray2/50",
						"focus-within:text-white text-gray1 px-4 placeholder-gray1",
						"border border-solid border-transparent focus-within:border-pink",
					)}
					placeholder="Digite o nome da classificação"
				/>
			</div>

			<div className="flex gap-4 w-full mt-4 px-8 pb-8">
				<Dialog.Close className="cursor-pointer py-3 px-8 bg-gray2 rounded-md flex items-center justify-center font-bold text-white text-xs">
					Cancelar
				</Dialog.Close>
				<button
					type="submit"
					onClick={handleCreateClassification}
					className="cursor-pointer py-3 w-fit flex-1 bg-pink rounded-md flex items-center justify-center font-bold text-white text-xs">
					{(isLoading && (
						<ReactLoading type="spin" color="white" height={14} width={14} />
					)) ||
						"Criar classificação"}
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
