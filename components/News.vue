<template class="py-15 ">
  <div class="container">
    <div class="flex py-15">
      <img :src="content.img" width="420px" height="420px" alt="" />
      <div class="bg-[#F4F9FB] w-full pl-20 pr-30 pt-20">
        <h2 class="font-bold text-[20px] text-[#323232]">{{ content.title }}</h2>
        <p class="text-[#146699] text-[16px] font-semibold mb-3">{{content.date}}</p>
        <p class="font-medium text-[16px] text-[#323232] mb-6">{{content.text}}</p>
        <NuxtLink :to="`/news/${content.slug}`" class="border py-2 px-8 font-semibold uppercase text-[12px] text-[#146699] border-[#146699] hover:bg-[#146699] hover:text-white">Подробнее</NuxtLink>
      </div>
    </div>
  </div >
</template>


<script setup>

defineProps ({
    content : {
        type: Object,
        required: true
    }
})

</script>