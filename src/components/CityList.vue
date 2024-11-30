<script setup>
import { FwbListGroupItem } from 'flowbite-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const handleWeather = (city, longitude, latitude) => {
  router.push({
    name: 'weather',
    // params: { city: city.name },
    query: {
      name: city.name,
      country: city.country,
      c_code: city.c_code,
      lon: longitude,
      lat: latitude,
    },
  })
}
</script>

<template>
  <ul
    class="overflow-hidden text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
  >
    <!-- <RouterLink :to="{ name: weather }"> -->
    <fwb-list-group-item
      hover
      v-for="city in props.city"
      :key="city.id"
      @click="
        handleWeather(
          { name: city.name, country: city.country, c_code: city.country_code },
          city.longitude,
          city.latitude,
        )
      "
    >
      {{ city.name }}, {{ city.country }}, {{ city.country_code }}
    </fwb-list-group-item>
    <!-- </RouterLink> -->
  </ul>
</template>
