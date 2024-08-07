<script setup lang="ts">
import ContactForm from '../ContactForm.vue'
import { onUnmounted, ref } from 'vue'

const activeSlide = ref(0)
const slides = ref(new Array(5))

const interval = setInterval(() => {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}, 3000)

const bgColor = (index: number) => {
  const colors = ['#906B3A', '#CF946F', '#E9D7C7', '#D6E0CB', '#939B7B']
  return colors[index % colors.length]
}

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="slides w-full relative">
    <div class="slides__contents h-[670px] relative">
      <div
        v-for="(_, sI) in slides"
        :key="`slide-${sI}`"
        class="h-full absolute top-0 left-0 w-full h-full slide after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-[inherit] after:h-[inherit] after:bg-black/30"
        :class="sI === activeSlide ? 'opacity-100' : 'opacity-0'"
        :style="{ backgroundColor: bgColor(sI) }"
      ></div>
    </div>

    <div class="slides__overlays absolute top-0 left-0 right-0 bottom-0 flex">
      <div class="container pr-0 flex justify-between items-center m-auto">
        <div>
          <h1 class="roboto-serif text-cream text-5xl">Holiday Home De Berk</h1>
          <h2 class="roboto-serif text-soft-peach text-4xl mt-5 leading-[3rem]">
            The ideal base for those who enjoy walking, <br />
            and cycling in a peaceful environment
          </h2>
        </div>

        <ContactForm />
      </div>
    </div>

    <div class="slide__controls flex justify-center gap-5 absolute bottom-6 mx-auto left-0 right-0">
      <button
        v-for="(_, sI) in slides"
        :key="`slide-control-${sI}`"
        :class="sI === activeSlide ? 'bg-cream w-8' : 'bg-olive w-4'"
        class="text-[0] h-4 rounded-full transition-all duration-300"
        @click="activeSlide = sI"
      >
        {{ sI }}
      </button>
    </div>
  </div>
</template>
