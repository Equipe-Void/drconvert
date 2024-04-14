import { clsx } from "clsx";
import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

interface AlertDialogProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	title: string;
	message: string;
	confirm?: boolean;
	delete?: boolean;
	onClick?: () => void;
}

const AlertDialog = (props: AlertDialogProps) => {
	return (
		<AlertDialogPrimitive.Root
			open={props.isOpen}
			onOpenChange={props.setIsOpen}>
			<AlertDialogPrimitive.Portal forceMount>
				<Transition.Root show={props.isOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<AlertDialogPrimitive.Overlay
							forceMount
							className="fixed inset-0 z-20 bg-black0/50"
						/>
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						<AlertDialogPrimitive.Content
							forceMount
							className={clsx(
								"fixed z-50",
								"w-[95vw] max-w-md rounded-lg p-4 md:w-full",
								"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
								"bg-gray2",
								"focus:outline-none focus-visible:ring focus-visible:ring-opacity-75",
							)}>
							<AlertDialogPrimitive.Title className="text-lg font-bold text-white">
								{props.title}
							</AlertDialogPrimitive.Title>
							<AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-white/80">
								{props.message}
							</AlertDialogPrimitive.Description>
							<div className="mt-4 flex justify-end space-x-2">
								{(props.confirm && (
									<AlertDialogPrimitive.Cancel
										className={clsx(
											"inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
											"bg-gray2 text-white",
											"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
										)}>
										Cancelar
									</AlertDialogPrimitive.Cancel>
								)) ||
									null}
								<AlertDialogPrimitive.Action
									onClick={() => props.onClick}
									className={clsx(
										"inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
										"text-white",
										`${(props.delete && "bg-red") || "bg-green"}`,
										"border border-transparent",
										"focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
									)}>
									{(props.confirm && "Confirmar") || "Ok"}
								</AlertDialogPrimitive.Action>
							</div>
						</AlertDialogPrimitive.Content>
					</Transition.Child>
				</Transition.Root>
			</AlertDialogPrimitive.Portal>
		</AlertDialogPrimitive.Root>
	);
};

export { AlertDialog };
