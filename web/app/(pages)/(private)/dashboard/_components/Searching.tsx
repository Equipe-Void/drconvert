import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ListMagnifyingGlass, Calendar } from "@phosphor-icons/react";

interface SearchingProps {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleSearch: () => void;
}

const Searching: React.FC<SearchingProps> = ({
  projectName,
  setProjectName,
  selectedDate,
  setSelectedDate,
  handleSearch,
}) => {
  const [selectedUser, setSelectedUser] = useState<string>("");

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex gap-4 items-center mb-4">
      <input
        type="text"
        placeholder="Nome do projeto..."
        className="w-2/5 h-12 bg-black1 border border-solid border-gray-600 placeholder-gray-400 text-gray-300 outline-none px-4 text-sm rounded mr-2"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button
        className="h-12 bg-black1 border border-solid border-gray-600 text-white font-bold px-4 rounded flex items-center justify-center"
        onClick={handleSearch}
      >
        <span className="mr-2">
          <ListMagnifyingGlass />
        </span>
        PESQUISAR
      </button>
      <select
        value={selectedUser}
        onChange={handleUserChange}
        className="w-2/5 h-12 bg-black1 border border-solid border-gray-600 text-gray-300 outline-none px-4 text-sm rounded mr-2"
      >
        <option value="">Selecionar Usuário</option>
        <option value="1">Usuário 1</option>
        <option value="2">Usuário 2</option>
        <option value="3">Usuário 3</option>
      </select>
      <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
        <Calendar />
      </span>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="DATA"
        className="h-12 bg-black1 border border-solid border-gray-600 text-gray-300 outline-none pl-10 pr-4 text-sm rounded z-0"
      />
    </div>

    </div>
  );
};

export default Searching;
