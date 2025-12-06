<div
    class="lotus-container w-full h-full flex justify-center items-center relative opacity-90"
>
    <!-- SVG Lotus: Symmetrical and Scalable -->
    <svg
        viewBox="0 0 200 200"
        class="w-full h-full animate-[spin_60s_linear_infinite]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient
                id="petalGradient"
                x1="100"
                y1="100"
                x2="100"
                y2="0"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#F2D7D5" stop-opacity="0.8" />
                <stop offset="1" stop-color="#FAF9F6" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient
                id="centerGradient"
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#F2D7D5" />
                <stop offset="1" stop-color="#D1F2EB" />
            </linearGradient>
        </defs>

        <!-- Breathing Group -->
        <g class="origin-center animate-[breathe_8s_ease-in-out_infinite]">
            <!-- Center Core -->
            <circle
                cx="100"
                cy="100"
                r="15"
                fill="url(#centerGradient)"
                class="blur-sm animate-pulse"
            />

            <!-- Petals Layer 1 (6 Petals) -->
            <g class="opacity-90">
                {#each [0, 60, 120, 180, 240, 300] as angle}
                    <ellipse
                        cx="100"
                        cy="100"
                        rx="15"
                        ry="40"
                        fill="url(#petalGradient)"
                        transform="rotate({angle}, 100, 100) translate(0, -25)"
                    />
                {/each}
            </g>

            <!-- Petals Layer 2 (6 Petals, Rotated) -->
            <g class="opacity-70 scale-110 origin-center">
                {#each [30, 90, 150, 210, 270, 330] as angle}
                    <ellipse
                        cx="100"
                        cy="100"
                        rx="12"
                        ry="35"
                        fill="url(#petalGradient)"
                        transform="rotate({angle}, 100, 100) translate(0, -20)"
                    />
                {/each}
            </g>
        </g>
    </svg>

    <!-- Outer Glow -->
    <div
        class="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none z-[-1]"
    ></div>
</div>
