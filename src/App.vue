<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="max-w-xl mx-auto h-dvh p-4 text-center bg-white sm:p-8 dark:bg-gray-800">
    <NavigationBar />
    <RouterView />
  </div>
</template>
