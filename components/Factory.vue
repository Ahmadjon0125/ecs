<template>
  <section class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full">
      <!-- Chap qism -->
      <div class="py-20 bg-[#F4F9FB]">
        <div class="max-w-[650px] ml-auto">
          <NuxtLink to="/">
            <NuxtImg src="/logoDark.svg" width="200px" height="105px" />
          </NuxtLink>

          <h2 class="text-2xl font-bold text-[#146699] uppercase mt-6 max-w-[600px]">
           Первый производитель алюминиевых банок в Узбекистане
          </h2>

          <div class="flex gap-6 mt-6">
            <div class="w-[280px]">
              <h3 class="max-text-2xl font-bold text-[#146699]">До 2,2 млрд</h3>
              <p class="font-semibold">Банок в год</p>
              <p class="text-gray-700">
               с вводом в эксплуатацию второй производственной линии
              </p>
            </div>
            <div class="w-[280px] ml-5">
              <h3 class="text-2xl font-bold text-[#146699]">До 30%</h3>
              <p class="font-semibold">Продукции на экспорт</p>
              <p class="text-gray-700">
               в Россию, Казахстан и другие страны СНГ.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- O‘ng qism -->
      <div class="relative w-full">
        <!-- background rasmi -->
        <img
          src="/bgFactory.jpg"
          alt="Zavod"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <!-- overlay -->
        <div class="absolute inset-0 bg-[#083957CC]"></div>

        <div
          class="relative p-10 flex flex-col gap-6 text-white h-full justify-center max-w-2xl"
        >
          <h2 class="text-3xl font-bold uppercase">О заводе</h2>
          <p>
            East Can Solutions — первая компания в Республике Узбекистан,
            специализирующаяся на производстве высококачественных алюминиевых
            банок для напитков. Завод расположен на территории специальной
            промышленной зоны «Янги Авлод» в Янгихаётском районе г.Ташкента и
            занимает площадь 109 000 кв. метров на участке в 21 га.
          </p>
          <NuxtLink
            v-if="showButton" 
            to="/about"
            class="bg-transparent w-50 border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition"
          >
            Подробнее
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  showButton: {
    type: Boolean,
    default: true
  }
})
</script>