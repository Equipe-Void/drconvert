"use client";

import { usePathname } from "next/navigation";

import PrivateRoute from "../_components/private-routes";
import { checkIsPublicRoute } from "../_functions/check-is-public-route";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	const isPublicPage = checkIsPublicRoute(pathname);

	return (
		<>
			{isPublicPage && children}

			{!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
		</>
	);
}
