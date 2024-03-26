"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

interface InputProps {
  placeholder: string;
  type: string;
}

const Input = ({ placeholder, type }: InputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`w-full h-14 pr-8 rounded-md bg-black1 border border-solid border-transparent focus-within:border-pink
      ${type === "password" && "flex"}`}
    >
      <input
        type={(show && "text") || type}
        className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm
      text-gray1 focus-within:text-white rounded-md"
        placeholder={placeholder}
      />
      {type === "password" && (
        <div className="h-full flex items-center cursor-pointer" onClick={() => setShow(!show)}>
          {(show && <Eye className="text-gray1 h-6 w-6" />) || (
            <EyeSlash className="text-gray1 h-6 w-6" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
