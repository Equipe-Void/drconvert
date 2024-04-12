import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col h-screen overflow-x-hidden">
			<Header />
			<div className="flex-1 flex">
				<Sidebar />
				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}
