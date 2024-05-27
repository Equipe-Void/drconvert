"use client";

import PageControl from "../_components/page-control";
import B from "../_components/b";
import { useStageStore } from "@/app/_store/stage-store";
import Lz from "../_components/lz";
import S from "../_components/s";

export default function Project() {
	const stage = useStageStore(state => state.stage);

	return (
		<div className="p-8">
			<PageControl />
			{stage === "LZ" ? <Lz /> : stage === "B" ? <B /> : <S />}
		</div>
	);
}
