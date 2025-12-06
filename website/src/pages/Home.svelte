<script>
    import Lotus from "../components/Lotus.svelte";
    import Link from "../components/Link.svelte";
    import { fade, fly } from "svelte/transition";
</script>

<div in:fade={{ duration: 800 }}>
    <!-- Hero Section -->
    <section
        class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-accent via-primary/5 to-white relative overflow-hidden pt-20"
    >
        <!-- Background Lotus (Creative Centerpiece) -->
        <div
            class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-[0.15]"
        >
            <div
                class="w-[500px] h-[500px] md:w-[700px] md:h-[700px] animate-pulse-slow"
            >
                <Lotus />
            </div>
        </div>

        <!-- Content Content -->
        <div
            class="z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
        >
            <!-- Dum Spiro Spero (New Creative Element) -->
            <div class="mb-8" in:fade={{ duration: 1500, delay: 200 }}>
                <h2
                    class="font-serif italic text-6xl md:text-8xl text-primary-dark/80 tracking-wide drop-shadow-sm"
                >
                    Dum Spiro Spero
                </h2>
                <p
                    class="font-sans text-sm md:text-base text-text/60 uppercase tracking-[0.3em] mt-4"
                >
                    Nefes Aldığım Sürece Umut Ediyorum
                </p>
            </div>

            <!-- Divider -->
            <div
                class="w-24 h-[1px] bg-gradient-to-r from-transparent via-text/20 to-transparent mb-10"
                in:fade={{ delay: 500 }}
            ></div>

            <h1
                class="font-serif text-3xl sm:text-4xl md:text-5xl text-text mb-6 tracking-tight leading-tight drop-shadow-sm"
                in:fly={{ y: 30, duration: 1200, delay: 400 }}
            >
                Nefesinle Özüne Dön.<br />
                <span
                    class="text-primary-dark font-normal italic text-xl sm:text-2xl md:text-3xl mt-3 block"
                    >Bütünleyici Dönüşüm Koçluğu.</span
                >
            </h1>

            <p
                class="font-sans text-lg md:text-xl text-text/70 mb-12 max-w-2xl font-light leading-relaxed"
                in:fly={{ y: 30, duration: 1200, delay: 600 }}
            >
                Yaşam enerjisi ve dengenin kaynağına, kendi nefesine yolculuk
                yap. İçindeki potansiyeli açığa çıkar ve huzuru keşfet.
            </p>

            <div
                class="flex flex-col sm:flex-row gap-5"
                in:fly={{ y: 30, duration: 1200, delay: 800 }}
            >
                <Link
                    to="/hizmetler"
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                    Yolculuğa Başla
                </Link>
                <Link
                    to="/nefes-nedir"
                    className="bg-white/80 backdrop-blur-sm hover:bg-white text-text border border-gray-200 font-medium py-3 px-10 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                    Nefes Koçluğu Nedir?
                </Link>
            </div>
        </div>

        <div class="absolute bottom-10 animate-bounce text-text/30">
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path></svg
            >
        </div>
    </section>

    <!-- Content Section: Nefesin Mucizesi -->
    <section class="py-24 bg-white relative">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div class="text-center mb-16">
                <h2 class="font-serif text-3xl md:text-5xl text-text mb-6">
                    Nefesin Mucizesi
                </h2>
                <p class="text-lg text-text/80 font-light leading-relaxed">
                    Doğru Nefes Almanın Yaşamınıza Katkıları
                </p>
            </div>

            <div class="prose prose-lg text-text/70 font-sans mx-auto mb-16">
                <p class="mb-6">
                    Günlük telaş içinde, en temel eylemimiz olan nefes
                    alışverişini otomatik pilota alırız. Oysa nefes, sadece
                    hayatta kalma aracımız değil, yaşam kalitemizin ve içsel
                    huzurumuzun anahtarıdır.
                </p>
                <p>
                    Dursunay Demir ile keşfedeceğiniz bilinçli nefes teknikleri,
                    bedeninize ve zihninize derin bir dönüşüm sunar.
                </p>
            </div>

            <h3
                class="font-serif text-2xl md:text-3xl text-primary-dark mb-10 text-center"
            >
                💖 Farkındalıkla Nefes Almanın 5 Temel Faydası
            </h3>

            <div class="grid gap-12">
                <div class="flex gap-6 items-start">
                    <div
                        class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xl font-serif text-primary-dark"
                    >
                        1
                    </div>
                    <div>
                        <h4 class="text-xl font-medium text-text mb-2">
                            Duygusal Özgürleşme ve Denge
                        </h4>
                        <p class="text-text/70 leading-relaxed">
                            Yıllardır içimize attığımız, bastırdığımız korku,
                            kaygı ve öfke gibi duygular, nefes kalıplarımızı
                            kısıtlar. Bilinçli ve bağlantılı nefes, bu duygusal
                            blokajların yumuşakça çözülmesini sağlar. Geçmişin
                            yükünden arınarak, duygusal olarak daha dengeli ve
                            özgür bir An yaratırsınız.
                        </p>
                    </div>
                </div>

                <div class="flex gap-6 items-start">
                    <div
                        class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-xl font-serif text-secondary-dark"
                    >
                        2
                    </div>
                    <div>
                        <h4 class="text-xl font-medium text-text mb-2">
                            Stres ve Kaygıyı Anında Yönetme
                        </h4>
                        <p class="text-text/70 leading-relaxed">
                            Yanlış nefes (sığ ve hızlı göğüs nefesi), vücudunuzu
                            sürekli bir "savaş ya da kaç" modunda tutar.
                            Diyaframdan alınan derin nefes ise merkezi sinir
                            sisteminizi sakinleştirir ve anında rahatlama
                            sağlar. Kaygı seviyeniz azalır, zihniniz durulur.
                        </p>
                    </div>
                </div>

                <div class="flex gap-6 items-start">
                    <div
                        class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xl font-serif text-primary-dark"
                    >
                        3
                    </div>
                    <div>
                        <h4 class="text-xl font-medium text-text mb-2">
                            Enerji ve Canlılık Artışı
                        </h4>
                        <p class="text-text/70 leading-relaxed">
                            Doğru nefes, her hücremize daha fazla oksijen taşır
                            ve vücuttaki enerji akışını optimize eder. Kendinizi
                            gün boyunca daha canlı, zinde ve uyanık
                            hissedersiniz. Kronik yorgunluk hissi azalır, yaşam
                            enerjiniz (Prana/Qi) yükselir.
                        </p>
                    </div>
                </div>

                <div class="flex gap-6 items-start">
                    <div
                        class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-xl font-serif text-secondary-dark"
                    >
                        4
                    </div>
                    <div>
                        <h4 class="text-xl font-medium text-text mb-2">
                            Bağışıklık Sistemini Güçlendirme
                        </h4>
                        <p class="text-text/70 leading-relaxed">
                            Stresin azalması ve vücudun detoks sürecinin
                            hızlanması, bağışıklık sisteminizin güçlenmesine
                            doğrudan katkıda bulunur. Sakinleşen bir beden,
                            hastalıklara karşı daha dirençli hale gelir.
                        </p>
                    </div>
                </div>

                <div class="flex gap-6 items-start">
                    <div
                        class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xl font-serif text-primary-dark"
                    >
                        5
                    </div>
                    <div>
                        <h4 class="text-xl font-medium text-text mb-2">
                            Derin Bağlantı ve İçsel Huzur
                        </h4>
                        <p class="text-text/70 leading-relaxed">
                            Nefes, her zaman An ile kurduğunuz köprüdür.
                            Nefesinize odaklandığınızda, zihnin karmaşasından
                            uzaklaşır ve kendi özünüze dönersiniz. Bu derin
                            bağlantı, hayata karşı daha berrak, huzurlu ve
                            merkezlenmiş bir bakış açısı kazanmanızı sağlar.
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16 p-8 bg-accent/30 rounded-3xl">
                <p class="text-xl text-text font-serif italic mb-6">
                    "Siz de hayatınızın ritmini yeniden keşfetmek ve nefesinizle
                    dönüşmek ister misiniz?"
                </p>
                <Link
                    to="/iletisim"
                    className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full shadow-md transition-all"
                >
                    Benimle İletişime Geçin
                </Link>
            </div>
        </div>
    </section>

    <!-- Introduction / Services Preview -->
    <section class="py-24 bg-accent/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="font-serif text-3xl md:text-4xl text-text mb-4">
                    Huzurlu Bir Dönüşüm
                </h2>
                <div
                    class="w-16 h-1 bg-primary mx-auto rounded-full mb-4"
                ></div>
                <p class="text-text/70 max-w-2xl mx-auto">
                    Size özel hazırlanmış bütünleyici hizmetlerimizle tanışın.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50 flex flex-col items-center text-center"
                >
                    <div
                        class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-2xl"
                    >
                        🌿
                    </div>
                    <h3 class="font-serif text-2xl mb-3 text-text">
                        Birebir Seanslar
                    </h3>
                    <p class="text-text/70 mb-6 flex-grow">
                        Kişisel ihtiyaçlarınıza odaklanan, derinlemesine
                        dönüştürücü nefes çalışmaları.
                    </p>
                    <Link
                        to="/hizmetler"
                        className="text-primary-dark font-medium hover:text-primary transition-colors"
                        >Detaylı İncele →</Link
                    >
                </div>

                <!-- Card 2 -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50 flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
                    ></div>
                    <div
                        class="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-2xl"
                    >
                        ✨
                    </div>
                    <h3 class="font-serif text-2xl mb-3 text-text">
                        Grup Atölyeleri
                    </h3>
                    <p class="text-text/70 mb-6 flex-grow">
                        Birlikte nefes almanın ve kolektif enerjinin gücünü
                        keşfedeceğimiz atölyeler.
                    </p>
                    <Link
                        to="/hizmetler"
                        className="text-primary-dark font-medium hover:text-primary transition-colors"
                        >Detaylı İncele →</Link
                    >
                </div>

                <!-- Card 3 -->
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50 flex flex-col items-center text-center"
                >
                    <div
                        class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-2xl"
                    >
                        🌐
                    </div>
                    <h3 class="font-serif text-2xl mb-3 text-text">
                        Online Seanslar
                    </h3>
                    <p class="text-text/70 mb-6 flex-grow">
                        Evinizin konforunda, Zoom üzerinden gerçekleştirdiğimiz
                        etkili çalışmalar.
                    </p>
                    <Link
                        to="/hizmetler"
                        className="text-primary-dark font-medium hover:text-primary transition-colors"
                        >Detaylı İncele →</Link
                    >
                </div>
            </div>
        </div>
    </section>
</div>
