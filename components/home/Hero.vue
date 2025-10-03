<script setup>
const props= defineProps(['title']);
</script>


<template>
  <section class="container text-white pt-25 pb-15 sm:py-30 md:py-40 lg:py-60 xl:py-70 2xl:py-80">
    <h1 class="xl:text-[90px] lg:text-[80px] md:text-[70px] sm:text-[50px] font-black max-w-[250px] sm:max-w-[560px] leading-none">
      East Can Solutions
    </h1>
  <p class="test-after">
       создаем форму успеха в каждой банке!
    </p>
  </section>
</template>
<style>

.test-after{
  position: relative;
  padding-left: 60px;
}

.test-after::after{
  position: absolute;
  content: "";
  top: 12px;
  left: 0;
  height: 3px;
  width: 50px;
  background-color: #fff;

}

@media (max-width:650px) {
  .test-after::after{
    width: 25px;
  }
}

@media (max-width:650px) {
  .test-after{
    padding-left: 35px;
  }
}
</style>