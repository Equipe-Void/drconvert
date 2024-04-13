import React from "react";

interface PopupProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function Popup({ open, setOpen }: PopupProps) {
	return (
		<>
			{open ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-4 mx-auto max-w-3xl">
							<div className="bg-black1 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-bold text-pink">Erro</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setOpen(false)}>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-white text-lg leading-relaxed">
										E-mail e senha são necessários para o login
									</p>
								</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-white bg-pink rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setOpen(false)}>
										FECHAR
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
