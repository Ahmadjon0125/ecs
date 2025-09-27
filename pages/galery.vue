<template>
  <div class="galery-hero pt-35">
    <Breadcrumb
      :title="'  Галерея '"
      :subtitle="'Главная '"
      :route="'/galery'"
    />
  </div>

  <section class="py-15">
    <div class="container">
      <div>
        <el-tabs type="card" class="demo-tabs border-b-none">
          <el-tab-pane label="Фото">
            <h2 class="font-semibold uppercase text-[#146699] py-10">Фото</h2>

             <el-carousel 
                ref="carouselRef" 
                :initial-index="activeIndex"
                arrow="always"
                :autoplay="false"
                @change="handleSlideChange"
                class="mb-4"
              >
                <el-carousel-item v-for="(item, index) in srcList" :key="index">
                  <img :src="item" alt="Galereya rasmi" class="carousel-image-content">
                </el-carousel-item>
              </el-carousel>

              <div class="thumbnail-nav">
                <div 
                  v-for="(item, index) in srcList" 
                  :key="index"
                  class="thumbnail-item"
                  :class="{ 'is-active': index === activeIndex }"
                  @click="changeSlide(index)"
                >
                  <img :src="item" alt="Thumbnail" class="thumbnail-image" />
                </div>
              </div>

          </el-tab-pane>
          <el-tab-pane label="Видео">
            <h2>Видео</h2>


               <div class="video-gallery mt-8">
                
                <div class="main-video-block relative mb-6">
                  <img :src="videoCover1" alt="Asosiy Video" class="video-cover">
                  <button class="play-button absolute inset-0 flex items-center justify-center" @click="openVideo(videoUrl1)">
                    <svg viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" class="w-16 h-16 bg-black/50 rounded-full p-4 transition-all hover:bg-black/70">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"/>
                    </svg>
                  </button>
                  <p class="video-caption absolute bottom-0 left-0 text-white p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div class="grid grid-cols-3 gap-6">
                  <div v-for="(video, index) in smallVideos" :key="index" class="small-video-item relative mb-15" @click="openVideo(video.url)">
                    <img :src="video.cover" :alt="'Video ' + (index + 2)" class="video-cover">
                    <button class="play-button absolute inset-0 flex items-center justify-center" >
                      <svg viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" class="w-10 h-10 bg-black/50 rounded-full p-2 transition-all hover:bg-black/70">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"/>
                      </svg>
                    </button>
                    <p class="video-caption-small  text-[18px] text-[#323232] font-semibold  ">{{ video.caption}}</p>
                  </div>
                </div>

              </div>


          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </section>
</template>

<style>
.galery-hero {
  background-image: url("galeryBg.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.demo-tabs > .el-tabs__content {
  padding: 62px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.el-tabs__item {
  font-size: 20px;
  border-radius: none;
}

.el-tabs__item.is-active {
  background-color: #146699;
  color: white;
}

.el-tabs--card > .el-tabs__header {
  border-bottom: none;
}

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}



.el-carousel__container {
  height: 600px;
}




/* 4. Carousel ichidagi standart indikatorlarni butunlay yashirish */
/* ::v-deep orqali kirish Element Plus stillariga kirishning keng tarqalgan usuli */
.el-carousel__indicators {
    display: none !important;
}

/* 5. Asosiy rasm balandligi uchun stil */
.el-carousel__container {
  height: 600px;
}
.carousel-image-content {
  width: 100%;
  height: 100%; /* Konteyner balandligiga moslashtirish */
  object-fit: cover;
}

/* 6. Thumbnail Navigatsiya stili */
.thumbnail-nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  /* El-tabs ichidagi standart paddingni hisobga olish uchun */
  padding: 0 62px; 
}

.thumbnail-item {
  width: 100px; 
  height: 70px; 
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: border-color 0.3s, opacity 0.3s;
  opacity: 0.7;
}

.thumbnail-item:hover,
.thumbnail-item.is-active {
  border-color: #146699; /* Aktiv rasm atrofidagi ramka rangi */
  opacity: 1;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}






/* Video Galereya Stili */
.main-video-block {
  height: 450px; /* Katta video balandligi */
  overflow: hidden;
  cursor: pointer;
}

.small-video-item {
  height: 200px; /* Kichik video balandligi */
  /* overflow: hidden; */
  cursor: pointer;
}

.video-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Play tugmasi ustidagi rasm ta'siri */
.play-button svg {
  transition: transform 0.3s ease-in-out;
}
.play-button:hover svg {
  transform: scale(1.1);
}

/* Katta videodagi yozuv stili */
.main-video-block .video-caption {
  background-image: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
  width: 100%;
}





</style>

<script setup>

import { ref } from 'vue';

// 1. Carousel komponentiga murojaat qilish ref'i
const carouselRef = ref(null);

// 2. Aktiv rasm indeksini kuzatish uchun ref (default: 0)
const activeIndex = ref(0); 

const srcList = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];

// 3. Thumbnailga bosilganda slayderni o'zgartirish funksiyasi
const changeSlide = (index) => {
  if (carouselRef.value) {
    carouselRef.value.setActiveItem(index);
    // Indeksni darhol yangilaymiz (chunki @change faqat carousel tugagandan keyin ishlaydi)
    activeIndex.value = index; 
  }
};

// 4. Carousel o'zi aylantirilganda (yoki o'qlar orqali) indeksni yangilash
const handleSlideChange = (newIndex) => {
  activeIndex.value = newIndex;
};



// Video ma'lumotlari
const videoCover1 = '/img1.jpg'; // Asosiy katta video uchun cover rasm
const videoUrl1 = 'https://www.youtube.com/watch?v=fTPCKnZZ2dk'; // Asosiy video manzili

const smallVideos = [
  { cover: '/img1.jpg', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { cover: '/img2.jpg', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk', caption: 'Ut enim ad minim veniam, quis nostrud exercitation' },
  { cover: '/img3.jpg', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk', caption: 'Duis aute irure dolor in reprehenderit in voluptate' },
  { cover: '/img4.jpg', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { cover: '/img5.jpg', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk', caption: 'Ut enim ad minim veniam, quis nostrud exercitation' },
  { cover: '/img6.jpg', url: 'https://www.youtube.com/watch?v=fTPCKnZZ2dk', caption: 'Duis aute irure dolor in reprehenderit in voluptate' },
];

// Videoni ochish funksiyasi (Masalan, yangi oynada ochadi yoki Modal/Dialog ishlatadi)
const openVideo = (url) => {
  // Eng oddiy yechim: yangi oynada ochish
  window.open(url, '_blank'); 

  /* Agar siz Element Plus dialogini ishlatmoqchi bo'lsangiz:
  // dialog ochish logikasini shu yerga yozasiz, 
  // va dialog ichida <iframe :src="url" ...> ni joylashtirasiz.
  */
};

// ... (srcList va boshqa oldingi ref/const'laringizni saqlang) ...

</script>
