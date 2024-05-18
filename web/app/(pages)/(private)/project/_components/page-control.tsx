import { useStageStore } from "@/app/_store/stage-store";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Files } from "@phosphor-icons/react";

export default function PageControl() {
	const stage = useStageStore();
	const router = useRouter();
	return (
		<div className="flex gap-x-3 ">
			<div
				onClick={() => stage.addStage("LZ")}
				className={clsx(
					"flex items-center rounded-md h-12 w-36 justify-center text-white text-base font-extrabold",
					`${stage.stage === "LZ" ? "bg-pink hover:shadow-button" : "bg-gray2"}`,
					"cursor-pointer duration-150",
				)}>
				Landzone
			</div>
			<div
				onClick={() => stage.addStage("B")}
				className={clsx(
					"flex items-center rounded-md h-12 w-32 justify-center text-white text-base font-extrabold",
					`${stage.stage === "B" ? "bg-pink hover:shadow-button" : "bg-gray2"}`,
					"cursor-pointer duration-150",
				)}>
				Bronze
			</div>
			<div
				onClick={() => stage.addStage("S")}
				className={clsx(
					"flex items-center rounded-md h-12 w-32 justify-center text-white text-base font-extrabold",
					`${stage.stage === "S" ? "bg-pink hover:shadow-button" : "bg-gray2"}`,
					"cursor-pointer duration-150",
				)}>
				Silver
			</div>
			<div
				onClick={() => router.push("/classifications")}
				className={clsx(
					"float-right h-12 rounded-md bg-black1/60 font-extrabold text-xs text-white flex gap-2 items-center justify-center px-10 hover:bg-black1 duration-200",
					`${stage.stage === "S" ? "flex" : "hidden"}`,
					"cursor-pointer duration-150",
				)}>
				<Files className="text-white h-[1.12rem] w-[1.12rem]" />
				Classificações
			</div>
		</div>
	);
}
