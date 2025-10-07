<template>
  <section class="about-hero lg:pt-35 pt-25">
    <Breadcrumb
      :title="' Алюминиевые банки'"
      :subtitle="'Главная '"
      :route="'/product1'"
    />
  </section>
  <!--          ---------------------------         -->
  <section>
    <div class="container">
      <ul class="flex flex-wrap  text-center py-20 mx-auto xl:justify-between justify-around sm:gap-5 gap-3">
        <li class="flex items-center sm:items-end flex-col sm:flex-row max-w-[420px] my-10">
          <img src="../public/banka.png" width="120px" height="297px" alt="" />
          <div class="ml-5 mt-5">
            <h2 class="text-[#146699] font-semibold text-[20px] uppercase">
              Банка 1
            </h2>
            <p class="py-3 font-semibold text-[20px] text-[#323232]">450 мл</p>
            <p class="font-medium text-[#323232]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>
        <li class="flex items-center sm:items-end flex-col sm:flex-row max-w-[420px] my-10">
          <img src="../public/banka.png" width="120px" height="287px" alt="" />
          <div class="ml-5 mt-5">
            <h2 class="text-[#146699] font-semibold text-[20px] uppercase">
              Банка 2
            </h2>
            <p class="py-3 font-semibold text-[20px] text-[#323232]">330 мл</p>
            <p class="font-medium text-[#323232]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </li>
        <li class="flex items-center sm:items-end flex-col sm:flex-row max-w-[420px] xl:mx-auto my-10">
          <img src="../public/banka.png" width="120px" height="277px" alt="" />
          <div class="ml-5 mt-5">
            <h2 class="text-[#146699] font-semibold text-[20px] uppercase">
              Банка 3
            </h2>
            <p class="py-3 font-semibold text-[20px] text-[#323232]">250 мл</p>
            <p class="font-medium text-[#323232]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--     ----------------------------    -->
  <section class="bg-[#F4F9FB] py-25">
    <div class="container">
      <h2 class="sm:font-semibold font-bold uppercase sm:text-[50px] text-[17px] text-[#146699]">
        преимущества банок
      </h2>
      <div class="my-5 grid sm:grid-cols-2 grid-cols-1 gap-8">
        <ProductCard :content="card1" />
        <ProductCard :content="card2" />
        <ProductCard :content="card3" />
        <ProductCard :content="card4" />
        <ProductCard :content="card5" />
        <ProductCard :content="card6" />
      </div>
    </div>
  </section>

  <!-- ------------------------ -->

  <section>
    <div class="container">
      <div class="py-15">
        <p class="font-medium text-[#323232] text-[18px]">
          От общей картины до крошечных движущихся частей — мы относимся к
          каждому аспекту упаковки вашего напитка с высочайшим вниманием к
          деталям. Понимание и планирование полного жизненного цикла являются
          обязательными, когда вы производите более 2 миллиардов
          перерабатываемых банок для напитков в год.
        </p>
        <p class="my-4 font-medium text-[#323232] text-[18px]">
          Будь то газированные безалкогольные напитки, вода, соковые коктейли
          или что-то еще, наша компания установила высокую планку для визуально
          привлекательной и привлекательной упаковки. Наши банки, доступные в
          двух размерах, являются идеальной основой для вашего бренда как в
          регионе Центральной Азии, так и в дальних регионах.
        </p>
        <p class="font-medium text-[#323232] text-[18px]">
          Мечта дизайнера: алюминиевые банки для напитков предлагают <span class="font-bold"
          >360 градусов</span>  реальной площади для брендинга. В результате
          получается настоящий символ бренда, который производит неизгладимое
          впечатление на потребителей. Добавьте к этому новые производственные
          функции, такие как индикаторы температуры, различные типы внешних
          покрытий и <span class="font-bold"> HD-печать</span>, и вы получите максимальную инновацию в области
          контейнеров для напитков с широкими возможностями персонализации
          вашего бренда.
        </p>
      </div>
    </div>
  </section>
  <Form />
</template>

<style scoped>
.about-hero {
  background-image: url("../public/product1Bg.png");
  height: 42vh;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width:1024px) {
  .about-hero {
  max-height: 37vh;

}
}

@media (max-width:768px) {
  .about-hero {
  max-height: 35vh;

}
}

@media (max-width:640px) {
  .about-hero {
  max-height: 30vh;

}
}
</style>

<script setup>
const card1 = {
  title: "100% перерабатываемый материал",
  text: "Алюминиевая банка полностью перерабатывается бесконечное количество раз без потери качества. Это делает ее одной из самых экологически устойчивых упаковок в мире.",
  img: "../icon1.png",
};

const card2 = {
  title: "Максимальная защита продукта",
  text: "Алюминиевые банки надежно защищают напитки от света, кислорода и влаги, сохраняя их свежесть, вкус и аромат дольше, чем другие виды упаковки.",
  img: "../icon2.png",
};

const card3 = {
  title: "Энергоэффективность производства",
  text: "Производство алюминиевых банок с переработанного сырья требует на 95% меньше энергии, чем изготовление новых, что значительно снижает углеродный след.",
  img: "../icon3.png",
};

const card4 = {
  title: "Легкость и удобство",
  text: "Банки легкие, компактные и удобны в транспортировке, что снижает затраты на логистику и делает их удобными для потребителей в любом месте.",
  img: "../icon4.png",
};

const card5 = {
  title: "Яркий и привлекательный дизайн",
  text: "Гладкая поверхность банки позволяет наносить высококачественную печать, делая упаковку эффектной и запоминающейся для покупателей.",
  img: "../icon5.png",
};

const card6 = {
  title: "Быстрое охлаждение",
  text: "Алюминиевые банки охлаждаются быстрее, чем стекло и пластик, обеспечивая приятную температуру напитка в кратчайшие сроки, а также не пропускают солнечные лучи.",
  img: "../icon6.png",
};
</script>
