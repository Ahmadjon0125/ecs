<template>
  <div class="galery-hero pt-35">
    <Breadcrumb
      :title="'Галерея '"
      :subtitle="'Главная '"
      :route="'/galery'"
    />
  </div>

  <section class="sm:py-15 py-5">
    <div class="container">
      <div class="">
        <el-tabs type="card" class="demo-tabs ">
          <el-tab-pane label="Фото">
            <h2 class="font-semibold uppercase text-[#146699] py-4">Фото</h2>

  




                 <el-carousel 
      ref="carouselRef" 
      :initial-index="activeIndex"
      arrow="always"
      :autoplay="false"
      @change="handleSlideChange"
      class="mb-4 max-w-[1280px] mx-auto"
    >
      <el-carousel-item 
        v-for="(item, index) in srcList" 
        :key="index"
        @click="openModal(index)" 
      >
        <img :src="item" alt="Galereya rasmi" class="carousel-image-content cursor-pointer">
      </el-carousel-item>
    </el-carousel>

    <!-- Thumbnail navigatsiya -->
    <div class="thumbnail-nav ">
      <div 
        v-for="(item, index) in srcList" 
        :key="index"
        class="thumbnail-item "
        :class="{ 'is-active ': index === activeIndex }"
        @click="changeSlide(index)"
      >
        <img :src="item" alt="Thumbnail" class="thumbnail-image  " />
      </div>
    </div>

    <!-- Modal qismi -->
    <div 
      v-if="isImageModalOpen" 
      class="fixed inset-0 z-200 flex items-center justify-center bg-black/90"
    >

    <div class="relative w-full max-w-[1380px] p-0 bg-transparent">

      <button 
        @click="isImageModalOpen = false" 
        class="absolute -top-15 right-0 text-white text-3xl font-bold hover:text-gray-300"
      >
        &times;
      </button>

      <div class="relative w-full max-w-[1380px]">
        <el-carousel 
          ref="modalCarouselRef" 
          :initial-index="modalActiveIndex"
          arrow="always"
          :autoplay="false"
        >
          <el-carousel-item 
            v-for="(item, index) in srcList" 
            :key="index"
          >
            <img :src="item" alt="Modal rasm" class="w-full h-full object-cover">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    </div>
                

          </el-tab-pane>
          <el-tab-pane label="Видео">
            <h2>Видео</h2>


              <div class="max-w-[1280px] mx-auto p-4">
    
    <div class="relative w-full aspect-video shadow-xl mb-8 rounded-lg overflow-hidden">
        
        <div 
            @click="isModalOpen = true" 
            class="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/40 transition">
            
            <svg class="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3l15 9-15 9V3z"/></svg>
            <p class="absolute bottom-4 left-4 text-white text-base max-w-sm">{{ activeVideo.posterText }}</p>
        </div>
        
        <iframe
            class="w-full h-full" 
            :src="`https://www.youtube.com/embed/${activeVideo.embedId}`"
            title="Video pleer"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 z-20">
        <div 
            v-for="video in videos" 
            :key="video.id" 
            @click="selectVideo(video)" 
            class="relative aspect-video cursor-pointer rounded-lg overflow-hidden border-2 transition mb-20 z-20"
            :class="{'border-blue-600 shadow-md': video.id === activeVideo.id, 'border-transparent': video.id !== activeVideo.id}"
        >
            <img 
                :src="`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`" 
                :alt="video.title"
                class="w-full h-full object-cover transition duration-300"
            >
             <svg class="absolute inset-0 m-auto w-8 h-8 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3l15 9-15 9V3z"/></svg>
            
            <p class="absolute top-92  z-200 bg-black left-2 text-white text-lg max-w-full truncate">{{ video.title }}</p>
        </div>
    </div>
    
    <div v-if="isModalOpen" 
         class="fixed inset-0 z-200 flex items-center justify-center bg-black/90"
         @click="isModalOpen = false" > 
      
        <div @click.stop class="relative w-11/12 max-w-5xl p-0 bg-transparent">
            <button @click="isModalOpen = false" class="absolute -top-10 right-0 text-white text-3xl font-bold z-50 hover:text-gray-300">
                &times;
            </button>
            <div class="relative w-full aspect-video">
                <iframe
                    class="w-full h-full" 
                    :src="`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1`"
                    :title="activeVideo.title"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
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
  background-image: url("/galeryBg.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width:640px) {
  .galery-hero {
  height: 30vh;

}
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
  margin-right: 30px; 
  
}

.el-tabs--card>.el-tabs__header .el-tabs__item {
  border: 2px solid rgba(20, 102, 153, 1);
  border-top: 3px solid rgba(20, 102, 153, 1);
 
}


.el-tabs--card>.el-tabs__header .el-tabs__item:first-child  {
  border-left: 2px solid rgba(20, 102, 153, 1);

}
 

.el-tabs__item.is-active {
  background-color: #146699;
  color: white;
}

.el-tabs--card > .el-tabs__header {
  border: none;
}

.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border: transparent;
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






/* 4. Carousel ichidagi standart indikatorlarni butunlay yashirish */
/* ::v-deep orqali kirish Element Plus stillariga kirishning keng tarqalgan usuli */
.el-carousel__indicators {
    display: none !important;
}

/* 5. Asosiy rasm balandligi uchun stil */
.el-carousel__container {
  height: 600px;
  
}

@media (max-width: 1000px) {
  .el-carousel__container {
  height: 400px;
  
}
} 

@media (max-width: 600px) {
  .el-carousel__container {
  height: 200px;
  
}
} 

@media (max-width: 350px) {
  .el-carousel__container {
  height: 100px;
  
}
} 

.carousel-image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 6. Thumbnail Navigatsiya stili */
.thumbnail-nav {
 
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 5px;
  /* width: 1320px; */
  /* El-tabs ichidagi standart paddingni hisobga olish uchun */
  /* padding: 0 62px;  */
}

.thumbnail-item {
  max-width: 180px; 
  max-height: 140px; 
  overflow: hidden;
  cursor: pointer;
  border-bottom: 3px solid transparent;
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

.thumbnail-item {
  cursor: pointer;
  position: relative;
  padding-bottom: 10px;
}

@media (max-width:600px) {
  .thumbnail-item {
    padding-bottom: 2px;
  }
}

.thumbnail-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background-color: transparent;
  transition: background-color 0.3s;
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


const modalCarouselRef = ref(null);


const modalActiveIndex = ref(0);



const openModal = (index) => {
  modalActiveIndex.value = index;  // qaysi rasm bosilgan bo‘lsa o‘shandan boshlaydi
  isImageModalOpen.value = true;
};






















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


const isImageModalOpen = ref(false);
const activeImage = ref(null);

const openImage = (img) => {
  activeImage.value = img;
  isImageModalOpen.value = true;
};






// 1. Video ma'lumotlari: Har bir video uchun noyob ID va sarlavha
const videos = ref([
    { id: 1, embedId: 'fTPCKnZZ2dk', title: 'Nuxt 3 — Course for Beginners', posterText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 2, embedId: 'rCT54d8sMWk', title: 'Video 2 Sarlavhasi', posterText: 'Ut enim ad minim veniam, quis nostrud' },
    { id: 3, embedId: '9dI_FENApz0', title: 'Video 3 Sarlavhasi', posterText: 'Duis aute irure dolor in reprehenderit' },
    { id: 4, embedId: 'NXTQbU7WmDk', title: 'Nuxt 3 — Course for Beginners', posterText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 5, embedId: 'RhZZ0whiuT8', title: 'Video 2 Sarlavhasi', posterText: 'Ut enim ad minim veniam, quis nostrud' },
    { id: 6, embedId: 'GBdO5myZNsQ', title: 'Video 3 Sarlavhasi', posterText: 'Duis aute irure dolor in reprehenderit' },
    // ... boshqa videolar
]);

// 2. Hozirda faol bo'lgan videoni saqlash (default birinchi video)
const activeVideo = ref(videos.value[0]);

// 3. Modal holati
const isModalOpen = ref(false);

// 4. Boshqa videoni tanlash funksiyasi
const selectVideo = (video) => {
    activeVideo.value = video;
};




</script>
