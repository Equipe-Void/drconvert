"use client";

import { useRouter } from "next/navigation";
import { Trash, Pencil } from "@phosphor-icons/react";
import { deleteClassification, updateClassification } from "@/app/_services/users/classification";

interface Classification {
  id: number;
  name: string;
  fromTo: [
    {
      id: number;
      input: string;
      output: string;
    },
  ];
}

interface ClassificationCardProps {
  classification: Classification;
  index: number;
  onEdit: (classification: Classification) => void; // Linha adicionada
}

export default function ClassificationCard({
  classification,
  index,
  onEdit,
}: ClassificationCardProps) {
  const router = useRouter();

  const handleDeleteClassification = async () => {
    await deleteClassification({ classificationId: classification.id });
    router.push("/classifications");
  };

  const handleEditClassification = async () => {
    // Lógica para abrir o formulário de edição e atualizar a classificação
    const newClassification = {
      id: classification.id,
      name: "Novo Nome", // Adicione a lógica para capturar o novo nome
      fromTo: [
        {
          id: classification.fromTo[0].id,
          input: "Nova Entrada", // Adicione a lógica para capturar o novo input
          output: "Nova Saída",  // Adicione a lógica para capturar o novo output
        },
      ],
    };

    await updateClassification({
      classificationId: newClassification.id,
      name: newClassification.name,
      fromTo: newClassification.fromTo,
    });

    // Atualizar a página ou estado da aplicação conforme necessário
    router.push("/classifications");
  };

  return (
    <div className={`${index !== 0 && "border-t border-t-gray2"} py-5 flex justify-between items-center`}>
      <div className="flex gap-x-20">
        <div className="flex items-center gap-x-20">
          <p className="text-xs w-[9rem] text-gray1 font-black">
            {classification.name}
          </p>
          <p className="text-xs w-[8rem] text-gray1 font-black">
            {classification.fromTo.length} {classification.fromTo.length === 1 ? "tipo" : "tipos"}
          </p>
          {classification.fromTo && classification.fromTo.length > 0 ? (
            <p className="text-xs w-auto text-white font-black px-3 py-2 rounded-md bg-gray2/50">
              entrada: "{classification.fromTo[0].input}" / saída: "{classification.fromTo[0].output}"
            </p>
          ) : (
            <p className="text-xs w-auto text-white font-black px-3 py-2 rounded-md bg-gray2/50">
              Nenhum par de entrada/saída definido
            </p>
          )}
        </div>
      </div>
      
      <div className="flex gap-2">
      
        <Pencil
       //   onClick={() => onEdit(classification)} // Modifique esta linha
       //   className="h-[1.12rem] w-[1.12rem] text-gray2 hover:text-blue-500 duration-150"
        />
        

        <Trash
          onClick={() => handleDeleteClassification()}
          className="h-[1.12rem] w-[1.12rem] text-gray2 hover:text-red duration-150"
        />
      </div>
    </div>
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
    height: 24,
    display: "flex",
    width: "100%",
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
