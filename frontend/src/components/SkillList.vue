<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/skills')
    skills.value = res.data
  } catch (err) {
    console.error('Gagal mengambil data skills:', err)
  }
})
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
        >
          <!-- Icon Skill -->
          <img
            :src="skill.icon"
            :alt="skill.name + ' icon'"
            class="w-12 h-12 mx-auto mb-4"
          />

          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {{ skill.name }}
          </h3>

          <!-- Progress Bar -->
          <div class="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
            <div
              class="h-3 rounded-full bg-blue-600 dark:bg-blue-400 transition-all duration-500"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {{ skill.level }}%
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
