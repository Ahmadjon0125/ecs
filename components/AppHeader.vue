<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-[100] transition-all duration-300 text-white',
      isScrolled && !isOpen ? 'backdrop-blur-lg backdrop-brightness-75' : 'bg-transparent',
    ]"
  >
    <div class="container">
      <div class="flex items-center justify-between py-3">
        <!-- Logo -->
        <NuxtLink class="header_logo z-[110]" to="/">
          <NuxtImg src="/logo.svg" width="100" height="105" class="md:w-[138px]" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="navbar hidden lg:block">
          <ul class="flex items-center xl:space-x-6 lg:space-x-4">
            <li><NuxtLink class="nav-link" to="/about">О нас</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/product1">Продукция</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/galery">Галерея</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/contact">Контакты</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/news">Новости и пресса</NuxtLink></li>
          </ul>
        </nav>

        <!-- Burger Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center z-[110] focus:outline-none"
          :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="isOpen"
        >
          <span
            :class="[
              'block w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out',
              isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
            ]"
          ></span>
          <span
            :class="[
              'block w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out my-1.5',
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            ]"
          ></span>
          <span
            :class="[
              'block w-7 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out',
              isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
            ]"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        @click="closeMenu"
        class="lg:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[90]"
      ></div>
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-95 backdrop-blur-xl z-[95] shadow-2xl"
      >
        <nav class="flex flex-col h-full pt-20 px-6">
          <ul class="space-y-1">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                @click="closeMenu"
                class="mobile-nav-link block py-3 px-4 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-10"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const isOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { to: "/about", text: "О нас" },
  { to: "/product1", text: "Продукция" },
  { to: "/galery", text: "Галерея" },
  { to: "/contact", text: "Контакты" },
  { to: "/news", text: "Новости и пресса" },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  // Prevent body scroll when menu is open
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = "";
};

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* Desktop Navigation Links */
.nav-link {
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}

.router-link-exact-active.nav-link {
  border-bottom: 2px solid #ffffff;
  color: #ffffff;
}

.nav-link:hover {
  border-bottom: 2px solid #ffffff;
}

/* Mobile Navigation Links */
.mobile-nav-link {
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
}

.router-link-exact-active.mobile-nav-link {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.header_logo {
  border: none;
}

/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for menu panel */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>