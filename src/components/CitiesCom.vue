<script setup>
import { ref } from 'vue'
import axios from 'axios'
const savedCities = ref([])
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let allCities = localStorage.getItem('savedCities')
allCities = allCities ? JSON.parse(allCities) : []

/* APPROACH #1 */
// const fetchWeatherForCities = async () => {
//   for (const cityID of allCities) {
//     try {
//       const api = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=808ec4f673cba5dcf76ec323691c8022`,
//       )
//       const response = api.data
//       const weather = {
//         lat: response.coord.lat,
//         lon: response.coord.lon,
//         city: response.name,
//         c_code: response.sys.country,
//         wind: response.wind.speed,
//         desc: response.weather[0].description,
//         temp: (response.main.temp - 273.15).toFixed(2),
//       }
//       savedCities.value.push(weather)
//     } catch (error) {
//       console.log('Error while getting request from API:', error)
//     }
//   }
// }

/* APPROACH #2 (Efficient)*/
// If you want to fetch all the weather data concurrently (i.e., all requests at once),
// you can use Promise.all. This approach is more efficient when you have many cities to fetch data for
const fetchWeatherForCities = async () => {
  const promises = allCities.map(async (cityID) => {
    try {
      const api = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=808ec4f673cba5dcf76ec323691c8022`,
      )
      const response = api.data
      return {
        lat: response.coord.lat,
        lon: response.coord.lon,
        city: response.name,
        c_code: response.sys.country,
        wind: response.wind.speed,
        desc: response.weather[0].description,
        temp: (response.main.temp - 273.15).toFixed(2),
      }
    } catch (error) {
      console.log('Error while getting request from API:', error)
      return null // Return null or handle the error as needed
    }
  })

  const results = await Promise.all(promises) // Wait for all promises to resolve
  savedCities.value = results.filter((weather) => weather !== null) // Filter out any null results
}

const data = async () => {
  await fetchWeatherForCities() // Call the function to fetch weather data
  await delay(1500) // Wait for 2 seconds (2000 milliseconds)
}

await data()
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
