"use client";

import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { ArrowRight } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";

import { useHeaderTitle } from "@/app/_store/header-title-store";

export default function Header() {
	const router = useRouter();
	const pathname = usePathname();

	const title = useHeaderTitle(state => state.title);

	return (
		<div className="w-full px-4 h-14 flex border-b border-solid border-black1">
			<div className="h-14 pr-12 border-r border-solid border-black1">
				<Image src={logo} alt="DrConvert Logo" />
			</div>
			<div className="flex-1 flex items-center pl-4 justify-between">
				<h1 className="font-bold text-white/90 text-[1.625rem]">
					{pathname === "/my-projects"
						? "Meus Projetos"
						: pathname === "/settings"
							? "Configurações"
							: pathname === "/classifications"
								? "Classificações"
								: pathname === "/dashboard"
									? "Dashboard"
									: pathname === "/manual"
										? "Manual de Usuário"
										: title}
				</h1>
				{(pathname.includes("/project/") ||
					pathname.includes("/non-saved/")) && (
						<ArrowRight
							onClick={() => router.push("/my-projects")}
							className="h-[1.5rem] w-[1.5rem] text-gray1 hover:text-pink duration-150 cursor-pointer"
						/>
					)}
			</div>
		</div>
	);
}
