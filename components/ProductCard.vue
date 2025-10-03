<template>
   

        <div class="sm:p-9 p-2 bg-white">
            <img :src="content.img" width="50px" height="50px" alt="">
            <h2 class="font-bold text-[#146699] sm:text-[20px] py-5">{{ content.title }}</h2>
            <p class="font-medium text-[#323232] text-[16px]">{{ content.text }}</p>
        </div>
  
</template>

<script setup>
defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>