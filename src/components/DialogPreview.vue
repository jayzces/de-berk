<script setup lang="ts">
defineProps({ image: String })
defineEmits(['close'])
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-black/30 text-cream flex z-10"
    @click="$emit('close')"
  >
    <button
      type="button"
      class="w-12 h-12 flex absolute top-6 right-8 hover:text-spring-sage rounded-full"
    >
      <span class="material-symbols-outlined text-[36px] m-auto"> close </span>
    </button>

    <!-- sample only -->
    <div class="w-3/4 h-3/4 shadow-lg m-auto rounded-lg" :style="{ background: image }"></div>
  </div>
</template>
