<script setup>
import CitiesCom from './CitiesCom.vue'
import CitiesSkeleton from './CitiesSkeleton.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <CitiesCom />
    </template>
    <template #fallback>
      <CitiesSkeleton />
    </template>
  </Suspense>
</template>
