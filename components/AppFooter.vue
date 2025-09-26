<template>
  <footer class="">
    <div class="container">
      <div class="footer_top flex items-center justify-between">
        <ul class="footer-list">
          <li>
            <NuxtLink>
              <div class="flex items-center">
                <Icon name="mdi:map-marker" size="32"  />
                <p>17a Temur Malik St., Tashkent city, Uzbekistan</p>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink>
              <div class="flex items-center">
                <Icon name="mdi:phone" size="32"  />
                <p>+998 93 505 4 505</p>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex items-center">
              <div class="flex">
                <Icon name="mdi-light:email" size="32"  />
                <p>info@can.uz</p>
              </div>
            </NuxtLink>
          </li>
          <li class="my-5">
            <NuxtLink to="/contact" class="border p-3">
              Обратный звонок
            </NuxtLink>
          </li>
        </ul>
        <div class="mr-25">
            <NuxtLink to="/">
                <NuxtImg src="/logo.svg" width="200px" height="105px" />
            </NuxtLink>
        </div >
          <ul class="fooNav flex flex-col items-center space-x-3" >
            <li><NuxtLink to="/about">О нас</NuxtLink></li>
            <li><NuxtLink to="/product1">Продукция</NuxtLink></li>
            <li><NuxtLink to="/galery">Галерея</NuxtLink></li>
            <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
            <li><NuxtLink to="/news">Новости и пресса</NuxtLink></li>
          </ul>
      </div>
      <div class="footer_bottom flex justify-between pt-5 border-t">
        <p>«East Can Solutions» All rights reserved</p>
        <p>© Copyright 2025 - Web developed by SOS Group</p>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #083957;
  color: white;
  padding: 40px 0;
}

.footer-list li {
margin-bottom: 30px;
}

.footer-list p {
    margin-left: 10px;
}

.fooNav li {
    margin-bottom: 20px;
}
</style>
