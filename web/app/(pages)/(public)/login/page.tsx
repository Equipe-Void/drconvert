"use client";

import Image from "next/image";
import Cookie from "js-cookie";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Check } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

import Input from "./_components/input";
import logo from "@/public/images/logo.svg";
import { login } from "@/app/_services/users/login";
import { AlertDialog } from "@/app/_components/alert";
import { useUserStore } from "@/app/_store/user-store";

interface LoginProps {
	email: string;
	password: string;
}

export default function Login() {
	const router = useRouter();

	const ref = useRef<HTMLDivElement>(null);

	const { handleSubmit, register } = useForm<LoginProps>();
	const setUser = useUserStore(state => state.addUser);

	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	const typesArr = ["CSV", "SQL", "YAML"];

	async function handleSubmitForm(data: LoginProps) {
		setLoading(true);

		if (!data.email || !data.password) {
			setIsOpen(true);
		}

		try {
			const response = await login(data);

			setUser(response.user);

			if (rememberMe) {
				const hours = new Date(new Date().getTime() + 115 * 60 * 1000);
				Cookie.set("token", response.token, { expires: hours });
			}

			Cookie.set("token", response.token);
			router.push("/my-projects");
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setIsOpen(true);
		}
	}

	useEffect(() => {
		if (Cookie.get("token")) {
			router.push("/my-projects");
		}
	}, []);

	return (
		<div className="w-full h-screen overflow-hidden">
			<AlertDialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title="Erro ao tentar fazer login"
				message="Um e-mail e uma senha válida devem ser informados."
			/>
			<div className="px-4">
				<Image src={logo} alt="DrConvert logo" />
			</div>
			<div className="flex w-full h-full px-28">
				<div className="flex-1 translate-y-[15%]">
					<div className="flex flex-col gap-10 max-w-[25rem]">
						<h1 className="font-bold text-white text-[2.5rem] leading-[52px]">
							Gerencie
							<br />
							seus dados.{" "}
							<span className="text-pink text-[2rem]">DrConvert</span>
						</h1>
						<p className="font-light text-white/75">
							O DrConvert é uma{" "}
							<span className="font-bold text-white">solução simples</span> para
							converter e mapear seus arquivos{" "}
							<span className="font-bold text-white">CSV</span>, permitindo o
							gerenciamento e{" "}
							<span className="font-bold text-white">análise</span> dos dados de
							maneira mais eficaz.
						</p>
						<div className="flex items-center gap-4">
							<a className="font-bold text-white text-sm px-6 py-3 rounded-md bg-pink hover:bg-pink/65 duration-200">
								Entre agora
							</a>
							<a
								href="https://github.com/Equipe-Void/api-3sem"
								target="_blank"
								className="font-bold text-white/75 text-sm hover:text-white duration-200">
								Projeto
							</a>
						</div>
					</div>
					<div className="flex-1 relative">
						<div className="h-[777px] w-[614px] rounded-full bg-pink filter blur-[220px] z-0 relative translate-x-[-300px]"></div>
						<div className="absolute top-32 left-0 w-full pr-28">
							<div className="flex gap-2 w-full justify-end">
								{typesArr.map((type, i) => {
									return (
										<div
											key={i}
											className="bg-black0/20 font-extrabold text-white/45 w-[5.625rem] h-9 rounded-md flex
                        items-center justify-center hover:bg-red hover:text-white duration-150">
											{type}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1 px-28 translate-y-[10%]">
					<div className="flex flex-col gap-16">
						<div className="flex flex-col items-center gap-2">
							<h1 className="font-bold text-[2rem] text-white">Login</h1>
							<p className="font-normal text-sm text-gray1">
								Entre no sistema preenchendo as credenciais abaixo
							</p>
						</div>
						<form
							onSubmit={handleSubmit(handleSubmitForm)}
							className="flex flex-col gap-16">
							<div className="w-full flex flex-col gap-8">
								<Input
									type="text"
									placeholder="Endereço de e-mail"
									register={{ ...register("email") }}
								/>
								<Input
									type="password"
									placeholder="Senha"
									register={{ ...register("password") }}
								/>
								<div className="w-full flex items-center gap-4">
									<Checkbox.Root
										onCheckedChange={checked => {
											checked ? setRememberMe(true) : setRememberMe(false);
										}}
										className="w-6 h-6 p-1 rounded-md bg-black1">
										<Checkbox.Indicator>
											<Check className="w-4 h-4 text-pink" />
										</Checkbox.Indicator>
									</Checkbox.Root>
									<p className="text-xs lg:text-sm text-gray1 font-regular">
										Lembrar de mim?
									</p>
								</div>
							</div>
							<div className="w-full">
								<button
									type="submit"
									className="w-full h-16 rounded-md bg-red text-white font-bold text-base flex items-center justify-center
                  cursor-pointer duration-200 hover:bg-red/70">
									{(loading && (
										<ReactLoading
											type="spin"
											color="white"
											height={16}
											width={16}
										/>
									)) ||
										"Entrar"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
