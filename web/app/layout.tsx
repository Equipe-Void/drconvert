import "./globals.css";
import type { Metadata } from "next";
import localFont from "@next/font/local";

const interphases = localFont({
	src: "../public/fonts/TT-Interphases-Pro-Trial-Variable.ttf",
	variable: "--font-interphases",
});

export const metadata: Metadata = {
	title: "DrConvert",
	description: "Web app para conversão de dados",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${interphases.variable} font-sans bg-black0 select-none`}>
				{children}
			</body>
		</html>
	);
}
