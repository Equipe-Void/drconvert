"use client";

import React, { useState } from 'react';
import { CaretDown, CaretLeft } from "@phosphor-icons/react";

const UserManual: React.FC = () => {
	const [isVisibleSection1, setIsVisibleSection1] = useState(true);
	const [isVisibleSection2, setIsVisibleSection2] = useState(true);

	const toggleVisibilitySection1 = () => {
		setIsVisibleSection1(!isVisibleSection1);
	};

	const toggleVisibilitySection2 = () => {
		setIsVisibleSection2(!isVisibleSection2);
	};

	return (
		<div className="text-white flex flex-row w-full">
			<div className="p-8 border-r-2 border-black1 w-1/5">
				<div className='sticky top-4'>
					<div className="flex items-center cursor-pointer" onClick={toggleVisibilitySection1}>
						<h1 className="text-xl font-bold">Meus Projetos</h1>
						{isVisibleSection1 ? <CaretDown size={24} className="ml-2" /> : <CaretLeft size={24} className="ml-2" />}
					</div>
					{isVisibleSection1 && (
						<>
							<a href="#Introducao" className="mt-2">
								<h2 className="text-l font-semibold text-gray1 ml-4 hover:text-white ease-out duration-300">Introdução</h2>
							</a>
							<a href="#AddProjeto" className="mt-2">
								<h2 className="text-l font-semibold text-gray1 ml-4 hover:text-white ease-out duration-300">Adicionar Projeto</h2>
							</a>
						</>
					)}
					<div className="flex items-center cursor-pointer" onClick={toggleVisibilitySection2}>
						<h1 className="text-xl font-bold">Projeto</h1>
						{isVisibleSection2 ? <CaretDown size={24} className="ml-2" /> : <CaretLeft size={24} className="ml-2" />}
					</div>
					{isVisibleSection2 && (
						<>
							<a href="#lz" className="mt-2">
								<h2 className="text-l font-semibold text-gray1 ml-4 hover:text-white ease-out duration-300">Landzone</h2>
							</a>
							<a href="#bronze" className="mt-2">
								<h2 className="text-l font-semibold text-gray1 ml-4 hover:text-white ease-out duration-300">Bronze</h2>
							</a>
							<a href="#classificacao" className="mt-2">
								<h2 className="text-l font-semibold text-gray1 ml-4 hover:text-white ease-out duration-300">Classificação</h2>
							</a>
						</>
					)}
				</div>
			</div>
			<div className="p-8 w-4/5">
				<h1 className="text-4xl font-bold">Meus Projetos</h1>
				<div id="Introducao" className="mt-4 ml-4">
					<h2 className="text-xl font-semibold">Introdução</h2>
					<p className="mt-2 text-gray-300">Nesta página será a página inicial, onde você poderá visualizar os seus projetos, e criar novos projetos.</p>
					<img src="/images/meus_projetos.png" alt="Meus Projetos" className="mt-4 border-solid border-2 border-black1 rounded-md" />
				</div>
				<div id="AddProjeto" className="mt-4 ml-4">
					<h2 className="text-xl font-semibold">Adicionar Projeto</h2>
					<p className="mt-2 text-gray-300">Ao clicar no botão de mais (+) abrirá uma caixa de diálogo chamada "Upload" onde você poderá realizar o upload do arquivo .csv, definir um nome ao projeto, especificar o separador (por exemplo o . ou a ,) e por último se possui um cabeçalho após essas etapas é só clicar em "Criar Projeto" e seu projeto será criado e você sera direcionado para a landzone deste projeto.</p>
				</div>


				<h1 className="text-4xl font-bold mt-4">Projeto</h1>
				<div id="lz" className="mt-4 ml-4">
					<h2 className="text-xl font-semibold">Landzone</h2>
					<p className="mt-2 text-gray-300">Ao selecionar um projeto na pagina "Meus Projetos" seu projeto abrirá na landzone onde será possivel mudar o nome do campo, o tipo do campo e se ele aceita valor nulo. Após realizar essas etpas você precisará clicar no check (✔) no final de cada linha e clicar em salvar.</p>
					<img src="/images/Landzone.gif" alt="Landzone" className="mt-4 border-solid border-2 border-black1 rounded-md" />
				</div>
				<div id="bronze" className="mt-4 ml-4">
					<h2 className="text-xl font-semibold">Bronze</h2>
					<p className="mt-2 text-gray-300">Nesta etapa você poderá identificar se este campo é um identificador ou não. Após realizar essa etpa você também precisará clicar no check (✔) no final de cada linha e clicar em salvar.</p>
					<img src="/images/Bronze.gif" alt="Bronze" className="mt-4 border-solid border-2 border-black1 rounded-md" />
				</div>
				<div id="classificacao" className="mt-4 ml-4">
					<h2 className="text-xl font-semibold">Classificação</h2>
					<p className="mt-2 text-gray-300">Antes da etapa Silver é necessário ter ao menos uma classificação criada, para criar ao entrar na etapa silver aparecerá um botão de classificações clicando nele aparecerá todas as suas classficações criadas podendo alterar ou excluir, e adicionar mais uma ao clicar em "Adicionar Classificação", ao clicar de um nome a essa classificação e clique em criar, após isso você define o valor de entrada e de saída dela.</p>
					<img src="/images/classificacao.gif" alt="Classificacao" className="mt-4 border-solid border-2 border-black1 rounded-md" />
				</div>
			</div>
		</div>
	);
};

export default UserManual;
