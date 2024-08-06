<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <LoadingIndicator />
  <NavBar />
  <RouterView />
</template>

<style scoped></style>
