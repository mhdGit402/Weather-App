<script setup>
import { onMounted, ref } from 'vue'
import { FwbInput } from 'flowbite-vue'
import axios from 'axios'
import CityList from '@/components/CityList.vue'
import SavedCities from '@/components/SavedCities.vue'
const savedCities = ref([])

const search = ref('')
const result = ref({})
const handleSearch = () => {
  setTimeout(async () => {
    if (search.value.length > 2) {
      const api = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${search.value}&count=5&language=en&format=json`,
      )
      let response = await api.data
      result.value = response.results
    }
  }, 300)
}

onMounted(() => {
  let allCities = localStorage.getItem('savedCities')
  allCities = allCities ? JSON.parse(allCities) : []
  allCities.forEach(async (city) => {
    try {
      const api = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=808ec4f673cba5dcf76ec323691c8022`,
      )
      const response = await api.data
      const weather = {
        lat: response.coord.lat,
        lon: response.coord.lon,
        city: response.name,
        c_code: response.sys.country,
        wind: response.wind.speed,
        desc: response.weather[0].description,
        temp: (response.main.temp - 273.15).toFixed(2),
      }
      savedCities.value.push(weather)
    } catch (error) {
      console.log('Errror while getting request from api:', error)
    }
  })
})
</script>

<template>
  <fwb-input
    @input="handleSearch"
    class="mt-5"
    v-model="search"
    placeholder="enter city name ..."
    size="md"
  />
  <div class="mt-6">
    <CityList :city="result" />
  </div>
  <div class="mt-6" v-if="savedCities">
    <SavedCities :savedCities="savedCities" />
  </div>
</template>
