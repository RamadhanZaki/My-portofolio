<template>
  <header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800 dark:text-white">Ramadhan Zaki</div>
      <ul class="flex space-x-6 items-center">
        <li>
          <a
            href="#profil"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#pendidikan"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#skill"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="ml-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
            title="Toggle Dark Mode"
          >
            <svg
              v-if="!isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 19.66l-.7.7M21 12h-1M4 12H3m16.66 6.66l-.7-.7M4.34 4.34l-.7-.7M12 5a7 7 0 110 14a7 7 0 010-14z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M17.293 14.707a8 8 0 11-11-11 9 9 0 0011 11z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
/* Optional: Customize transition for dark mode */
</style>
