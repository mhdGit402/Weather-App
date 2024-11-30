<script setup>
const props = defineProps({
  savedCities: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div v-for="city in savedCities" :key="city">
    <RouterLink
      :to="{
        name: 'weather',
        query: { lat: city.lat, lon: city.lon, name: city.city, c_code: city.c_code },
      }"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 border-4 border-indigo-200 border-b-indigo-500"
      >
        <div class="text-left mb-4 md:mb-0">
          <!-- Left Content -->
          <h1 class="text-xl font-bold">{{ city.city }}</h1>
          <p class="text-gray-700">Wind: {{ city.wind }} - {{ city.desc }}</p>
        </div>
        <div class="text-right">
          <!-- Right Content -->
          <h1 class="text-xl font-bold">{{ city.temp }}</h1>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
