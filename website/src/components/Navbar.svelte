<script>
    import Link from "./Link.svelte";
    import { fade } from "svelte/transition";
    import logo from "../assets/logo.png";

    let isOpen = false;
</script>

<nav
    class="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-gray-100"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
            <div class="flex">
                <div class="flex-shrink-0 flex items-center gap-3">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Dursunay Demir Logo"
                            class="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
                        />
                    </Link>
                    <Link
                        to="/"
                        className="font-serif text-2xl text-primary-dark font-medium tracking-wide hidden md:block"
                    >
                        Dursunay Demir
                    </Link>
                </div>
            </div>

            <!-- Desktop Menu -->
            <div
                class="hidden sm:flex sm:items-center sm:space-x-8 font-sans text-text/80"
            >
                <Link
                    to="/"
                    className="hover:text-primary transition-colors duration-300"
                    >Ana Sayfa</Link
                >
                <Link
                    to="/hakkimda"
                    className="hover:text-primary transition-colors duration-300"
                    >Hakkımda</Link
                >
                <Link
                    to="/nefes-nedir"
                    className="hover:text-primary transition-colors duration-300"
                    >Nefes Koçluğu</Link
                >
                <Link
                    to="/hizmetler"
                    className="hover:text-primary transition-colors duration-300"
                    >Hizmetler</Link
                >
                <Link
                    to="/iletisim"
                    className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                    İletişim
                </Link>
            </div>

            <!-- Mobile menu button -->
            <div class="flex items-center sm:hidden">
                <button
                    on:click={() => (isOpen = !isOpen)}
                    type="button"
                    class="text-gray-500 hover:text-gray-600 focus:outline-none"
                >
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {#if isOpen}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        {:else}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        {/if}
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if isOpen}
        <div class="sm:hidden bg-white/95 backdrop-blur-md" transition:fade>
            <div class="pt-2 pb-4 space-y-1 px-4 flex flex-col text-center">
                <Link
                    to="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => (isOpen = false)}>Ana Sayfa</Link
                >
                <Link
                    to="/hakkimda"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => (isOpen = false)}>Hakkımda</Link
                >
                <Link
                    to="/nefes-nedir"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => (isOpen = false)}>Nefes Koçluğu</Link
                >
                <Link
                    to="/hizmetler"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => (isOpen = false)}>Hizmetler</Link
                >
                <Link
                    to="/iletisim"
                    className="block px-3 py-2 text-base font-medium text-primary border border-primary rounded-full mt-2"
                    onClick={() => (isOpen = false)}>İletişim</Link
                >
            </div>
        </div>
    {/if}
</nav>
