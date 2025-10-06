<template>
  <div class="contact-hero md:pt-35 pt-25">
    <Breadcrumb
      :title="' Контакты'"
      :subtitle="'Главная '"
      route="/contact"
    />
  </div>
  <section>
    <div class="container">
      <ul class="grid sm:grid-cols-3 grid-cols-1 sm:gap-20 lg:gap-30 gap-10 text-center py-10 sm:py-20">
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

  <section>
    <div class="container">
      <ul class="py-35 flex cards">
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam earum error quis provident dicta a ratione maxime in quasi? Optio beatae ex excepturi dolores aperiam explicabo veritatis ipsam quasi asperiores modi enim necessitatibus atque odio vel voluptatum, ad hic sint commodi tempore nesciunt nulla! Similique accusamus sit cumque fugiat doloremque!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae reprehenderit iste nisi, nemo odit accusamus facilis culpa accusantium aut maiores sunt eius deleniti obcaecati voluptas nulla dolore inventore aliquid rerum quam aliquam quo porro ipsam ipsum. Sequi est harum accusamus fuga delectus aspernatur tempore porro quam, rem a aperiam fugit libero quasi corrupti quas ad recusandae tenetur? Tempore ea aliquid asperiores quisquam suscipit porro, nulla unde a consequuntur, aperiam debitis rem ipsam exercitationem reprehenderit laudantium perspiciatis? Laudantium libero modi ipsam magnam! Consectetur mollitia at natus ab possimus nihil dicta commodi, veniam cum nobis non sint vero quo nostrum magni.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet inventore eos exercitationem, deserunt similique aperiam quod fuga quam dolore aliquam non quae nulla nam sit in voluptas perferendis nemo saepe molestiae maxime sunt. Praesentium dolorum reiciendis hic possimus itaque, quia recusandae. Ullam nostrum distinctio qui ratione laboriosam modi repudiandae!</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact-hero {
  background-image: url("../public/contactBg.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width:1024px) {
  .about-hero {
  max-height: 35vh;

}
}

@media (max-width:768px) {
  .about-hero {
  max-height: 30vh;

}
}

@media (max-width:640px) {
  .about-hero {
  max-height: 24vh;

}
} 




.cards li  {
  border: 2px solid black;
  margin: 5px;
  padding: 10px;
  max-width: 400px;
  height: 400px;
  font-size: 18px;
}
</style>

<script setup>

</script>
