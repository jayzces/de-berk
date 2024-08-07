<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <LoadingIndicator />
  <NavBar />
  <RouterView />
  <SiteFooter />
</template>

<style scoped></style>
