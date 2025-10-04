<template class="py-15">
  <NuxtLink :to="`/news/${content.slug}`">
    <div class="flex flex-col sm:flex-row  py-15">
      <div class="w-full   ">
        <img
          :src="content.img"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div
        class="bg-[#F4F9FB] w-full lg:pl-20 sm:pl-8 sm:pr-10 pt-10 sm:pt-5 flex flex-col justify-center pb-5 pl-3"
      >
        <h2 class="font-bold text-[20px] text-[#323232]">
          {{ content.title }}
        </h2>
        <p class="text-[#146699] text-[16px] font-semibold mb-3">
          {{ content.date }}
        </p>
        <p class="font-medium text-[16px] text-[#323232] mb-6">
          {{ content.text }}
        </p>
        <NuxtLink
          class="border py-2 mb-2 px-8 font-semibold uppercase max-w-[140px] text-[12px] text-[#146699] border-[#146699] hover:bg-[#146699] hover:text-white"
          >Подробнее</NuxtLink
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>
