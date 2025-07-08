<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

// State kosong untuk data dari backend
const projects = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/projects')
    projects.value = res.data
  } catch (err) {
    console.error('Gagal memuat data proyek:', err)
  }
})
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div
        :class="[
          'grid gap-12',
          projects.length === 1 ? 'justify-center' : 'md:grid-cols-2'
        ]"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 rounded-lg shadow-lg overflow-hidden max-w-lg w-full"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            loading="lazy"
            class="w-full aspect-video object-contain bg-white"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >
                {{ t }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 font-semibold hover:underline"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
