<div
    class="lotus-container flex justify-center items-center relative w-64 h-64"
>
    <!-- Glowing Center -->
    <div
        class="absolute w-20 h-20 bg-gradient-to-tr from-primary-dark to-primary opacity-60 rounded-full blur-md animate-breathe z-20 shadow-[0_0_30px_rgba(242,215,213,0.6)]"
    ></div>

    <!-- Core Petals (Tighter) -->
    <div
        class="petal-layer absolute w-full h-full animate-[spin_30s_linear_infinite]"
    >
        {#each Array(6) as _, i}
            <div
                class="petal absolute top-6 left-1/2 -translate-x-1/2 w-10 h-20 bg-gradient-to-b from-primary/80 to-accent/20 rounded-[100%_100%_20%_20%] origin-bottom transform shadow-sm"
                style="transform: rotate({i * 60}deg) translateY(-10px);"
            ></div>
        {/each}
    </div>

    <!-- Outer Petals (Larger, Breathing) -->
    <div
        class="petal-layer absolute w-full h-full scale-110 opacity-70 animate-[breathe_8s_ease-in-out_infinite]"
    >
        {#each Array(8) as _, i}
            <div
                class="petal absolute top-2 left-1/2 -translate-x-1/2 w-12 h-24 bg-gradient-to-b from-secondary/60 to-white/10 rounded-[100%_100%_0%_0%] origin-bottom transform backdrop-blur-sm border border-white/20"
                style="transform: rotate({i * 45}deg) translateY(-5px);"
            ></div>
        {/each}
    </div>
</div>

<style>
    .petal {
        /* Subtle transparency/blend for watercolor effect */
        mix-blend-mode: normal;
    }
</style>
