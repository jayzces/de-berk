<script setup lang="ts">
import { ref } from 'vue'

const width = ref(100)
</script>

<template>
  <div class="h-[8px] bg-olive" :style="{ width: `${width}%` }"></div>
</template>
