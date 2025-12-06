<script>
    import { fade } from "svelte/transition";
</script>

<div in:fade={{ duration: 600 }} class="pt-24 pb-16 bg-accent min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="font-serif text-4xl md:text-5xl text-text mb-6">
                Dursunay Demir
            </h1>
            <p
                class="text-primary-dark font-medium text-lg uppercase tracking-widest"
            >
                Bütünleyici Nefes ve Dönüşüm Koçluğu
            </p>
        </div>

        <!-- Content Block -->
        <div
            class="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden"
        >
            <!-- Decorative bg element -->
            <div
                class="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
            ></div>

            <div class="prose prose-lg text-text/80 font-sans max-w-none">
                <p class="lead text-xl mb-8 font-serif italic text-text/90">
                    "Nefes, sadece hayatta kalmak için değil, gerçekten yaşamak
                    için bir anahtardır."
                </p>

                <h3 class="text-2xl font-serif text-text mb-4 mt-8">
                    Hemşirelikten Gelen Güven
                </h3>
                <p class="mb-6">
                    Yıllarca sağlık sektöründe hemşire olarak edindiğim deneyim,
                    bana insan bedeninin ve zihninin ne kadar muazzam bir
                    dengeye ihtiyaç duyduğunu öğretti. Tıbbi geçmişim, koçluk
                    yaklaşımıma güçlü bir zemin ve bilimsel bir bakış açısı
                    kazandırırken; nefes çalışmalarıyla bu temeli ruhsal ve
                    duygusal bir derinlikle birleştiriyorum.
                </p>

                <h3 class="text-2xl font-serif text-text mb-4 mt-8">
                    Misyonum
                </h3>
                <p class="mb-6">
                    Koçluk felsefem; <strong>denge, huzur ve özgürleşme</strong>
                    üzerine kuruludur. Amacım, danışanlarımın kendi içsel güçlerini
                    fark etmelerine, kısıtlayıcı inançlarından arınmalarına ve nefesleri
                    aracılığıyla özlerine dönmelerine rehberlik etmektir.
                </p>

                <p>
                    Her nefes, yeni bir başlangıçtır. Gelin, bu yolculuğa
                    birlikte çıkalım.
                </p>
            </div>
        </div>
    </div>
</div>
