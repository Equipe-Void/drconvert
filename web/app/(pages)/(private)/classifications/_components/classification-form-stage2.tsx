import clsx from "clsx";
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Trash } from "@phosphor-icons/react";
import { Classification } from "@/app/_services/users/classification";
import { AlertDialog } from "@/app/_components/alert";
import { useReloadPageStore } from "@/app/_store/reload-page";
import { createFromTo } from "@/app/_services/users/classification";
import { useClassificationStageStore } from "@/app/_store/classification-stage-store";
import { useActualClassificationStore } from "@/app/_store/actual-classification-store";
import { useClassificationFormStateStore } from "@/app/_store/classification-form-store";

interface Pair {
  input: string;
  output: string;
}

interface ClassificationFormStage2Props {
  classification?: Classification | null;
}

const ClassificationFormStage2: React.FC<ClassificationFormStage2Props> = ({ classification }) => {
  const useReloadPage = useReloadPageStore();
  const classificationStage = useClassificationStageStore();
  const actualClassification = useActualClassificationStore();
  const useClassificationFormState = useClassificationFormStateStore();

  const [pairs, setPairs] = useState<Pair[]>([{ input: "", output: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  useEffect(() => {
    if (classification && classification.fromTo) {
      setPairs(classification.fromTo.map(ft => ({ input: ft.input, output: ft.output })));
    } else if (actualClassification.classification && actualClassification.classification.fromTo) {
      setPairs(actualClassification.classification.fromTo.map(ft => ({ input: ft.input, output: ft.output })));
    }
  }, [classification, actualClassification.classification]);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newPairs = [...pairs];
    newPairs[index][event.target.name as keyof Pair] = event.target.value;
    setPairs(newPairs);
  };

  const addPair = () => {
    setPairs([...pairs, { input: "", output: "" }]);
  };

  const deletePair = (index: number) => {
    if (pairs.length > 1) {
      const newPairs = pairs.filter((_, i) => i !== index);
      setPairs(newPairs);
    }
  };

  const handleCreateFromTo = async () => {
    setIsLoading(true);

    const emptyPair = pairs.some(pair => pair.input === "" || pair.output === "");
    if (emptyPair) {
      setIsLoading(false);
      setAlertIsOpen(true);
      return;
    }

    for (const pair of pairs) {
      await createFromTo({
        input: pair.input,
        output: pair.output,
        classificationId: classification?.id || actualClassification.classification.id!,
      });
    }

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
      {pairs.map((pair, index) => (
        <div key={index} className="flex gap-4 mt-4 px-8 pb-8 items-center">
          <input
            type="text"
            name="input"
            value={pair.input}
            onChange={e => handleInputChange(index, e)}
            className={clsx(
              "w-full text-sm py-3 rounded-md outline-none bg-gray2/50",
              "focus-within:text-white text-gray1 px-4 placeholder-gray1",
              "border border-solid border-transparent focus-within:border-pink",
            )}
            placeholder="Digite o valor de entrada"
          />
          <input
            type="text"
            name="output"
            value={pair.output}
            onChange={e => handleInputChange(index, e)}
            className={clsx(
              "w-full text-sm py-3 rounded-md outline-none bg-gray2/50",
              "focus-within:text-white text-gray1 px-4 placeholder-gray1",
              "border border-solid border-transparent focus-within:border-pink",
            )}
            placeholder="Digite o valor de saída"
          />
          {pair.input && pair.output && (
            <span className="text-green-500">✔</span>
          )}
          {pairs.length > 1 && (
            <button
              onClick={() => deletePair(index)}
              className="text-gray-400 hover:text-gray-700"
            >
              <Trash className="h-[1.12rem] w-[1.12rem] text-gray2 hover:text-red duration-150" />
            </button>
          )}
        </div>
      ))}

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={addPair}
          className="w-12 h-12 bg-gray2/70 text-white rounded-full flex items-center justify-center text-3xl text-gray-400"
        >
          +
        </button>
      </div>

      <div className="flex gap-4 w-full mt-4 px-8 pb-8">
        <button
          type="submit"
          onClick={handleCreateFromTo}
          className="cursor-pointer py-3 w-fit flex-1 bg-pink rounded-md flex items-center justify-center font-bold text-white text-xs"
        >
          {isLoading ? <ReactLoading type="spin" color="white" height={14} width={14} /> : "Criar tipo de entrada/saída"}
        </button>
      </div>

      <footer className="flex gap-2 w-full justify-end mt-4 px-8 pb-8">
        <div className={`h-8 w-8 rounded-md ${classificationStage.stage === 1 ? "bg-red" : "bg-gray2 opacity-40"} flex items-center justify-center font-black text-xs text-white`}>
          1
        </div>
        <div className={`h-8 w-8 rounded-md ${classificationStage.stage === 2 ? "bg-red" : "bg-gray2 opacity-40"} flex items-center justify-center font-black text-xs text-white`}>
          2
        </div>
      </footer>
    </div>
  );
};

export default ClassificationFormStage2;
