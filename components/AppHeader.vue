<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300  text-white',
      isScrolled ? 'backdrop-blur-2xl backdrop-brightness-40 ' : 'bg-transparent',
    ]"
   
  >
    <div class="container">
      <div class="flex items-center py-3">
        <NuxtLink class="header_logo" to="/">
          <NuxtImg src="/logo.svg" width="200px" height="105px" />
        </NuxtLink>
        <nav class="navbar ml-auto">
          <ul class="header_list flex items-center space-x-4">
            <li><NuxtLink class="nav-link" to="/about">О нас</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/product1">Продукция</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/galery">Галерея</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/contact">Контакты</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/news">Новости и пресса</NuxtLink></li>
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

<style scoped>





.nav-link {
  /* Chiziq ko'rinishi uchun default holatda border-bottom yo'q */
  border-bottom: 2px solid transparent; 
  padding-bottom: 5px; /* Chiziq va matn orasidagi bo'shliq */
  transition: border-color 0.3s ease;
}

/* 1. Link bosilganda yoki faol bo'lganda ishlaydigan klass */
.router-link-exact-active {
  /* Chiziqni aniq ko'rsatish */
  border-bottom: 2px solid #FFFFFF; /* Sizning brendingiz rangi */
  color: #FFFFFF; /* Faol link rangini o'zgartirish */
}

/* 2. Agar bosilganda emas, balki sichqoncha ustida turganda ham chiziq chiqishi kerak bo'lsa */
.nav-link:hover {
  border-bottom: 2px solid #FFFFFF; /* Hover rangi */
}

.header_logo {
  border: none;
}

</style>
