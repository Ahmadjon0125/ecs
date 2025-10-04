<template>
  <div class="hero xl:h-screen h-auto  ">
    <HomeHero />
  </div>
  <Factory />

  <section class="lg:py-32 py-5 sm:py-15">
    <div class="container">
   <div class="max-w-[1320px] mx-auto">
      <!-- Sarlavha va tugma -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 galery">
        <h2
          class="text-[#146699] md:text-[50px] sm:text-[30px] text-[20px] font-semibold uppercase sm:py-10 py-2 relative z-10 bg-white"
        >
          Галерея
        </h2>
        <NuxtLink
          to="/galery"
          class="border relative z-10 bg-white w-46 sm:w-auto border-blue-800 text-blue-800 text-[12px] sm:text-[16px] px-1 sm:px-4 sm:py-2 py-1 rounded hover:bg-blue-800 hover:text-white transition"
        >
          Смотреть все фото и видео
        </NuxtLink>     
      </div>

      <!-- Panjara -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2  ">
        <!-- Chap 3 ustun – rasmlar -->
        <div class="lg:col-span-1 grid grid-cols-3 gap-4 lg:mr-10">
          <el-image
            :src="url1"
            :preview-src-list="srcList"
            :initial-index="0"
            show-progress
          >
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

          <el-image
            :src="url2"
            :preview-src-list="srcList"
            :initial-index="1"
            show-progress
          >
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

          <el-image
            :src="url3"
            :preview-src-list="srcList"
            :initial-index="2"
            show-progress
          >
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

          <el-image
            :src="url4"
            :preview-src-list="srcList"
            :initial-index="3"
            show-progress
          >
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

          <el-image
            :src="url5"
            :preview-src-list="srcList"
            :initial-index="4"
            show-progress
          >
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

          <el-image
            :src="url6"
            :preview-src-list="srcList"
            :initial-index="5"
            show-progress
          >
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
 




<div class="flex flex-col items-center justify-center ">
    
    <div class="relative w-full h-full  shadow-lg rounded-lg overflow-hidden">
        
        <div @click="isModalOpen = true" 
             class="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/40 transition">
            
            <svg class="w-20 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 3l15 9-15 9V3z"/>
            </svg>
        </div>
        
        <div class="relative w-full aspect-video">
            <iframe
              class="w-full h-full"
              :src="videoSrcEmbed" 
              title="Nuxt 3 — Course for Beginners"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
        </div>
    </div>
    

    <div v-if="isModalOpen" 
         class="fixed inset-0 z-200 flex items-center justify-center bg-black/90"
         @click="isModalOpen = false" > 
      
        <div @click.stop class="relative w-11/12 max-w-5xl p-0 bg-black">
            
            <button @click="isModalOpen = false" class="absolute -top-10 right-0 text-white text-3xl font-bold z-50 hover:text-gray-500">
                &times;
            </button>

            <div class="relative w-full aspect-video">
                <iframe
                    class="w-full h-full" 
                    :src="videoSrcAutoplay"
                    title="Nuxt 3 — Course for Beginners"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
    
  </div>




      </div>
    </div>
    </div>
 
  </section>

  


  <section class="sm:py-6 pt-4 pb-6 bg-[#F4F9FB]">
    <div class="container">
      <div class="product ">
        <h2
          class="prod text-[#146699] bg-[#F4F9FB] md:text-[50px] sm:text-[30px] text-[20px] inline-block  font-semibold uppercase sm:py-10 py-4  z-10 relative "
        >
          Продукция
        </h2>
        <div class="grid md:grid-cols-2 grid-cols-1  lg:gap-10 gap-5 text-white ">
          <NuxtLink to="/product1">
            <div
              class="lg:px-[50px] md:px-7 sm:px-5 px-4 pb-[44px] xl:pt-52 lg:pt-25 pt-10 sm:pt-15 bg-[url('./productBg1.png')] bg-no-repeat h-full   bg-cover  lg:min-h-[400px] xl:min-h-[450px]"
            >
              <h2 class="font-semibold lg:text-[24px]">Алюминиевые банки</h2>
              <p class="py-5 ">
                От общей картины до крошечных движущихся частей - мы относимся к
                каждому аспекту упаковки вашего напитка с высочайшим вниманием к
                деталям.
              </p>
              <NuxtLink class="flex text-[12px] font-sembold">Подробнее <img class="ml-2" src="/arrow.png" width="8px" height="4px" alt=""></NuxtLink>
            </div>
          </NuxtLink>
          <NuxtLink to="/product2">
            <div
              class="lg:px-[50px] md:px-7 sm:px-5 px-4 pb-[44px] xl:pt-52 lg:pt-25 sm:pt-15 pt-10 bg-[url('./productBg2.png')] bg-no-repeat h-full bg-cover lg:min-h-[400px] xl:min-h-[450px] "
            >
              <h2 class="font-semibold lg:text-[24px]">Розлив напитков</h2>
              <p class="py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
                <NuxtLink class="flex text-[12px] font-sembold">Подробнее <img class="ml-2" src="/arrow.png" width="8px" height="4px" alt=""></NuxtLink>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.hero {
  background-image: url("../public/homeBg.png");
  /* height: 100vh; */
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

.el-image__inner {
  object-fit: cover;
  width: 200px;
  height: 200px;
}

.el-image-viewer__mask {
  opacity: -1;
}

.galery {
  position: relative;
  /* padding-left: 30px; */
  z-index: 10;
}
.galery::after {
  content: "";
  position: absolute;
  top: 80px;
  left: 285px;
 width: 756px;
  height: 2px;
  background-color: rgba(20, 102, 153, 1);
  z-index: -1;
}

@media (max-width: 1100px) {

  .galery::after {

 width: 499px;

}
}

@media (max-width: 850px) {

  .galery::after {

 display: none;

}
}

.product {
  position: relative;
  z-index: 50;
}
.product::after {
  content: "";
  position: absolute;
  top: 80px;
  right: 0px;
  width: 937px;
  height: 2px;
  z-index: -1;
  background-color: rgba(20, 102, 153, 1);

}

@media (max-width: 950px) {
  .product::after {
    display: none;
  }
}

@media (min-width: 950px) and (max-width: 1050px) {
  .product::after {
    width: 800px;
  }
}

@media  (max-width: 300px) {
  .prod {
    font-size: 23px;
  }
}


</style>

<script setup>
import { ref } from "vue";
import { Picture as IconPicture } from "@element-plus/icons-vue";



const isModalOpen = ref(false);

// Video linki, modalda avtomatik o'ynash uchun ?autoplay=1 qo'shamiz
const videoSrcEmbed = "https://www.youtube.com/embed/fTPCKnZZ2dk";
const videoSrcAutoplay = videoSrcEmbed + "?autoplay=1";







// const showPreview = ref(false);

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
