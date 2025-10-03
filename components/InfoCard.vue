<template>
  <section class="container">
    <div class=" grid lg:grid-cols-2 justify-center items-center lg:gap-8 gap-2 lg:py-20 sm:py-12 py-4"  >
      <div class="justify-center flex flex-col max-w-[600px] font-medium text-[18px] text-[#323232]   " :class="reverse ? ' order-2 ' : ' order-1'">
        <p >{{ content.text1 }}</p>
        <p class="my-5">{{ content.text2 }}</p>
        <p v-if="!reverse">{{ content.text3 }}</p>
      </div>
      <div :class="reverse ? ' lg:order-1' : ' lg:order-2'">
        <img :src="content.image" width="660px" height="500px" />
        
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
    reverse: {
    type: Boolean,
    default: false,
  },
});
</script>
