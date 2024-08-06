<script setup lang="ts">
import { ref, watch } from 'vue'

const today = new Date()
const nextDay = ref(new Date(today))
nextDay.value.setDate(nextDay.value.getDate() + 1)

const checkIn = ref('')
const successState = ref(false)

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`
}

const padNumber = (number: number) => {
  return number < 10 ? `0${number}` : number
}

watch(checkIn, (newVal) => {
  const newCheckIn = new Date(newVal)
  nextDay.value = newCheckIn
  nextDay.value.setDate(nextDay.value.getDate() + 1)
})
</script>

<template>
  <form
    class="bg-russet/70 rounded-xl px-5 py-6 w-[420px] relative"
    @submit.prevent="() => (successState = true)"
    netlify
  >
    <div class="flex flex-wrap gap-4" :class="successState ? 'opacity-0' : 'opacity-100'">
      <h5 class="text-cream w-full text-center">Contact us to book your room</h5>
      <input
        type="text"
        name="name"
        class="px-4 leading-[48px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="mobile"
        class="px-4 leading-[48px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
        placeholder="Phone Number"
        required
      />
      <input
        type="email"
        name="email"
        class="px-4 leading-[48px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
        placeholder="Email"
        required
      />
      <input
        type="date"
        name="check-in"
        class="px-4 leading-[48px] bg-cream text-russet rounded-md block placeholder:text-clay w-[calc(50%_-_8px)]"
        :min="formatDate(today)"
        placeholder="Check In"
        v-model="checkIn"
        required
      />
      <input
        type="date"
        name="check-out"
        class="px-4 leading-[48px] bg-cream text-russet rounded-md block placeholder:text-clay w-[calc(50%_-_8px)]"
        :min="formatDate(nextDay)"
        placeholder="Check Out"
        required
      />
      <button type="submit" class="w-full rounded-md bg-olive text-cream leading-[60px]">
        Contact
      </button>
    </div>

    <div
      v-if="successState"
      class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
    >
      <h5 class="roboto-serif text-xl text-spring-sage">Thank you for your message!</h5>
      <p class="mt-2 text-cream">We will contact you within the next 48 hours</p>
    </div>
  </form>
</template>
