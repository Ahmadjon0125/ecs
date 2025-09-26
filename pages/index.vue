<template>
  <div class="hero">
    <HomeHero />
  </div>
  <Factory />

  <section class="py-42">
    <div class="max-w-7xl mx-auto">
      <!-- Sarlavha va tugma -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-[#146699] text-[50px] font-semibold uppercase py-10">
          Галерея
        </h2>
        <NuxtLink
          to="/galery"
          class="border border-blue-800 text-blue-800 px-4 py-2 rounded hover:bg-blue-800 hover:text-white transition"
        >
          Смотреть все фото и видео
        </NuxtLink>
      </div>

      <!-- Panjara -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <!-- Chap 3 ustun – rasmlar -->
        <div class="lg:col-span-1 grid grid-cols-3 gap-4 mr-10">
          <el-image :src="url1" :preview-src-list="srcList" :initial-index="0" show-progress>
            <template #viewer-error="{ activeIndex, src }">
              <div class="image-slot viewer-error">
                <el-icon><icon-picture /></el-icon>
                <span>
                  this is viewer-error slot. current index: {{ activeIndex }}.
                  src:
                  {{ src }}
                </span>
              </div>
            </template>
          </el-image>

          <el-image :src="url2" :preview-src-list="srcList" :initial-index="1" show-progress>
            <template #viewer-error="{ activeIndex, src }">
              <div class="image-slot viewer-error">
                <el-icon><icon-picture /></el-icon>
                <span>
                  this is viewer-error slot. current index: {{ activeIndex }}.
                  src:
                  {{ src }}
                </span>
              </div>
            </template>
          </el-image>

          <el-image :src="url3" :preview-src-list="srcList" :initial-index="2" show-progress>
            <template #viewer-error="{ activeIndex, src }">
              <div class="image-slot viewer-error">
                <el-icon><icon-picture /></el-icon>
                <span>
                  this is viewer-error slot. current index: {{ activeIndex }}.
                  src:
                  {{ src }}
                </span>
              </div>
            </template>
          </el-image>

          <el-image :src="url4" :preview-src-list="srcList" :initial-index="3" show-progress>
            <template #viewer-error="{ activeIndex, src }">
              <div class="image-slot viewer-error">
                <el-icon><icon-picture /></el-icon>
                <span>
                  this is viewer-error slot. current index: {{ activeIndex }}.
                  src:
                  {{ src }}
                </span>
              </div>
            </template>
          </el-image>

          <el-image :src="url5" :preview-src-list="srcList" :initial-index="4" show-progress>
            <template #viewer-error="{ activeIndex, src }">
              <div class="image-slot viewer-error">
                <el-icon><icon-picture /></el-icon>
                <span>
                  this is viewer-error slot. current index: {{ activeIndex }}.
                  src:
                  {{ src }}
                </span>
              </div>
            </template>
          </el-image>

          <el-image :src="url6" :preview-src-list="srcList" :initial-index="5" show-progress>
            <template #viewer-error="{ activeIndex, src }">
              <div class="image-slot viewer-error">
                <el-icon><icon-picture /></el-icon>
                <span>
                  this is viewer-error slot. current index: {{ activeIndex }}.
                  src:
                  {{ src }}
                </span>
              </div>
            </template>
          </el-image>
        </div>

        <!-- O‘ng 1 ustun – video blok -->
        <div class="relative w-full h-full">
          <img src="/vid.jpg" alt="" class="w-full h-full object-cover" />
          <!-- Play tugmasi -->
          <button class="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-16 h-16 bg-black/50 rounded-full p-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- <div>
    <div class="demo-image__error">


      <el-image-viewer
        v-if="showPreview"
        show-progress
        :url-list="srcList"
        @close="showPreview = false"
      >
        <template #viewer-error="{ activeIndex, src }">
          <div class="image-slot viewer-error">
            <el-icon><icon-picture /></el-icon>
            <span>
              this is viewer-error slot. current index: {{ activeIndex }}. src:
              {{ src }}
            </span>
          </div>
        </template>
      </el-image-viewer>
    </div>
  </div> -->

  <section class="py-12 bg-[#F4F9FB]">
    <div class="container">
      <div>
        <h2 class="text-[#146699] text-[50px] font-semibold uppercase py-10">
          Продукция
        </h2>
        <div class="grid grid-cols-2 gap-10 text-white">
          <div class="p-20 pt-40 bg-[url('./productBg1.png')]">
            <h2 class="font-semibold text-[24px]">Алюминиевые банки</h2>
            <p class="py-5">
              От общей картины до крошечных движущихся частей - мы относимся к
              каждому аспекту упаковки вашего напитка с высочайшим вниманием к
              деталям.
            </p>
            <NuxtLink to="/product1">Подробнее </NuxtLink>
          </div>
          <div class="p-20 pt-40 bg-[url('./productBg2.png')]">
            <h2 class="font-semibold text-[24px]">Розлив напитков</h2>
            <p class="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <NuxtLink to="/product2">Подробнее </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("../public/homeBg.png");
  height: 100vh;
}

.demo-image__error .el-image {
  max-width: 300px;
  max-height: 200px;
  width: 100%;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  height: 200px;
  background: #fff;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.image-viewer-slot {
  background: var(--el-fill-color-light);
}
.viewer-error {
  color: #000;
}
</style>

<script setup>
import { ref } from "vue";
import { Picture as IconPicture } from "@element-plus/icons-vue";

const showPreview = ref(false);

const srcList = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];

const url1 = "/img1.jpg";
const url2 = "/img2.jpg";
const url3 = "/img3.jpg";
const url4 = "/img4.jpg";
const url5 = "/img5.jpg";
const url6 = "/img6.jpg";
</script>
