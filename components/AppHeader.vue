<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-60 transition-all duration-300  text-white',
      isScrolled ? 'backdrop-blur-lg backdrop-brightness-60 ' : 'bg-transparent',
    ]"
   
  >
    <div class="container">
      <div class="flex lg:items-center justify-between py-3">
        <NuxtLink class="header_logo" to="/">
          <NuxtImg src="/logo.svg" width="100px" height="105px"  class="md:w-[138px] "/>
        </NuxtLink>
        <nav class="navbar  ">
          <ul class="header_list hidden lg:flex  lg:items-center xl:space-x-4 md:space-x-2 sm:space-x-1">
            <li><NuxtLink class="nav-link" to="/about">О нас</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/product1">Продукция</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/galery">Галерея</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/contact">Контакты</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/news">Новости и пресса</NuxtLink></li>
          </ul>


           <!-- Mobile menyu -->
      <Transition name="slide">
        <ul 
          v-if="isOpen"
          class="lg:hidden mt-1 space-y-2 pb-4 slideul"
        >
           <li><NuxtLink class="nav-link" to="/about">О нас</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/product1">Продукция</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/galery">Галерея</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/contact">Контакты</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/news">Новости и пресса</NuxtLink></li>
        </ul>
      </Transition>

<!-- Burger button -->
             <button 
          @click="isOpen = !isOpen"
          class="lg:hidden block relative w-8 h-8 t-0 flex flex-col justify-center"
        >
          <span 
            class="block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': isOpen }"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-black mb-1.5 transition-all duration-300"
            :class="{ 'opacity-0': isOpen }"
          ></span>
          <span 
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': isOpen }"
          ></span>
        </button>

 


        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const isOpen = ref(false)

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



.slide-enter-active,
.slide-leave-active
{
  transition: all 0.3s ease;
  backdrop-filter: blur(16px);
}

.slideul{
  backdrop-filter: blur(16px);
  width: 100vw;
  margin-right: auto;
  margin-top: 0;
  padding-top: 0;
  
}

.slide-enter-from {
  opacity: 100;
  transform: translateX(100px);
}

.slide-leave-to {
  opacity: 10;
  transform: translateX(100px);
}








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
