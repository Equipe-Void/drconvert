"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ListMagnifyingGlass, Plus } from "@phosphor-icons/react";

import { useActualClassificationStore } from "@/app/_store/actual-classification-store";
import {
  Classification,
  findAllClassifications,
} from "@/app/_services/users/classification";
import { useUserStore } from "@/app/_store/user-store";
import { useReloadPageStore } from "@/app/_store/reload-page";
import ClassificationCard from "./_components/classification-card";
import { ClassificationForm } from "./_components/classification-form";
import { useClassificationFormStateStore } from "@/app/_store/classification-form-store";

export default function NonSaved() {
  const router = useRouter();

  const userStore = useUserStore((state) => state.user);
  const classificationFormStateStore = useClassificationFormStateStore();
  const useReloadPage = useReloadPageStore();

  const [filterText, setFilterText] = useState("");
  const [classifications, setClassifications] = useState<Classification[]>();
  const [currentClassification, setCurrentClassification] = useState<Classification | null>(null);

  useEffect(() => {
    const handleGetClassifications = async () => {
      const classifications = await findAllClassifications({
        userId: userStore.id,
      });

      setClassifications(classifications);
    };

    handleGetClassifications();
  }, [userStore.id]);

  const handleSetCurrentClassification = (classification: Classification) => {
    setCurrentClassification(classification);
    classificationFormStateStore.addOpen(true); // Abre o formulário de edição
  };

  const filteredItems = classifications?.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterText)
  );

  const classificationsToDisplay = filterText ? filteredItems : classifications;

  return (
    <div className="p-8">
      <header className="flex justify-between">
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Digite uma classificação"
            className="w-[22.875rem] h-12 pr-8 bg-black1/60 border border-solid border-transparent focus-within:border-pink placeholder-gray1 outline-none px-4 font-normal text-sm text-gray1 focus-within:text-white rounded-md"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <button className="h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4">
            <ListMagnifyingGlass className="text-white h-[1.12rem] w-[1.12rem]" />
            PESQUISAR
          </button>
        </div>

        <div className="flex gap-x-2">
          <Dialog.Root>
            <Dialog.Trigger>
              <button
                onClick={() => classificationFormStateStore.addOpen(true)}
                className="h-12 rounded-md bg-black1 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-4"
              >
                <Plus className="text-white h-[1.12rem] w-[1.12rem]" />
                ADICIONAR CLASSIFICAÇÃO
              </button>
            </Dialog.Trigger>
            <ClassificationForm
              open={classificationFormStateStore.open}
              setOpen={classificationFormStateStore.addOpen}
              classification={currentClassification} // Passe a classificação atual para o formulário
            />
          </Dialog.Root>
        </div>
      </header>

      <div className="rounded-md border border-solid border-black1 mt-8">
        <header className="flex items-center justify-between px-6 py-2">
          <div className="flex gap-x-20">
            <p className="font-medium text-sm text-white/85 w-[9rem]">
              Nome da classificação
            </p>
            <p className="font-medium text-sm text-white/85 w-[8rem]">
              Tipos adicionados
            </p>
            <p className="font-medium text-sm text-white/85 w-[10rem]">
              Exemplo
            </p>
          </div>
          <p className="font-medium text-xs text-gray1">
            Total de classificações ({classificationsToDisplay?.length})
          </p>
        </header>
        <div className="flex-1 bg-black1 px-6">
          {classificationsToDisplay &&
            classificationsToDisplay.map((c, i) => {
              return (
                <ClassificationCard
                  classification={c}
                  index={i}
                  onEdit={handleSetCurrentClassification} // Adicione esta linha
                />
              );
            })}
        </div>
      </div>

      {/* <div className="absolute right-8 bottom-8">
        <Dialog.Root>
          <Dialog.Trigger>
            <div
              onClick={() => classificationFormStateStore.addOpen(true)}
              className="bg-pink rounded-full px-3 py-3 max-w-14 cursor-pointer duration-200 hover:shadow-button hover:scale-110"
            >
              <Plus className="h-8 w-8 text-white" weight="bold" />
            </div>
            <ClassificationForm
              open={classificationFormStateStore.open}
              setOpen={classificationFormStateStore.addOpen}
            />
          </Dialog.Trigger>
        </Dialog.Root>
      </div> */}
    </div>
  );
}
