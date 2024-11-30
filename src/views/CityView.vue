<script setup>
import { ref } from 'vue'
import { FwbInput } from 'flowbite-vue'
import axios from 'axios'
import CityList from '@/components/CityList.vue'
import SavedCities from '@/components/SavedCities.vue'

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
  <div class="mt-6">
    <SavedCities />
  </div>
</template>
