import { useStageStore } from "@/app/_store/stage-store";
import clsx from "clsx";

export default function PageControl() {
	const stage = useStageStore();

	return (
		<div className="flex gap-x-3 absolute right-8 bottom-8">
			<div
				onClick={() => stage.addStage("LZ")}
				className={clsx(
					"flex items-center rounded-md h-10 w-10 justify-center text-white text-xs font-extrabold",
					`${stage.stage === "LZ" ? "bg-pink hover:shadow-button" : "bg-gray2"}`,
					"cursor-pointer duration-150",
				)}>
				LZ
			</div>
			<div
				onClick={() => stage.addStage("B")}
				className={clsx(
					"flex items-center rounded-md h-10 w-10 justify-center text-white text-xs font-extrabold",
					`${stage.stage === "B" ? "bg-pink hover:shadow-button" : "bg-gray2"}`,
					"cursor-pointer duration-150",
				)}>
				B
			</div>
			<div
				onClick={() => stage.addStage("S")}
				className={clsx(
					"flex items-center rounded-md h-10 w-10 justify-center text-white text-xs font-extrabold",
					`${stage.stage === "S" ? "bg-pink hover:shadow-button" : "bg-gray2"}`,
					"cursor-pointer duration-150",
				)}>
				S
			</div>
		</div>
	);
}
