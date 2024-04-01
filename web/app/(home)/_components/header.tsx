"use client";

import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();

	return (
		<div className="w-full px-4 h-14 flex border-b border-solid border-black1">
			<div className="h-14 pr-12 border-r border-solid border-black1">
				<Image src={logo} alt="DrConvert Logo" />
			</div>
			<div className="flex-1 flex items-center pl-4">
				<h1 className="font-bold text-white/90 text-[1.625rem]">
					{(pathname === "/" && "Meus Projetos") || "Configurações"}
				</h1>
			</div>
		</div>
	);
}
