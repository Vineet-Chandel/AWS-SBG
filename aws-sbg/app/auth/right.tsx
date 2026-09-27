"use client";

import { motion } from "framer-motion";

interface itrigger {
    trigger: boolean;
}

/* ─────────────────────────────────────────────
   Pixel‑block utility – one CSS‑grid "pixel" row
   ───────────────────────────────────────────── */
function PixelRow({
    cells,
    color,
    cellSize = 28,
    delay = 0,
}: {
    cells: number[]; // 1 = filled, 0 = empty
    color: string;   // tailwind‑compatible bg class or inline style
    cellSize?: number;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay, ease: "easeOut" }}
            className="flex"
            style={{ gap: 0 }}
        >
            {cells.map((c, i) => (
                <div
                    key={i}
                    style={{
                        width: cellSize,
                        height: cellSize,
                        background: c ? undefined : "transparent",
                    }}
                    className={c ? color : ""}
                />
            ))}
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   SIGN‑IN BANNER  (Cyan / Turquoise theme)
   Inspired by the first reference image
   ───────────────────────────────────────────── */
function SignInBanner() {
    // Top pixel‑block pattern – staircase descending left side
    const topRows = [

        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],

    ];

    // Bottom pixel‑block pattern – staircase ascending from left
    const bottomRows = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],

        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],



    ];

    // Gradient bands for the top section – sky blue → cyan
    const topColors = [
        "bg-[#00a2ff]",
        "bg-[#00b0ff]",
        "bg-[#00bfff]",
        "bg-[#00ccee]",
        "bg-[#00d4dd]",
        "bg-[#00ddcc]",
        "bg-[#00e5c0]",
        "bg-[#00e5c0]",
    ];

    // Gradient bands for the bottom section – turquoise → teal
    const bottomColors = [








        "bg-[#00a2ff]",
        "bg-[#00b0ff]",
        "bg-[#00bfff]",
        "bg-[#00ccee]",
        "bg-[#00d4dd]",
        "bg-[#00ddcc]",

        "bg-[#00a2ff]",
        "bg-[#00b0ff]",
        "bg-[#00bfff]",
        "bg-[#00ccee]",
        "bg-[#00d4dd]",
        "bg-[#00ddcc]",
        "bg-[#00e5c0]",
        "bg-[#00e5c0]",
    ];

    // Small floating accent blocks
    const floatingBlocks = [
        { x: "82%", y: "38%", size: 22, color: "#00d4dd", delay: 0.6 },
        { x: "12%", y: "52%", size: 18, color: "#00bfff", delay: 0.9 },
        { x: "75%", y: "65%", size: 14, color: "#00e5c0", delay: 1.1 },
    ];

    return (
        <div className="relative w-full h-full overflow-hidden  bg-[#111118] flex flex-col justify-between select-none border border-white/[0.04]">
            {/* ── Subtle ambient glow ── */}
            <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-b from-[#00bfff]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#00d4dd]/8 to-transparent pointer-events-none" />

            {/* ── Top pixel blocks ── */}
            <div className="relative z-10 flex flex-col ">
                {topRows.map((row, ri) => (
                    <PixelRow
                        key={ri}
                        cells={row}
                        color={topColors[ri] || topColors[topColors.length - 1]}
                        delay={ri * 0.04}
                    />
                ))}
            </div>

            {/* ── Top navigation bar text ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-3 left-4 right-4 z-20 flex justify-between items-center"
            >
                <span className="text-[10px] font-mono text-black font-extrabold tracking-wider uppercase">
                    PSIT
                </span>
                <span className="text-[10px] font-mono text-black font-extrabold tracking-wider uppercase">
                    AWS SBG
                </span>
            </motion.div>

            {/* ── Center content ── */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-4xl md:text-5xl text-center font-bold font-mono text-white tracking-tight leading-[1.1]"
                >
                    Welcome to AWS <br />Student Builder Group PSIT
                </motion.h2>


            </div>

            {/* ── Bottom pixel blocks ── */}
            <div className="relative z-10 flex flex-col">
                {bottomRows.map((row, ri) => (
                    <PixelRow
                        key={ri}
                        cells={row}
                        color={bottomColors[ri] || bottomColors[bottomColors.length - 1]}
                        delay={0.3 + ri * 0.04}
                    />
                ))}
            </div>


        </div>
    );
}

/* ─────────────────────────────────────────────
   SIGN‑UP BANNER  (Orange → Pink → Purple theme)
   Inspired by the second reference image
   ───────────────────────────────────────────── */
function SignUpBanner() {
    // Top pixel‑block pattern – staircase descending left side
    const topRows = [

        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],


        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],



    ];

    // Bottom pixel‑block pattern – staircase ascending from left
    const bottomRows = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],









    ];

    // Top gradient: warm orange → coral → hot pink
    const topColors = [
        "bg-[#ff6a33]",
        "bg-[#ff5c45]",
        "bg-[#ff4e5a]",
        "bg-[#ff4070]",
        "bg-[#f53888]",
        "bg-[#e830a0]",
        "bg-[#d828b8]",
    ];

    // Bottom gradient: hot pink → fuchsia → vivid purple
    const bottomColors = [
        "bg-[#d828b8]",
        "bg-[#cc30c0]",
        "bg-[#c038c8]",
        "bg-[#b440d0]",
        "bg-[#a848d8]",
        "bg-[#9c50e0]",
        "bg-[#9058e8]",
        "bg-[#8460f0]",
    ];

    // Floating pixel accent blocks
    const floatingBlocks = [
        { x: "80%", y: "28%", size: 22, color: "#ff4070", delay: 0.5 },
        { x: "85%", y: "44%", size: 16, color: "#e830a0", delay: 0.7 },
        { x: "72%", y: "56%", size: 20, color: "#d828b8", delay: 0.85 },
        { x: "88%", y: "36%", size: 12, color: "#ff5c45", delay: 1.0 },
    ];

    return (
        <div className="relative w-full h-full overflow-hidden  bg-[#111118] flex flex-col justify-between select-none border border-white/[0.04]">
            {/* ── Subtle ambient glow ── */}
            <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#ff6a33]/8 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#9058e8]/8 to-transparent pointer-events-none" />

            {/* ── Top pixel blocks ── */}
            <div className="relative z-10 flex flex-col">
                {topRows.map((row, ri) => (
                    <PixelRow
                        key={ri}
                        cells={row}
                        color={topColors[ri] || topColors[topColors.length - 1]}
                        delay={ri * 0.04}
                    />
                ))}
            </div>

            {/* ── Top navigation bar text ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-3 left-4 right-4 z-20 flex justify-between items-center"
            >
                <span className="text-[10px] font-mono text-black font-extrabold tracking-wider uppercase">
                    PSIT
                </span>
                <span className="text-[10px] font-mono text-black font-extrabold tracking-wider uppercase">
                    AWS SBG
                </span>
            </motion.div>

            {/* ── Center content ── */}
            <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-3xl md:text-[2.65rem] font-bold font-mono text-white tracking-tight leading-[1.15]"
                >
                    Build smarter
                    <br />
                    with cloud
                    <br />
                    solutions
                </motion.h2>

                {/* Floating accent blocks */}
                {floatingBlocks.map((block, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.85, scale: 1 }}
                        transition={{ duration: 0.4, delay: block.delay }}
                        className="absolute"
                        style={{
                            left: block.x,
                            top: block.y,
                            width: block.size,
                            height: block.size,
                            background: block.color,
                        }}
                    />
                ))}
            </div>

            {/* ── Bottom pixel blocks ── */}
            <div className="relative z-10 flex flex-col">
                {bottomRows.map((row, ri) => (
                    <PixelRow
                        key={ri}
                        cells={row}
                        color={bottomColors[ri] || bottomColors[bottomColors.length - 1]}
                        delay={0.3 + ri * 0.04}
                    />
                ))}
            </div>


        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT – switches between banners
   ───────────────────────────────────────────── */
export default function Right({ trigger }: itrigger) {
    if (trigger) {
        return <SignInBanner />;
    } else {
        return <SignUpBanner />;
    }
}