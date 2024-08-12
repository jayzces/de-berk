<script setup lang="ts">
import DialogPreview from './DialogPreview.vue'
import { ref } from 'vue'

const photos = ref(new Array(20))
const selectedPhoto = ref(0)
const bgColor = (index: number) => {
  const colors = ['#906B3A', '#CF946F', '#E9D7C7', '#D6E0CB', '#939B7B']
  return colors[index % colors.length]
}
</script>

<template>
  <div class="container">
    <h2 class="roboto-serif text-russet text-3xl lg:text-4xl">More from De Berk</h2>

    <div
      class="columns-1 sm:columns-2 md:columns-4 gap-6 mt-6 lg:mt-8 relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:right-0 after:h-2/5 after:bg-gradient-to-b after:from-transparent after:to-cream after:pointer-events-none"
    >
      <div
        v-for="(_, pI) in photos"
        :key="`photo-${pI}`"
        class="w-full rounded-lg shadow-lg hover:shadow-2xl opacity-90 hover:opacity-100 transition-all duration-300 cursor-zoom-in"
        :class="{
          'mt-6': pI > 0,
          'shadow-2xl': selectedPhoto === pI
        }"
        :style="{
          height: `${((pI + 1) * 160) % 360}px`,
          backgroundColor: bgColor(pI)
        }"
        @click="selectedPhoto = pI"
      ></div>
    </div>
  </div>

  <DialogPreview v-if="selectedPhoto" :image="bgColor(selectedPhoto)" @close="selectedPhoto = 0" />
</template>
