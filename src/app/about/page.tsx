"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function PixelatedCanvasDemo() {
  return (
    <div className="mx-auto mt-8 flex w-full items-center justify-center">
      <PixelatedCanvas
        src="/about.webp"
        width={800}
        height={600}
        cellSize={4}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}
