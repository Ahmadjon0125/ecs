<template>
  <div class="news-hero pt-35">
    <Breadcrumb
      :title="' Новости и пресса'"
      :subtitle="'Главная '"
      :route="'/news'"
    />
  </div>

  <section>
    <div class="container">
      <p>{{ $route.params.slug }}</p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.news-hero {
  background-image: url("/aboutHero.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
