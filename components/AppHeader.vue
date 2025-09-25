<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white',
      isScrolled ? 'backdrop-blur-2xl ' : 'bg-transparent',
    ]"
   
  >
    <div class="container">
      <div class="flex items-center py-3">
        <NuxtLink to="/">
          <NuxtImg src="/logo.svg" width="200px" height="105px" />
        </NuxtLink>
        <nav class="navbar ml-auto">
          <ul class="flex items-center space-x-4">
            <li><NuxtLink to="/about">О нас</NuxtLink></li>
            <li><NuxtLink to="/product1">Продукция</NuxtLink></li>
            <li><NuxtLink to="/galery">Галерея</NuxtLink></li>
            <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
            <li><NuxtLink to="/news">Новости и пресса</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const isScrolled = ref(false);

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
