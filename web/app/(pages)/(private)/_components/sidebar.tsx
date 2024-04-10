"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useUserStore } from "@/app/_store/user-store";
import { userRoutes } from "../../../_constants/app-routes";

export default function Sidebar() {
	const pathname = usePathname();

	const user = useUserStore(state => state.user);

	return (
		<div className="w-[12.25rem] h-full flex flex-col justify-between outline outline-1 outline-black1 pr-2 py-6">
			<div>
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
			<div className="flex gap-2 items-center px-4">
				<div className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-red text-sm bg-black1 cursor-pointer">
					{Array.from(user.name)[0]}
				</div>
				<div className="gap-1">
					<p className="font-semibold text-gray1 text-xs">{user.name}</p>
					<p className="font-medium text-gray2 text-[0.625rem]">{user.email}</p>
				</div>
			</div>
		</div>
	);
}
