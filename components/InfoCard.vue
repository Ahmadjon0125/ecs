<template>
  <section class="container">
    <div class=" grid md:grid-cols-2 gap-8 py-25"  >
      <div class="justify-center flex flex-col max-w-[600px] font-medium text-[18px] text-[#323232]   " :class="reverse ? ' order-2 ' : ' order-1'">
        <p >{{ content.text1 }}</p>
        <p class="my-5">{{ content.text2 }}</p>
        <p v-if="!reverse">{{ content.text3 }}</p>
      </div>
      <div :class="reverse ? ' order-1' : ' order-2'">
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
