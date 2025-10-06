<template>
  <div class="news-hero lg:pt-35 pt-25">
    <Breadcrumb
      :title="' Новости и пресса'"
      :subtitle="'Главная '"
      :route="'/news'"
    />
  </div>

  <section>
    <div class="container">
      <div v-for="(item, index) in items" :key="index" class="lg:px-50 py-3">
        <div v-if="item.slug == $route.params.slug">
          <img :src="item.img" alt="" width="1100px" height="600px" />
          <h2 class="text-[#323232] font-bold sm:text-[30px] text-[20px] mb-4">
            {{ item.title }}
          </h2>
          <p class="flex mb-5 text-[#146699] font-semibold text-[18px]">
            <img
              src="/clock.png"
              width="22px"
              height="16px"
              alt=""
              class="mr-2 #323232"
            />{{ item.date }}
          </p>
          <p class="text-[#323232] sm:text-[18px] font-medium mb-2">
            {{ item.text }} {{ item.text }}{{ item.text }}{{ item.text }}
          </p>
          <p class="text-[#323232] sm:text-[18px] font-medium mb-12">
            {{ item.text }}{{ item.text }}{{ item.text }}{{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.news-hero {
  background-image: url("/newsBg.png");
  height: 42vh;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width:1024px) {
  .news-hero {
  max-height: 37vh;

}
}

@media (max-width:768px) {
  .news-hero {
  max-height: 32vh;

}
}

@media (max-width:640px) {
  .news-hero {
  max-height: 26vh;

}
}

</style>

<script setup>
const items = [
  {
    slug: "1",
    img: "/news1.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "24.08.2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "2",
    img: "/news2.png",
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    date: "20.08.2025",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    slug: "3",
    img: "/news3.png",
    title: "Duis aute irure dolor in reprehenderit in voluptate",
    date: "16.08.2025",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "4",
    img: "/news4.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "24.08.2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "5",
    img: "/news5.png",
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    date: "20.08.2025",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    slug: "6",
    img: "/news6.png",
    title: "Duis aute irure dolor in reprehenderit in voluptate",
    date: "16.08.2025",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
</script>
