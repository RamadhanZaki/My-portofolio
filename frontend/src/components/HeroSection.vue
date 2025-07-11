<template>
  <section
    id="profil"
    class="min-h-screen container mx-auto px-6 py-20 flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 transition-colors duration-500"
  >
    <!-- Kiri -->
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1
        class="text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-slide-in-left"
        style="animation-delay: 200ms;"
      >
        Halo, Saya <span class="text-blue-600 dark:text-blue-400">Ramadhan Zaki</span>
      </h1>
      <p
        class="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-in-left"
        style="animation-delay: 400ms;"
      >
        Mahasiswa Teknik Informatika Universitas Amikom Yogyakarta yang bersemangat dalam pengembangan web dan desain
        antarmuka.
      </p>

      <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms;"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Kanan -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        :src="jukii"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg ring-2 ring-blue-500/20 dark:ring-blue-400/30"
      />
    </div>
  </section>
</template>

<script setup>
import jukii from '@/assets/jukii.webp'
</script>
