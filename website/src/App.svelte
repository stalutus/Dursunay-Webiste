<script>
  import { path } from "./lib/router.js";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import BreathInfo from "./pages/BreathInfo.svelte";
  import Services from "./pages/Services.svelte";
  import Contact from "./pages/Contact.svelte";
</script>

<div class="flex flex-col min-h-screen font-sans bg-accent/20">
  <Navbar />

  <main class="flex-grow">
    {#if $path === "/"}
      <Home />
    {:else if $path === "/hakkimda"}
      <About />
    {:else if $path === "/nefes-nedir"}
      <BreathInfo />
    {:else if $path === "/hizmetler"}
      <Services />
    {:else if $path === "/iletisim"}
      <Contact />
    {:else}
      <div class="p-20 text-center text-text/60">Sayfa bulunamadı.</div>
    {/if}
  </main>

  <Footer />
</div>
