<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const slides = ref([
  { bg: '#906B3A', active: true },
  { bg: '#CF946F', active: false },
  { bg: '#E9D7C7', active: false },
  { bg: '#D6E0CB', active: false },
  { bg: '#939B7B', active: false }
])

const activeSlide = ref(0)
const interval = setInterval(() => {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}, 3000)

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <main>
    <!-- slider -->
    <div class="slides w-full relative">
      <div class="slides__contents max-h-[calc(80vh_-_80px_-_8px)] h-[670px] relative">
        <div
          v-for="(s, sI) in slides"
          :key="`slide-${sI}`"
          class="h-full absolute top-0 left-0 w-full h-full slide after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-[inherit] after:h-[inherit] after:bg-black/30"
          :class="sI === activeSlide ? 'opacity-100' : 'opacity-0'"
          :style="{ backgroundColor: s.bg }"
        ></div>
      </div>
      <div
        class="slide__controls flex justify-center gap-5 absolute bottom-6 mx-auto left-0 right-0"
      >
        <button
          v-for="(s, sI) in slides"
          :key="`slide-control-${sI}`"
          :class="sI === activeSlide ? 'bg-cream w-8' : 'bg-olive w-4'"
          class="text-[0] h-4 rounded-full transition-all duration-300"
          @click="activeSlide = sI"
        >
          {{ sI }}
        </button>
      </div>
    </div>
  </main>
</template>
