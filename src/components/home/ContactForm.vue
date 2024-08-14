<script setup lang="ts">
import { ref, watch } from 'vue'

const minDay = ref(new Date())
minDay.value.setDate(minDay.value.getDate() + 3)
const nextDay = ref(new Date(minDay.value))
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

const submit = (event: Event) => {
  if (!event.target) return

  // Confirmed working, disabling for personal sites
  // const myForm = event.target
  // const formData = new FormData(myForm as HTMLFormElement)

  // fetch('/', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: new URLSearchParams(formData as any).toString()
  // })
  //   .then(() => (successState.value = true))
  //   .catch((error) => alert(error))

  successState.value = true
}
</script>

<template>
  <form
    class="bg-russet/70 rounded-xl px-4 py-5 lg:px-5 lg:py-6 w-full max-w-[420px] relative shadow-lg"
    @submit.prevent="submit($event)"
    name="contactForm"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    method="post"
  >
    <div class="flex flex-wrap gap-2 lg:gap-4" :class="successState ? 'opacity-0' : 'opacity-100'">
      <h5 class="text-cream w-full text-center">Contact us to book your room</h5>
      <input type="hidden" name="form-name" value="contactForm" />
      <input class="hidden" name="bot-field" type="text" />
      <input
        type="text"
        name="name"
        class="px-3 lg:px-4 lg:leading-[48px] leading-[36px] max-lg:text-[14px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="mobile"
        class="px-3 lg:px-4 lg:leading-[48px] leading-[36px] max-lg:text-[14px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
        placeholder="Phone Number"
        required
      />
      <input
        type="email"
        name="email"
        class="px-3 lg:px-4 lg:leading-[48px] leading-[36px] max-lg:text-[14px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
        placeholder="Email"
        required
      />
      <div class="w-full lg:w-[calc(50%_-_8px)]">
        <input
          type="date"
          name="check-in"
          class="px-3 lg:px-4 lg:leading-[48px] leading-[36px] h-[36px] max-lg:text-[14px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
          :min="formatDate(minDay)"
          placeholder="Check In"
          v-model="checkIn"
          required
        />
        <p class="mt-2 text-xs text-spring-sage">Check in</p>
      </div>

      <div class="w-full lg:w-[calc(50%_-_8px)]">
        <input
          type="date"
          name="check-out"
          class="px-3 lg:px-4 lg:leading-[48px] leading-[36px] h-[36px] max-lg:text-[14px] bg-cream text-russet rounded-md block placeholder:text-clay w-full"
          :min="formatDate(nextDay)"
          placeholder="Check Out"
          required
        />
        <p class="mt-2 text-xs text-spring-sage">Check out</p>
      </div>

      <button
        type="submit"
        class="w-full rounded-md bg-olive text-cream lg:leading-[60px] leading-[40px]"
      >
        Contact
      </button>
    </div>

    <div
      v-if="successState"
      class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
    >
      <h5 class="roboto-serif text-xl text-spring-sage">Successfully received your message!</h5>
      <p class="mt-2 text-cream">We will contact you within the next 48 hours</p>
    </div>
  </form>
</template>

<style scoped>
[type='date'] {
  -webkit-appearance: none;
}
</style>
