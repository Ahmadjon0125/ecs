<template>
  <section class="about-hero lg:pt-35 pt-25">
    <Breadcrumb :title="' О нас'" :subtitle="'Главная '" :route="'about'" />
  </section>
  <Factory :showButton="false" />
  <InfoCard :content="section1" />
  <InfoCard :content="section2" :reverse="true" />
</template>

<style scoped>
.about-hero {
  background-image: url("../public/aboutHero.png");
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
}


@media (max-width:1024px) {
  .about-hero {
  height: 35vh;

}
}

@media (max-width:768px) {
  .about-hero {
  height: 30vh;

}
}

@media (max-width:640px) {
  .about-hero {
  height: 24vh;

}
}
</style>

<script setup>
const section1 = {
  text1:
    "Производство планируется запустить в июне 2025 года с начальной мощностью одной линии 0,5 млрд банок в год и возможностью увеличения производительности до 2,2 млрд банок в год с вводом в эксплуатацию второй производственной линии. ",
  text2:
    "Также планируется запуск линии розлива прохладительных напитков в алюминиевые банки и ПЭТ с объемом производства до 651 млн штук в год.",
  text3:
    "Предприятие оснащено современным оборудованием из США и Европы, что обеспечит высокий уровень автоматизации и эффективности производства. Ожидается создание до 500 рабочих мест на обеих производственных участвках, что внесет значительный вклад в развитие местной экономики.",
  image: "about1.jpg",
};

const section2 = {
  text1:
    "Наряду с обеспечением внутреннего рынка высококачественной алюминиевой тарой, до 30% продукции планируется экспортировать в Россию, Казахстан и другие страны СНГ. ",
  text2:
    "East Can Solutions стремится установить новые стандарты качества и инноваций в производстве алюминиевых банок, способствуя развитию промышленного потенциала Узбекистана и укреплению его позиций на международном рынке.",
  text3:
    "",
  image: "about2.jpg",
};
</script>
