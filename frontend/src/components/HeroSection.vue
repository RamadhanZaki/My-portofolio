<template>
  <section
    id="profil"
    class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
  >
    <!-- Kiri -->
    <div class="md:w-1/2 mb-10 md:mb-0" v-animate-on-scroll>
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Halo, Saya <span class="text-blue-600">Ramadhan Zaki</span></h1>
      <p class="text-xl text-gray-600 mb-8">Mahasiswa Teknik Informatika Universitas Amikom Yogyakarta yang bersemangat dalam pengembangan web dan desain antarmuka.</p>
      <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Kanan -->
    <div class="md:w-1/2 flex justify-center" v-animate-on-scroll>
      <img
        :src="jukii"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg"
      />
    </div>
  </section>
</template>

<script setup>
import jukii from '@/assets/jukii.webp'
</script>
