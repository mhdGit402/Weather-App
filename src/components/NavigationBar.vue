<script setup>
import { FwbNavbar, FwbNavbarLogo, FwbButton } from 'flowbite-vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
const route = useRoute()

const handleSaveCity = () => {
  if (route.query.id != '') {
    // Get the city ID from the route query
    const cityID = route.query.id

    // Retrieve the saved cities from local storage
    const savedCities = localStorage.getItem('savedCities')

    // Parse the saved cities string into an array, or initialize it as an empty array if it doesn't exist
    const allCities = savedCities ? JSON.parse(savedCities) : []

    // Add the new city ID to the array
    allCities.push(cityID)

    // Save the updated array back to local storage as a string
    localStorage.setItem('savedCities', JSON.stringify(allCities))
  }
}
</script>

<template>
  <fwb-navbar class="bg-transparent" solid>
    <template #logo>
      <RouterLink :to="{ name: 'city' }">
        <fwb-navbar-logo image-url="../public/weather.jpg" class="white:text-black">
          Weather App
        </fwb-navbar-logo>
      </RouterLink>
    </template>
    <template #right-side>
      <fwb-button @click="handleSaveCity">
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
