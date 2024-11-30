<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
const route = useRoute()
const router = useRouter()
const data = ref({})
const weather = ref({})
const lat = route.query.lat
const lon = route.query.lon

onMounted(async () => {
  try {
    const api = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=808ec4f673cba5dcf76ec323691c8022`,
    )
    const response = await api.data
    data.value = response
    // console.log(data)
  } catch (error) {
    console.log('Errror while getting request from api:', error)
  }
})

watch(
  data,
  () => {
    weather.value = {
      id: data.value.id,
      city: route.query.name,
      // country: route.query.country,
      c_code: route.query.c_code,
      lat: lat,
      lon: lon,
      temp: (data.value.main.temp - 273.15).toFixed(2),
      humidity: data.value.main.humidity,
      wind: data.value.wind.speed,
      air: {
        main: data.value.weather[0].main,
        desc: data.value.weather[0].description,
        icon: data.value.weather[0].icon,
      },
    }
    router.replace({
      name: 'weather',
      query: {
        id: weather.value.id,
      },
    })
  },
  { deep: true },
)
</script>

<template>
  <div class="dark:text-white text-lg mt-10" v-if="Object.keys(weather).length > 0">
    <p>{{ weather.city }}, {{ weather.c_code }}</p>
    <div class="flex items-center gap-4 justify-center mt-5">
      <img
        class="w-20 h-20 rounded-full"
        :src="`https://openweathermap.org/img/w/${weather.air.icon}.png`"
      />
      <div class="font-medium dark:text-white -ml-5">
        <div>{{ weather.temp }}<span>&#8451;</span></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">{{ weather.air.main }}</div>
      </div>
    </div>
    <div class="-mt-3">
      {{ weather.air.desc }}
    </div>
    <div class="mt-10">
      <p>Humidity: {{ weather.humidity }}</p>
      <p>Wind: {{ weather.wind }}</p>
    </div>
    <div class="mt-5">
      <p>Latitude: {{ weather.lat }}, Longitude: {{ weather.lon }}</p>
    </div>
  </div>
</template>
