<template>
  <section class="text-white container ">
    <div class=" border-t-1 border-white">
      <h2 class=" font-semibold text-[50px] uppercase pt-15">{{ title }}</h2>
      <ul class="flex">
        <li>
          <NuxtLink to="/">{{ subtitle }}</NuxtLink>
          <span class="mx-4"> |</span>
        </li>
        <li>
          <NuxtLink :to="{route}">{{ title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
li {
  font-weight: 500;
  font-size: 18px;
}
</style>

<script setup>
const props = defineProps(["title", "subtitle","route"]);
</script>
