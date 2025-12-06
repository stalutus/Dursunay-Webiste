<script>
    import { fade } from "svelte/transition";
    import nefesImg from "../assets/nefes.jpeg";
</script>

<div
    in:fade={{ duration: 600 }}
    class="pt-24 pb-16 min-h-screen bg-accent font-sans text-text"
>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header Section -->
        <h1 class="font-serif text-4xl md:text-5xl text-center text-text mb-8">
            Nefes Koçluğu Nedir?
        </h1>

        <div
            class="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-sm border border-white/60"
        >
            <p class="text-lg text-text/80 leading-relaxed mb-6">
                Nefes koçluğu, kişinin en doğal ve güçlü aracı olan nefesini
                farkındalıkla kullanarak, fiziksel, zihinsel ve duygusal
                dönüşümünü destekleyen rehberli bir süreçtir. Bu, sadece nefes
                almayı öğrenmek değil, nefes kalıplarımızın ardındaki bilinçaltı
                kayıtları ve duygusal blokajları keşfetme yolculuğudur.
            </p>
            <p class="text-lg text-text/80 leading-relaxed">
                Koçluk süreci; stresi azaltmaktan travmaları serbest bırakmaya,
                yaşam enerjisini artırmaktan zihinsel berraklığa ulaşmaya kadar
                geniş bir yelpazede danışanın potansiyelini ortaya çıkarır.
                Nefes, daima <strong class="text-primary-dark">'An'</strong>da
                kalmamızı sağlayan en sadık dostumuzdur.
            </p>
        </div>

        <!-- CCB Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div class="order-2 md:order-1">
                <h2 class="font-serif text-3xl text-primary-dark mb-4">
                    🧘‍♀️ Bilinçli Bağlantılı Nefes (CCB)
                </h2>
                <p class="text-text/80 mb-6 leading-relaxed">
                    Nefes koçluğu çalışmalarımızda temel aldığımız teknik,
                    "Bilinçli Bağlantılı Nefes" (Conscious Connected Breathing -
                    CCB) yöntemidir.
                </p>

                <h3 class="font-serif text-xl text-text mb-3">
                    CCB Nasıl Çalışır?
                </h3>
                <p class="text-text/80 mb-6 leading-relaxed">
                    Bu teknik, nefes alış ve verişlerin arasında duraklama
                    (pause) olmaksızın, kesintisiz ve akışkan bir döngü halinde
                    aktığı yumuşak ama güçlü bir yöntemdir.
                </p>
                <p class="text-text/80 leading-relaxed">
                    Nefesin bu dairesel akışı, bedenin enerji döngüsünü harekete
                    geçirir ve bilinci derin bir seviyeye taşır.
                </p>
            </div>
            <div class="order-1 md:order-2">
                <img
                    src={nefesImg}
                    alt="Diaphragmatic Breathing Illustration"
                    class="rounded-3xl shadow-lg w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                />
            </div>
        </div>

        <!-- Effects Description -->
        <div class="mb-20 space-y-8">
            <div
                class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary"
            >
                <h3 class="font-serif text-xl text-text mb-3">Fiziksel Etki</h3>
                <p class="text-text/70">
                    Nefes döngüsü derinleştiğinde, diyafram kası tam kapasite
                    çalışır. Bu, bedene optimum düzeyde oksijen iletilmesini ve
                    birikmiş karbondioksitin daha verimli atılmasını sağlar.
                </p>
            </div>

            <div
                class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-secondary"
            >
                <h3 class="font-serif text-xl text-text mb-3">
                    Sinir Sistemi Etkisi
                </h3>
                <p class="text-text/70 mb-3">
                    CCB, sinir sistemimizin parasempatik dalını (dinlen, onar ve
                    sindir modu) aktive eder. Bu aktivasyon, beynimizdeki stres
                    hormonu kortizol seviyesini düşürür ve vücudun kendini
                    iyileştirme mekanizmasını devreye sokar.
                </p>
                <p class="text-text/70">
                    Bu sayede, "savaş ya da kaç" tepkisinden, içsel huzur ve
                    güvenlik hissine geçiş yaparız.
                </p>
            </div>

            <div
                class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary-dark"
            >
                <h3 class="font-serif text-xl text-text mb-3">Duygusal Etki</h3>
                <p class="text-text/70 mb-3">
                    Yıllar içinde yaşadığımız travmalar, korkular ve bastırılmış
                    duygular, nefes kalıbımızı kısıtlar. CCB, bu kısıtlanmış
                    nefes kalıbını nazikçe genişleterek, bilinçaltında tutulan
                    duygusal blokajların yüzeye çıkmasına ve sevgiyle serbest
                    bırakılmasına olanak tanır.
                </p>
            </div>

            <div
                class="bg-secondary/10 p-6 rounded-xl border border-secondary/30 text-center"
            >
                <p class="text-text/90 italic font-medium">
                    ⚠️ Önemli Vurgu: Bu çalışma kesinlikle hiperventilasyon
                    (hızlı ve sığ nefes alma) değildir. Aksine, bedeni ve zihni
                    sakinleştiren, huzurlu ve kontrollü bir süreçtir.
                </p>
            </div>
        </div>

        <!-- Benefits Table/Grid -->
        <h2 class="font-serif text-3xl md:text-4xl text-center text-text mb-12">
            🌟 Faydaları Nelerdir?
        </h2>
        <p class="text-center text-text/60 max-w-2xl mx-auto mb-16">
            Bilinçli Bağlantılı Nefes çalışmasının kanıtlanmış ve deneyimlenmiş
            faydaları, hayat kalitenizi kökten dönüştürme potansiyeli taşır.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Benefit 1 -->
            <div
                class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-50"
            >
                <div class="text-4xl mb-4">🧠</div>
                <h3 class="font-serif text-xl text-primary-dark mb-1">
                    Zihinsel Dönüşüm
                </h3>
                <h4
                    class="font-medium text-text mb-3 text-sm uppercase tracking-wide opacity-70"
                >
                    Zihinsel Berraklık ve Odaklanma
                </h4>
                <p class="text-text/70 text-sm leading-relaxed">
                    Beyne giden oksijenin artmasıyla sisli düşünceler dağılır,
                    daha net kararlar alma ve mevcut ana odaklanma yeteneği
                    güçlenir.
                </p>
            </div>

            <!-- Benefit 2 -->
            <div
                class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-50"
            >
                <div class="text-4xl mb-4">💖</div>
                <h3 class="font-serif text-xl text-primary-dark mb-1">
                    Duygusal Özgürleşme
                </h3>
                <h4
                    class="font-medium text-text mb-3 text-sm uppercase tracking-wide opacity-70"
                >
                    Blokaj Çözümü ve Travma Serbest Bırakma
                </h4>
                <p class="text-text/70 text-sm leading-relaxed">
                    Bastırılmış duyguların ve bedende kilitlenmiş travmatik
                    enerjinin güvenli ve nazikçe çözülerek, duygusal hafifleme
                    ve derin bir huzur hissi sağlanır.
                </p>
            </div>

            <!-- Benefit 3 -->
            <div
                class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-50"
            >
                <div class="text-4xl mb-4">🧘‍♀️</div>
                <h3 class="font-serif text-xl text-primary-dark mb-1">
                    Huzur ve Denge
                </h3>
                <h4
                    class="font-medium text-text mb-3 text-sm uppercase tracking-wide opacity-70"
                >
                    Derin Stres Yönetimi
                </h4>
                <p class="text-text/70 text-sm leading-relaxed">
                    Vücudun parasempatik sinir sistemini aktive ederek kaygı
                    seviyesini düşürür, kronik stresi yönetmeyi öğretir ve
                    kalıcı içsel sakinlik sağlar.
                </p>
            </div>

            <!-- Benefit 4 -->
            <div
                class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-50"
            >
                <div class="text-4xl mb-4">⚡</div>
                <h3 class="font-serif text-xl text-primary-dark mb-1">
                    Enerji ve Canlılık
                </h3>
                <h4
                    class="font-medium text-text mb-3 text-sm uppercase tracking-wide opacity-70"
                >
                    Hücresel Enerji Artışı
                </h4>
                <p class="text-text/70 text-sm leading-relaxed">
                    Hücresel düzeyde oksijenlenme ve enerji akışının
                    iyileşmesiyle kronik yorgunluk azalır, güne daha zinde ve
                    motive başlarsınız.
                </p>
            </div>

            <!-- Benefit 5 -->
            <div
                class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-50"
            >
                <div class="text-4xl mb-4">🫀</div>
                <h3 class="font-serif text-xl text-primary-dark mb-1">
                    Fiziksel Sağlık
                </h3>
                <h4
                    class="font-medium text-text mb-3 text-sm uppercase tracking-wide opacity-70"
                >
                    Bağışıklık Sistemi Desteği
                </h4>
                <p class="text-text/70 text-sm leading-relaxed">
                    Stresin azalması (kortizol düşüşü), vücudun doğal detoks
                    yeteneğini artırır ve böylece bağışıklık sisteminiz
                    güçlenir.
                </p>
            </div>
        </div>
    </div>
</div>
