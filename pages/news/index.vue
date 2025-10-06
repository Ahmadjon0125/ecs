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
      <News :content="content1" />
      <News :content="content2" />
      <News :content="content3" />
      <News :content="content4" />
      <News :content="content5" />
      <News :content="content6" />
    </div>
  </section>
</template>

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
const content1 = {
  slug: "1",
  img: "/news1.png",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  date: "24.08.2025",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

const content2 =  {
    slug: "2",
    img: "/news2.png",
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    date: "20.08.2025",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

const content3 =  {
    slug: "3",
    img: "/news3.png",
    title: "Duis aute irure dolor in reprehenderit in voluptate",
    date: "16.08.2025",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

const content4 = {
    slug: "4",
    img: "/news4.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "24.08.2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

const content5 =  {
    slug: "5",
    img: "/news5.png",
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    date: "20.08.2025",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

const content6 =  {
    slug: "6",
    img: "/news6.png",
    title: "Duis aute irure dolor in reprehenderit in voluptate",
    date: "16.08.2025",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
</script>
