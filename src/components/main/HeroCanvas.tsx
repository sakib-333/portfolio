import { motion } from "framer-motion";

const HeroCanvas = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Ambient glow - top right */}
            <motion.div
                animate={{
                    x: [0, 60, -20, 0],
                    y: [0, 40, 80, 0],
                    scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-32 right-[5%] w-125 h-125 rounded-full bg-primary/10 blur-[130px]"
            />

            {/* Ambient glow - bottom left */}
            <motion.div
                animate={{
                    x: [0, -30, 50, 0],
                    y: [0, -50, 20, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-40 -left-20 w-112.5 h-112.5 rounded-full bg-secondary/5 blur-[120px]"
            />

            <svg
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#86d8a4" />
                        <stop offset="100%" stopColor="#006239" />
                    </linearGradient>

                    <linearGradient id="softGreen" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#4ae183" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#86d8a4" stopOpacity="0.05" />
                    </linearGradient>

                    <radialGradient id="circleGlow">
                        <stop offset="0%" stopColor="#86d8a4" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#86d8a4" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <motion.path
                    d="M-100 560 C250 340 430 750 760 510 C1050 300 1200 560 1540 320"
                    fill="none"
                    stroke="#86d8a4"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    strokeDasharray="8 18"
                    animate={{
                        strokeDashoffset: [0, -200],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.path
                    d="M-100 650 C240 410 500 830 800 590 C1080 370 1280 700 1540 450"
                    fill="none"
                    stroke="#4ae183"
                    strokeWidth="1"
                    strokeOpacity="0.06"
                    strokeDasharray="4 22"
                    animate={{
                        strokeDashoffset: [0, 220],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />


                <motion.path
                    d="M1050 80 C1170 20 1320 100 1340 230 C1360 360 1250 420 1130 390 C1010 360 950 260 980 170 C995 125 1015 100 1050 80Z"
                    fill="url(#softGreen)"
                    opacity="0.1"
                    animate={{
                        d: [
                            "M1050 80 C1170 20 1320 100 1340 230 C1360 360 1250 420 1130 390 C1010 360 950 260 980 170 C995 125 1015 100 1050 80Z",
                            "M1070 40 C1210 60 1360 110 1320 260 C1280 410 1150 440 1030 360 C920 285 970 145 1070 40Z",
                            "M1050 80 C1170 20 1320 100 1340 230 C1360 360 1250 420 1130 390 C1010 360 950 260 980 170 C995 125 1015 100 1050 80Z",
                        ],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.g
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -30, 40, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <circle
                        cx="1120"
                        cy="280"
                        r="62"
                        fill="none"
                        stroke="#86d8a4"
                        strokeWidth="1.2"
                        strokeOpacity="0.25"
                        strokeDasharray="5 12"
                    />

                    <circle
                        cx="1120"
                        cy="280"
                        r="45"
                        fill="none"
                        stroke="#4ae183"
                        strokeWidth="1"
                        strokeOpacity="0.1"
                    />

                    <circle cx="1180" cy="280" r="5" fill="#86d8a4" />
                </motion.g>

                <motion.rect
                    x="1250"
                    y="610"
                    width="72"
                    height="72"
                    rx="15"
                    fill="none"
                    stroke="#86d8a4"
                    strokeOpacity="0.18"
                    strokeWidth="1.3"
                    animate={{
                        y: [610, 550, 630, 610],
                        x: [1250, 1280, 1210, 1250],
                        rotate: [0, 90, 180, 360],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformOrigin: "1286px 646px",
                    }}
                />

                <motion.rect
                    x="880"
                    y="130"
                    width="30"
                    height="30"
                    rx="5"
                    fill="#86d8a4"
                    fillOpacity="0.12"
                    stroke="#86d8a4"
                    strokeOpacity="0.35"
                    animate={{
                        y: [130, 170, 110, 130],
                        rotate: [45, 135, 225, 405],
                    }}
                    transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformOrigin: "895px 145px",
                    }}
                />

                <motion.g
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        transformOrigin: "1320px 190px",
                    }}
                >
                    <ellipse
                        cx="1320"
                        cy="190"
                        rx="100"
                        ry="45"
                        fill="none"
                        stroke="#86d8a4"
                        strokeOpacity="0.1"
                    />

                    <circle cx="1420" cy="190" r="5" fill="#4ae183" />
                </motion.g>

                <motion.g
                    animate={{
                        y: [0, -35, 20, 0],
                        x: [0, 20, -15, 0],
                        rotate: [0, 90, 180, 360],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformOrigin: "100px 250px",
                    }}
                >
                    <line
                        x1="70"
                        y1="250"
                        x2="130"
                        y2="250"
                        stroke="#86d8a4"
                        strokeOpacity="0.18"
                    />

                    <line
                        x1="100"
                        y1="220"
                        x2="100"
                        y2="280"
                        stroke="#86d8a4"
                        strokeOpacity="0.18"
                    />
                </motion.g>

                <motion.circle
                    cx="140"
                    cy="650"
                    r="9"
                    fill="#86d8a4"
                    fillOpacity="0.25"
                    animate={{
                        cx: [140, 180, 120, 140],
                        cy: [650, 580, 610, 650],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.circle
                    cx="700"
                    cy="100"
                    r="5"
                    fill="#4ae183"
                    fillOpacity="0.35"
                    animate={{
                        cx: [700, 750, 680, 700],
                        cy: [100, 140, 80, 100],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.circle
                    cx="950"
                    cy="740"
                    r="6"
                    fill="#86d8a4"
                    fillOpacity="0.2"
                    animate={{
                        cx: [950, 1000, 920, 950],
                        cy: [740, 680, 710, 740],
                    }}
                    transition={{
                        duration: 17,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.path
                    d="M420 160 L455 220 L385 220 Z"
                    fill="none"
                    stroke="#86d8a4"
                    strokeOpacity="0.15"
                    strokeWidth="1.2"
                    animate={{
                        y: [0, 45, -20, 0],
                        x: [0, -30, 20, 0],
                        rotate: [0, -90, -180, -360],
                    }}
                    transition={{
                        duration: 21,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformOrigin: "420px 195px",
                    }}
                />

                <motion.path
                    d="M230 440 L260 422 L290 440 L290 476 L260 494 L230 476 Z"
                    fill="#86d8a4"
                    fillOpacity="0.025"
                    stroke="#86d8a4"
                    strokeOpacity="0.12"
                    animate={{
                        y: [0, -35, 25, 0],
                        x: [0, 25, -15, 0],
                        rotate: [0, 120, 240, 360],
                    }}
                    transition={{
                        duration: 23,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformOrigin: "260px 458px",
                    }}
                />

                <motion.g
                    animate={{
                        y: [0, 25, -15, 0],
                        opacity: [0.3, 0.7, 0.4, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {Array.from({ length: 5 }).map((_, row) =>
                        Array.from({ length: 6 }).map((_, col) => (
                            <circle
                                key={`${row}-${col}`}
                                cx={1140 + col * 22}
                                cy={500 + row * 22}
                                r="2"
                                fill="#86d8a4"
                                opacity={0.22}
                            />
                        ))
                    )}
                </motion.g>

                <motion.circle
                    cx="1000"
                    cy="520"
                    r="100"
                    fill="url(#circleGlow)"
                    animate={{
                        cx: [1000, 1080, 950, 1000],
                        cy: [520, 470, 590, 520],
                        r: [100, 130, 90, 100],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </svg>

            {/* Fine noise/grid texture */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(134,216,164,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(134,216,164,.35) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                    maskImage:
                        "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
            />

            {/* Edge fade */}
            <div className="absolute inset-0 bg-linear-to-b from-background/10 via-transparent to-background" />
        </div>
    );
};

export default HeroCanvas;