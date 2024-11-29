<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
const route = useRoute()
const data = ref({})

onMounted(async () => {
  const lat = route.query.lat
  const lon = route.query.lon
  const api = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=808ec4f673cba5dcf76ec323691c8022`,
  )
  let response = await api.data
  data.value = response
})
</script>

<template>
  <div>
    <h2>Weather</h2>
  </div>
</template>
