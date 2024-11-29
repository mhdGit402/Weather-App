<script setup>
import { FwbNavbar, FwbNavbarLogo, FwbButton } from 'flowbite-vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <fwb-navbar solid>
    <template #logo>
      <RouterLink :to="{ name: 'city' }">
        <fwb-navbar-logo image-url="../public/weather.jpg" class="white:text-black">
          Weather App
        </fwb-navbar-logo>
      </RouterLink>
    </template>
    <template #right-side>
      <fwb-button>
        Add city
        <template #suffix>
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </template>
      </fwb-button>
      <ThemeToggle class="ml-8" />
    </template>
  </fwb-navbar>
</template>
