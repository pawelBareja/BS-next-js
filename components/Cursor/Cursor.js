import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Cursor() {
  return (
    <div className="cursor">
      <AnimatedCursor
        innerSize={8}
        outerSize={18}
        color="255, 40, 110"
        outerAlpha={0.2}
        innerScale={2}
        outerScale={3}
      />
    </div>
  );
}
