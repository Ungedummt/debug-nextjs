"use client";

import { useResizeDetector } from "react-resize-detector";

export default function HomePage() {
  const { width, height, ref } = useResizeDetector();

  return (
    <main
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: "green",
        }}
      ></div>
      <div
        style={{
          width: "256px",
          height: "256px",
          background: "red",
        }}
        ref={ref}
      ></div>
    </main>
  );
}
