<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="h-[56px] md:h-20 flex bg-cream transition-all duration-300 z-[5] sticky top-[8px] left-0 right-0 shadow"
  >
    <div class="container flex justify-between">
      <button type="button" class="roboto-serif text-olive text-xl md:text-2xl">De Berk</button>

      <RouterLink
        :to="{ path: '/', hash: '#book' }"
        class="text-russet flex items-center max-md:text-sm"
        >Book Now</RouterLink
      >
    </div>
  </nav>
</template>
