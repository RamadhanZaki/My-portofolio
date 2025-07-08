<script setup>
import Navbar from '@/components/MainNavbar.vue';
import Hero from '@/components/HeroSection.vue';
import Education from '@/components/EducationSection.vue';
import Skills from '@/components/SkillList.vue';
import Projects from '@/components/ProjectsSection.vue';
import Contact from '@/components/ContactSection.vue';
</script>
<template>
<div>
<Navbar />
<main>
<Hero />
<div v-animate-on-scroll><Education /></div>
<div v-animate-on-scroll><Skills /></div>
<div v-animate-on-scroll><Projects /></div>
<div v-animate-on-scroll><Contact /></div>
</main>
</div>
</template>
