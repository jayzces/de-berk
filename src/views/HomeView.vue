<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import ContactForm from '@/components/ContactForm.vue'

const slides = ref([
  { bg: '#906B3A' },
  { bg: '#CF946F' },
  { bg: '#E9D7C7' },
  { bg: '#D6E0CB' },
  { bg: '#939B7B' }
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
      <div class="slides__contents h-[670px] relative">
        <div
          v-for="(s, sI) in slides"
          :key="`slide-${sI}`"
          class="h-full absolute top-0 left-0 w-full h-full slide after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-[inherit] after:h-[inherit] after:bg-black/30"
          :class="sI === activeSlide ? 'opacity-100' : 'opacity-0'"
          :style="{ backgroundColor: s.bg }"
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

      <div
        class="slide__controls flex justify-center gap-5 absolute bottom-6 mx-auto left-0 right-0"
      >
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

    <section class="py-20">
      <div class="container grid grid-cols-5 gap-12">
        <div class="text-clay col-span-3">
          <h2 class="roboto-serif text-russet text-4xl">Rooms and Rates</h2>

          <p class="mt-4 leading-6">
            Experience the perfect blend of comfort and convenience in our meticulously maintained
            hotel rooms, each thoughtfully designed to include a private bathroom and a functional
            writing desk.
          </p>

          <p class="mt-4 leading-6">
            De Berk offers 11 inviting rooms, collectively accommodating up to 29 guests. Each room
            features cozy beds and its own bathroom, ensuring a relaxing stay. Towels and bed linen
            are included, and all guests are welcome to access the free WiFi.
          </p>

          <p class="mt-4 leading-6">Our accommodations include:</p>

          <ul class="list-disc pl-4 mt-4 leading-6">
            <li>4 double rooms, with 2 featuring connecting doors that are ideal for families.</li>
            <li>7 rooms with three (3) beds, perfect for small groups or families.</li>
          </ul>

          <p class="mt-4 leading-6">
            For our youngest guests, baby cots are available at no additional cost.
          </p>

          <p class="mt-4 leading-6">For pricing information, please see below:</p>

          <table class="table-auto mt-4 w-full">
            <thead>
              <tr class="bg-russet/20">
                <th class="py-3 rounded-tl-md">Rate</th>
                <th class="py-3 pr-3 text-right">1 person room</th>
                <th class="py-3 pr-3 text-right">2 person room</th>
                <th class="py-3 pr-3 rounded-tr-md text-right">3 person room</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 text-center border-l border-b">Room / night</td>
                <td class="py-3 pr-3 text-right border-b">€ 75</td>
                <td class="py-3 pr-3 text-right border-b">€ 85</td>
                <td class="py-3 pr-3 text-right border-b border-r">€ 95</td>
              </tr>
              <tr>
                <td class="py-3 text-center border-l border-b">Breakfast Buffet</td>
                <td class="py-3 pr-3 text-right border-b">€ 9.50</td>
                <td class="py-3 pr-3 text-right border-b">€ 19</td>
                <td class="py-3 pr-3 text-right border-b border-r">€ 28.50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-russet/20">
                <td class="h-2 rounded-b-md" colspan="4"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div class="h-full bg-olive rounded-lg col-span-2"></div>
      </div>
    </section>
  </main>
</template>
