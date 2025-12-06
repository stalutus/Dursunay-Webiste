<script>
    import { fade } from "svelte/transition";
</script>

<div in:fade={{ duration: 600 }} class="pt-24 pb-16 min-h-screen bg-accent">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-serif text-4xl text-center text-text mb-4">
            İletişime Geçin
        </h1>
        <p class="text-center text-text/60 mb-12">
            Sorularınız veya randevu talepleriniz için bana ulaşın.
        </p>

        <div
            class="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100"
        >
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-text/80 mb-2"
                            >Adınız Soyadınız</label
                        >
                        <input
                            type="text"
                            id="name"
                            class="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder="Adınız"
                        />
                    </div>
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-text/80 mb-2"
                            >E-posta Adresiniz</label
                        >
                        <input
                            type="email"
                            id="email"
                            class="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder="ornek@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="subject"
                        class="block text-sm font-medium text-text/80 mb-2"
                        >Konu</label
                    >
                    <select
                        id="subject"
                        class="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text/70"
                    >
                        <option>Birebir Seans Talebi</option>
                        <option>Atölye Bilgi İsteği</option>
                        <option>Online Seans</option>
                        <option>Diğer</option>
                    </select>
                </div>

                <div>
                    <label
                        for="message"
                        class="block text-sm font-medium text-text/80 mb-2"
                        >Mesajınız</label
                    >
                    <textarea
                        id="message"
                        rows="4"
                        class="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 border focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Size nasıl yardımcı olabilirim?"
                    ></textarea>
                </div>

                <div class="text-center pt-4">
                    <button
                        type="submit"
                        class="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Gönder
                    </button>
                </div>
            </form>

            <div class="mt-12 pt-8 border-t border-gray-100 text-center">
                <p class="text-sm text-text/60 mb-4">
                    Veya doğrudan e-posta gönderin:
                </p>
                <a
                    href="mailto:info@dursunaydemir.com"
                    class="text-primary-dark font-medium hover:text-primary transition-colors text-lg"
                    >info@dursunaydemir.com</a
                >
            </div>
        </div>
    </div>
</div>
