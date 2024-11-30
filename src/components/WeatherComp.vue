<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
const route = useRoute()
const router = useRouter()
const weather = ref({})
const lat = route.query.lat
const lon = route.query.lon
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchWeather = async () => {
  try {
    const api = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=808ec4f673cba5dcf76ec323691c8022`,
    )
    const response = api.data
    return response
  } catch (error) {
    console.log('Errror while getting request from api:', error)
  }
}

const updateWeather = async () => {
  let data = await fetchWeather()
  weather.value = {
    id: data.id,
    city: route.query.name,
    // country: route.query.country,
    c_code: route.query.c_code,
    lat: lat,
    lon: lon,
    temp: (data.main.temp - 273.15).toFixed(2),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    air: {
      main: data.weather[0].main,
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
    },
  }
  router.replace({
    name: 'weather',
    query: {
      id: weather.value.id,
    },
  })
  await delay(500)
}
await updateWeather()
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
