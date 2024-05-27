import React from "react";

interface FilterBarProps {
  setFilterStage: (stage: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilterStage }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col items-center">
        <button
          onClick={() => setFilterStage("landzone")}
          className="text-white px-4 py-2 rounded bg-black1"
        >
          <span className="font-bold">LANDZONE - PROJETOS: </span>{/* Aqui vou colocar a quantidade de projetos de landzone */}
        </button>

        {/* Espaço */}
        <div className="h-8"></div>
        {/* Espaço para os cards de landzone */}
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={() => setFilterStage("bronze")}
          className="text-white px-4 py-2 rounded bg-black1"
        >
          <span className="font-bold">BRONZE - PROJETOS: 3</span>{/* Aqui vou colocar a quantidade de projetos de bronze */}
        </button>
        {/* Espaço */}
        <div className="h-8"></div>
        {/* Espaço para os cards de bronze */}
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={() => setFilterStage("silver")}
          className="text-white px-4 py-2 rounded bg-black1"
        >
          <span className="font-bold">SILVER - PROJETOS: 1</span>{/* Aqui vou colocar a quantidade de projetos de silver */}
        </button>
        {/* Espaço */}
        <div className="h-8"></div>
        {/* Espaço para os cards de silver */}
      </div>
    </div>
  );
};

export default FilterBar;
