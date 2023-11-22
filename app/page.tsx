"use client";

import { useResizeDetector } from "react-resize-detector";

export default function HomePage() {
	const { ref, width, height } = useResizeDetector();

	return (
		<main
			style={{
				display: "flex",
			}}
		>
			<div>
				<p ref={ref} style={{ width: "25rem" }}>
					Root RRD:{" "}
					{JSON.stringify(
						{
							height,
							width,
						},
						null,
						2
					)}
				</p>
			</div>
		</main>
	);
}
