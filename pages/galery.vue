<template>
  <div class="galery-hero pt-35">
    <Breadcrumb :title="'  Галерея '" :subtitle="'Главная '" :route="'/galery'" />
  </div>

<section>
  <div class="container">
    <div class="p-8">
      <UTabs :items="items" variant="pill" class="w-full flex gap-13" >

        <template #tab1  class="mx-3">
          <UCard  class="mx-3">
            <p class="text-lg font-semibold ">Rasm</p>
          </UCard>
        </template>
  
        <template #tab2>
          <UCard>
            <p class="text-lg font-semibold">Video</p>
          </UCard>
        </template>
      
      </UTabs>
    </div>
  </div>
</section>

</template>

<style scoped>
.galery-hero {
  background-image: url("../public/galeryBg.png");
  height: 50vh;
  background-repeat: no-repeat;
    background-size: cover;

}
</style>

<script setup>

const items = [
  {
    label: 'Фото',
   
    slot: 'tab1' 
  }, 
  {
    label: 'Видео',
   
    slot: 'tab2'
  },
];
</script>