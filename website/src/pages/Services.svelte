<script>
    import { fade } from "svelte/transition";
    import Link from "../components/Link.svelte";
</script>

<div in:fade={{ duration: 600 }} class="pt-24 pb-16 bg-accent min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-serif text-4xl text-center text-text mb-4">
            Hizmetlerimiz
        </h1>
        <p class="text-center text-text/60 max-w-2xl mx-auto mb-16">
            Size en uygun dönüşüm yolculuğunu seçin.
        </p>

        <div class="space-y-12">
            <!-- Service 1 -->
            <div
                class="flex flex-col md:flex-row gap-8 items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-colors duration-500 border border-white/50 shadow-sm"
            >
                <div
                    class="flex-shrink-0 w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-4xl"
                >
                    🌿
                </div>
                <div class="flex-grow">
                    <h3 class="font-serif text-2xl text-text mb-2">
                        Birebir Nefes Koçluğu Seansları
                    </h3>
                    <p class="text-text/70 leading-relaxed mb-4">
                        Kişiye özel analiz ve ihtiyaçlara göre şekillenen 90
                        dakikalık derinlemesine seanslar. Bu seanslarda, nefes
                        analiziniz yapılır ve size özel nefes teknikleri ile
                        dönüşüm süreci başlatılır.
                    </p>
                    <ul
                        class="list-disc list-inside text-sm text-text/60 mb-4 space-y-1"
                    >
                        <li>Kişiye özel nefes analizi</li>
                        <li>Duygusal detoks</li>
                        <li>Derin gevşeme teknikleri</li>
                    </ul>
                </div>
                <div class="flex-shrink-0">
                    <Link
                        to="/iletisim"
                        className="inline-block bg-white text-primary-dark border border-gray-200 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        Randevu Al
                    </Link>
                </div>
            </div>

            <!-- Service 2 -->
            <div
                class="flex flex-col md:flex-row gap-8 items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-colors duration-500 border border-white/50 shadow-sm"
            >
                <div
                    class="flex-shrink-0 w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center text-4xl"
                >
                    👥
                </div>
                <div class="flex-grow">
                    <h3 class="font-serif text-2xl text-text mb-2">
                        Grup Atölyeleri
                    </h3>
                    <p class="text-text/70 leading-relaxed mb-4">
                        Küçük gruplar halinde yapılan, sinerjinin ve
                        paylaşımların gücüyle gerçekleşen çalışmalar. Belirli
                        temalar (Stres, Bolluk Bilinci, Öz Sevgi vb.) üzerinden
                        ilerlenir.
                    </p>
                    <ul
                        class="list-disc list-inside text-sm text-text/60 mb-4 space-y-1"
                    >
                        <li>Tematik çalışmalar</li>
                        <li>Grup enerjisi paylaşımı</li>
                        <li>Ekonomik katılım</li>
                    </ul>
                </div>
                <div class="flex-shrink-0">
                    <Link
                        to="/iletisim"
                        className="inline-block bg-white text-primary-dark border border-gray-200 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        Bilgi Al
                    </Link>
                </div>
            </div>

            <!-- Service 3 -->
            <div
                class="flex flex-col md:flex-row gap-8 items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-colors duration-500 border border-white/50 shadow-sm"
            >
                <div
                    class="flex-shrink-0 w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-4xl"
                >
                    💻
                </div>
                <div class="flex-grow">
                    <h3 class="font-serif text-2xl text-text mb-2">
                        Online (Zoom) Seanslar
                    </h3>
                    <p class="text-text/70 leading-relaxed mb-4">
                        Mekan sınırlarını kaldıran, evinizin konforunda
                        katılabileceğiniz etkili seanslar. Birebir veya grup
                        formatında düzenlenebilir.
                    </p>
                    <ul
                        class="list-disc list-inside text-sm text-text/60 mb-4 space-y-1"
                    >
                        <li>Konforlu ortam</li>
                        <li>Zaman tasarrufu</li>
                        <li>Dünyanın her yerinden erişim</li>
                    </ul>
                </div>
                <div class="flex-shrink-0">
                    <Link
                        to="/iletisim"
                        className="inline-block bg-white text-primary-dark border border-gray-200 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        Randevu Al
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
