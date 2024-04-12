"use client";
import { FloppyDisk, ListMagnifyingGlass, Plus, Trash } from "@phosphor-icons/react";

export default function Project() {
	return (
		<div>
			<div className="flex p-8  space-x-2">
				<div className="flex w-full justify-between">
					<div className="flex w-3/6 space-x-2">
						<div className={`w-2/3 h-14 pr-8 rounded-md bg-black1 border border-solid border-transparent focus-within:border-pink`}>
							<input type="text" placeholder="Digite um campo..." className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white rounded-md" />
						</div>
						<button
							type="submit"
							className="w-1/3 cursor-pointer py-3 px-8 bg-black1 rounded-md items-center justify-center font-semibold text-white text-xs flex gap-2">
							<ListMagnifyingGlass className="h-5 w-5 text-white" />
							PESQUISAR
						</button>
					</div>
					<div className="flex w-2/6 space-x-2 float-right">
						<button
							type="submit"
							className=" w-2/5 cursor-pointer py-3 px-8 bg-black1 rounded-md items-center justify-center font-semibold text-white text-xs flex gap-2">
							<FloppyDisk className="h-5 w-5 text-white" />
							SALVAR
						</button>
						<button
							type="submit"
							className=" w-3/5 cursor-pointer py-3 px-8 bg-gray2 rounded-md items-center justify-center font-semibold text-white text-xs flex gap-2">
							<Plus className="h-5 w-5 text-white" />
							ADICIONAR CAMPO
						</button>
					</div>
				</div>
			</div >
			<div className="pl-8 pr-8 pb-8 w-full">
				<div className="relative overflow-x-auto shadow-md sm:rounded-md border border-solid border-black1">
					<table className="w-full text-sm text-left rtl:text-right text-white">
						<thead className="text-xs bg-transparent">
							<tr>
								<th className="px-6 py-3 font-normal">
									Nome do campo
								</th>
								<th className="px-6 py-3 font-normal">
									Tipo do campo
								</th>
								<th className="px-6 py-3 font-normal">
									Identificador
								</th>
								<th className="px-6 py-3 float-right text-gray1 font-normal">
									Total de campos (3)
								</th>
							</tr>
						</thead>
						<tbody className="pl-8 pr-8">
							<tr className="border-b dark:bg-black1 border-gray2">
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<input type="text" placeholder="Digite um campo..." className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white rounded-md" />
									</div>
								</td>
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
											<option className="bg-gray2 text-white" value="">Selecione uma opção</option>
											<option className="bg-gray2 text-white" value="opcao1">Opção 1</option>
											<option className="bg-gray2 text-white" value="opcao2">Opção 2</option>
											<option className="bg-gray2 text-white" value="opcao3">Opção 3</option>
										</select>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
											<option className="bg-gray2 text-white" value="">Selecione uma opção</option>
											<option className="bg-gray2 text-white" value="opcao1">Opção 1</option>
											<option className="bg-gray2 text-white" value="opcao2">Opção 2</option>
											<option className="bg-gray2 text-white" value="opcao3">Opção 3</option>
										</select>
									</div>
								</td>
								<td className="px-6 py-4 float-right">
									<Trash className="h-10 w-10 text-gray1 hover:text-black1 cursor-pointer hover:bg-pink/80 duration-200 hover:shadow-button p-2 rounded-full" />
								</td>
							</tr>
							<tr className="border-b dark:bg-black1 border-gray2 ">
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<input type="text" placeholder="Digite um campo..." className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white rounded-md" />
									</div>
								</td>
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
											<option className="bg-gray2 text-white" value="">Selecione uma opção</option>
											<option className="bg-gray2 text-white" value="opcao1">Opção 1</option>
											<option className="bg-gray2 text-white" value="opcao2">Opção 2</option>
											<option className="bg-gray2 text-white" value="opcao3">Opção 3</option>
										</select>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
											<option className="bg-gray2 text-white" value="">Selecione uma opção</option>
											<option className="bg-gray2 text-white" value="opcao1">Opção 1</option>
											<option className="bg-gray2 text-white" value="opcao2">Opção 2</option>
											<option className="bg-gray2 text-white" value="opcao3">Opção 3</option>
										</select>
									</div>
								</td>
								<td className="px-6 py-4 float-right">
									<Trash className="h-10 w-10 text-gray1 hover:text-black1 cursor-pointer hover:bg-pink/80 duration-200 hover:shadow-button p-2 rounded-full" />
								</td>
							</tr>
							<tr className=" dark:bg-black1 ">
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<input type="text" placeholder="Digite um campo..." className="w-full h-full bg-transparent placeholder-gray1 outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white rounded-md" />
									</div>
								</td>
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
											<option className="bg-gray2 text-white" value="">Selecione uma opção</option>
											<option className="bg-gray2 text-white" value="opcao1">Opção 1</option>
											<option className="bg-gray2 text-white" value="opcao2">Opção 2</option>
											<option className="bg-gray2 text-white" value="opcao3">Opção 3</option>
										</select>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className={`w-full h-8 pr-1 rounded-md bg-gray2 border border-solid border-transparent focus-within:border-pink`}>
										<select className="w-full h-full bg-transparent outline-none px-8 font-normal text-sm text-gray1 focus-within:text-white">
											<option className="bg-gray2 text-white" value="">Selecione uma opção</option>
											<option className="bg-gray2 text-white" value="opcao1">Opção 1</option>
											<option className="bg-gray2 text-white" value="opcao2">Opção 2</option>
											<option className="bg-gray2 text-white" value="opcao3">Opção 3</option>
										</select>
									</div>
								</td>
								<td className="px-6 py-4 float-right">
									<Trash className="h-10 w-10 text-gray1 hover:text-black1 cursor-pointer hover:bg-pink/80 duration-200 hover:shadow-button p-2 rounded-full" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div >
		</div>
	);
}
