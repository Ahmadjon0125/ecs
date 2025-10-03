<template>
  <div class="contact-hero pt-35">
    <Breadcrumb
      :title="' Контакты'"
      :subtitle="'Главная '"
      route="/contact"
    />
  </div>
  <section>
    <div class="container">
      <ul class="grid sm:grid-cols-3 grid-cols-1 sm:gap-20 lg:gap-30 gap-10 text-center py-20">
        <li>
          <h2 class="text-[#146699] font-semibold text-[16px] uppercase">
            Адрес
          </h2>
          <p class="medium text-[20px]">
            17a Temur Malik St., Tashkent city, Uzbekistan
          </p>
        </li>
        <li>
          <h2 class="text-[#146699] font-semibold text-[16px] uppercase">
            Телефон
          </h2>
          <p class="medium text-[20px]">+998 93 505 4 505</p>
        </li>
        <li>
          <h2 class="text-[#146699] font-semibold text-[16px] uppercase">
            Email
          </h2>
          <p class="medium text-[20px]">info@can.uz</p>
        </li>
      </ul>
    </div>
  </section>

  <Form />
  <section class="w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23958.160987789317!2d69.3950266!3d41.357350000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1758787768332!5m2!1sen!2s"
      width="100%"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="sm:h-100 md:h-150"
    ></iframe>
  </section>
</template>

<style scoped>
.contact-hero {
  background-image: url("../public/contactBg.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width:640px) {
  .contact-hero {
  height: 30vh;

}
}
</style>

<script setup>

</script>
