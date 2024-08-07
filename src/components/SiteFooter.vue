<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full h-[60px] bg-olive">
    <div class="container flex justify-between items-center h-full">
      <div class="text-cream">De Berk © 2024. All rights reserved.</div>

      <div class="flex gap-5">
        <RouterLink
          :to="{ path: '/', hash: '#book' }"
          class="cursor-pointer text-spring-sage hover:text-cream"
          >Contact</RouterLink
        >
        <RouterLink
          :to="{ path: '/', hash: '#rooms-and-rates' }"
          class="cursor-pointer text-spring-sage hover:text-cream"
          >Rooms and Rates</RouterLink
        >
        <RouterLink
          :to="{ path: '/', hash: '#more-photos' }"
          class="cursor-pointer text-spring-sage hover:text-cream"
          >More from De Berk</RouterLink
        >
      </div>
    </div>
  </div>
</template>
