"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { userRoutes } from "../../_utils/routes";

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="w-[12.25rem] h-full flex flex-col outline outline-1 outline-black1 pr-2 pt-6">
			{userRoutes.map(route => {
				return (
					<Link
						href={route.path}
						className={`${(pathname === route.path && "bg-black1 text-white") || "text-white/60"} cursor-pointer
						hover:bg-black1/70 duration-200 flex items-center gap-2 py-4 rounded-r-full px-4 font-semibold text-sm`}>
						<route.icon
							className={`h-[1.125rem] w-[1.125rem] ${(pathname === route.path && "text-white") || "text-white/60"}`}
							weight="fill"
						/>
						{route.name}
					</Link>
				);
			})}
		</div>
	);
}
