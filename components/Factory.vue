<template>
  <section class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full   md:pl-2 ">
      <!-- Chap qism -->
      <div class="py-10 bg-[#F4F9FB] logo-line z-40 md:px-3 pl-5">
        <div class="max-w-[637px] md:ml-auto z-50">
          <NuxtLink to="/" class="flex justify-center md:justify-start">
            <NuxtImg src="/logoDark.svg"  class="bg-[#F4F9FB] md:w-[150px] w-[120px] z-50 relative "/>
          </NuxtLink>

          <h2
            class="sm:text-[30px] text-[15px] font-bold text-[#146699] uppercase mt-6 text-center md:text-start max-w-[600px]"
          >
            Первый производитель алюминиевых банок в Узбекистане
          </h2>

          <div class="flex flex-col sm:flex-row gap-6 mt-6 items-center text-center md:text-start">
            <div class="max-w-[280px]">
              <h3 class=" sm:text-[30px] text-[15px] font-bold text-[#146699]">До 2,2 млрд</h3>
              <p class="font-semibold sm:text-[20px] text-[14px] ">Банок в год</p>
              <p class="text-gray-700 sm:text-[16px] text-[14px] ">
                с вводом в эксплуатацию второй производственной линии
              </p>
            </div>
            <div class="max-w-[280px] sm:ml-5">
              <h3 class=" sm:text-[30px] text-[15px] font-bold text-[#146699]">До 30%</h3>
              <p class="font-semibold sm:text-[20px] text-[14px]">Продукции на экспорт</p>
              <p class="text-gray-700 sm:text-[16px] text-[14px] " >
                в Россию, Казахстан и другие страны СНГ.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- O‘ng qism -->
      <div class="relative w-full sm:pt-30 pt-13 lg:px-2  right-line">
        <img
          src="/bgFactory.png"
          alt="Zavod"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div
          class="relative xl:pl-15 md:pr-5  px-5  pb-20 flex flex-col gap-6 text-white h-full justify-center max-w-[680px ]"
        >
          <h2 class="sm:text-[50px] text-[20px] font-bold uppercase">О заводе</h2>
          <p class="max-w-150">
            East Can Solutions — первая компания в Республике Узбекистан,
            специализирующаяся на производстве высококачественных алюминиевых
            банок для напитков. Завод расположен на территории специальной
            промышленной зоны «Янги Авлод» в Янгихаётском районе г.Ташкента и
            занимает площадь 109 000 кв. метров на участке в 21 га.
          </p>
          <NuxtLink
            v-if="showButton"
            to="/about"
            class="bg-transparent sm:w-50 w-35 border border-white sm:px-6 px-2 sm:py-2 py-1 text-center rounded hover:bg-white hover:text-blue-900 transition"
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
    default: true,
  },
});
</script>

<style>
.logo-line {
  position: relative;
  z-index: 50;
}

.logo-line::after {
  position: absolute;
  content: "";
  width: 380px;
  height: 2px;
  background: rgba(20, 102, 153, 1);
  top: 90px;
  right: 0;
  z-index: 40;
} 

@media (max-width: 768px){
  .logo-line::after {
  display: none;
  }
}

@media (min-width: 768px) and (max-width: 810px) {
  .logo-line::after {
width: 300px;
  }
}

@media (max-width: 640px){
  .right-line::after {
  display: none;
  }
}

.right-line {
  position: relative;
}

.right-line::after {
  position: absolute;
  content: "";
  width: 100%;
  max-width: 660px;
  height: 2px;
  background: rgba(255, 255, 255, 1);
  top: 90px;
  left: 0;
}


</style>
