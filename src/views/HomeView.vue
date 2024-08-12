<script setup lang="ts">
import BannerSliders from '@/components/home/BannerSliders.vue'
import PhotoGrid from '@/components/home/PhotoGrid.vue'
</script>

<template>
  <main>
    <BannerSliders />

    <section class="pt-20 md:pt-[100px] lg:pb-11" id="rooms-and-rates">
      <div class="container flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:gap-12">
        <div class="text-clay col-span-3 max-lg:order-2">
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

          <table class="table-auto mt-4 w-full max-md:text-xs">
            <thead>
              <tr class="bg-olive/20">
                <th class="py-3 pl-2 rounded-tl-md">Rate</th>
                <th class="py-3 pr-2 lg:pr-3 text-right">1 person room</th>
                <th class="py-3 pr-2 lg:pr-3 text-right">2 person room</th>
                <th class="py-3 pr-2 lg:pr-3 rounded-tr-md text-right">3 person room</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 pl-2 text-center border-l border-b">Room / night</td>
                <td class="py-3 pr-2 lg:pr-3 text-right border-b">€ 75</td>
                <td class="py-3 pr-2 lg:pr-3 text-right border-b">€ 85</td>
                <td class="py-3 pr-2 lg:pr-3 text-right border-b border-r">€ 95</td>
              </tr>
              <tr>
                <td class="py-3 pl-2 text-center border-l border-b">Breakfast Buffet</td>
                <td class="py-3 pr-2 lg:pr-3 text-right border-b">€ 9.50</td>
                <td class="py-3 pr-2 lg:pr-3 text-right border-b">€ 19</td>
                <td class="py-3 pr-2 lg:pr-3 text-right border-b border-r">€ 28.50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-olive/20">
                <td class="h-2 rounded-b-md" colspan="4"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div
          class="max-lg:order-1 h-full max-lg:aspect-video bg-olive rounded-lg col-span-2 shadow-lg"
        ></div>
      </div>
    </section>

    <section class="py-20 py-[100px]" id="more-photos">
      <PhotoGrid />
    </section>
  </main>
</template>

<script lang="ts">
/**
 * To do list
 * - improve form fields, move placeholder/label to above the field
 * - For Production in forked repo under Wypoon
 *    - scrape images, and replace color blocks with actual images
 *    - set up emailing
 *    - refactor photo grid and dialog preview with proper images and their
 *      respective heights
 */
</script>
