<template>
  <div class="text-white container ">
    <div class=" border-t-1 border-white">
      <h2 class=" font-semibold lg:text-[50px] sm:text-[30px] md:text-[40] text-[22px] uppercase sm:pt-15 pt-5">{{ title }}</h2>
      <ul class="flex ">
        <li class="flex">
          <NuxtLink to="/">{{ subtitle }}</NuxtLink>
          <span class="mx-4 "> |</span>
        </li>
        <li>
          <NuxtLink :to="route">{{ title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
li {
  font-weight: 500;
  font-size: 18px;
}
</style>

<script setup>
const prop= defineProps(["title", "subtitle","route"]);
 
 
</script>
