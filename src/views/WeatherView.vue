<script setup>
import WeatherComp from '@/components/WeatherComp.vue'
import WeatherSkeleton from '@/components/WeatherSkeleton.vue'
</script>

<template>
  <Suspense>
    <WeatherComp />
    <template #fallback>
      <WeatherSkeleton />
    </template>
  </Suspense>
</template>
