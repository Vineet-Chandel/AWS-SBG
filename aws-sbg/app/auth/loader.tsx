"use client";

import { motion } from "framer-motion";

export default function Loader({ className = "" }: { className?: string }) {
  // Sequence of active highlight rotating clockwise: Top (0) -> Right (1) -> Bottom (2) -> Left (3)
  // Perfectly seamless one-by-one rotation with no delay or gap
  const duration = 0.5;

  const getAnimation = (order: number) => {
    // 4 phases for the 4 sides: 0: 0-25%, 1: 25-50%, 2: 50-75%, 3: 75-100%
    // Smooth fade in & fade out handover between consecutive boxes
    const keyframes: Record<number, { opacity: number[]; scale: number[] }> = {
      0: {
        opacity: [1, 0, 0, 0, 1],
        scale: [1.03, 0.97, 0.97, 0.97, 1.03],
      },
      1: {
        opacity: [0, 1, 0, 0, 0],
        scale: [0.97, 1.03, 0.97, 0.97, 0.97],
      },
      2: {
        opacity: [0, 0, 1, 0, 0],
        scale: [0.97, 0.97, 1.03, 0.97, 0.97],
      },
      3: {
        opacity: [0, 0, 0, 1, 0],
        scale: [0.97, 0.97, 0.97, 1.03, 0.97],
      },
    };

    return {
      opacity: keyframes[order].opacity,
      scale: keyframes[order].scale,
    };
  };

  const sharedTransition = {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    times: [0, 0.25, 0.5, 0.75, 1],
  };

  return (
    <div className={`relative flex items-center justify-center p-6 ${className}`}>
      {/* Main 4-box ring structure following the AWS Builder Center pattern */}
      <div className="relative h-[120px] w-[120px] flex flex-col items-center justify-between select-none">
        {/* Top Box (Index 0) */}
        <motion.div
          animate={getAnimation(0)}
          transition={sharedTransition}
          className="h-[20px] w-[80px] rounded-sm bg-gradient-to-r from-purple-700 via-fuchsia-500 to-indigo-500"
        />

        {/* Middle row containing Left (Index 3) and Right (Index 1) */}
        <div className="h-[80px] w-full flex justify-between items-center">
          {/* Left Box (Index 3) */}
          <motion.div
            animate={getAnimation(3)}
            transition={sharedTransition}
            className="w-[20px] h-full rounded-sm bg-gradient-to-b from-indigo-500 via-purple-600 to-fuchsia-500"
          />

          {/* Right Box (Index 1) */}
          <motion.div
            animate={getAnimation(1)}
            transition={sharedTransition}
            className="w-[20px] h-full rounded-sm bg-gradient-to-b from-purple-500 via-fuchsia-500 to-purple-700"
          />
        </div>

        {/* Bottom Box (Index 2) */}
        <motion.div
          animate={getAnimation(2)}
          transition={sharedTransition}
          className="h-[20px] w-[80px] rounded-sm bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600"
        />
      </div>
    </div>
  );
}