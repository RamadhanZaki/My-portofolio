<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-8 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Judul -->
      <SectionTitle title="Hubungi Saya" />

      <!-- Deskripsi -->
      <p class="text-lg text-gray-300 mb-6">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <!-- Tombol Email -->
      <a
        href="mailto:amimi1040@gmail.com?subject=Halo%20Ramadhan&body=Halo%20Ramadhan%20Zaki%2C%20saya%20ingin%20menghubungi%20Anda%20melalui%20portofolio%20web%20ini."
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block mb-8"
      >
        Kirim Email
      </a>

      <!-- Link Sosial -->
      <nav class="flex justify-center gap-6 mb-6" aria-label="Sosial Media">
        <a
          href="https://github.com/RamadhanZaki"
          target="_blank"
          rel="noopener"
          class="text-gray-400 hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.facebook.com/LA.aezakmi"
          target="_blank"
          rel="noopener"
          class="text-gray-400 hover:text-white transition"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/marzzukizaa/"
          target="_blank"
          rel="noopener"
          class="text-gray-400 hover:text-white transition"
        >
          Instagram
        </a>
      </nav>

      <!-- Copyright -->
      <small class="text-gray-500 text-sm block">
        &copy; {{ new Date().getFullYear() }} Ramadhan Zaki. Dibuat dengan ❤️ menggunakan Vue.js
      </small>
    </div>
  </footer>
</template>
