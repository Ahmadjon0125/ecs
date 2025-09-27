<script setup>
const props= defineProps(['title']);
</script>


<template>
  <section class="container text-white py-80">
    <h1 class="text-[90px] font-black w-[560px] leading-none">
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
  padding-left: 70px;
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
</style>