<template>
  <footer class="">
    <div class="container">
      <div class="footer_top flex flex-col sm:flex-row  sm:justify-between items-center text-start  sm:text-start">
        <ul class="footer-list items-center text-start sm:items-start sm:text-start sm:max-w-full flex flex-col">
          <li >
            <NuxtLink>
              <div class="flex items-center">
                <img src="/location.png" width="18px" height="18px" alt="" />
                <p class="max-w-[234px] md:w-full">17a Temur Malik St., Tashkent city, Uzbekistan</p>
              </div>
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink>
              <div class="flex items-center">
                <img src="/call.png" width="18px" height="18px" alt="" />
                <p>+998 93 505 4 505</p>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex items-center">
              <div class="flex items-center">
                <img src="/mail.png" class="w-max h-max" alt="" />
                <p>info@can.uz</p>
              </div>
            </NuxtLink>
          </li>
          <li class="my-5 ml-5 sm:ml-0 ">
            <NuxtLink to="/contact" class="sm:border border-b sm:p-3 p-1 ">
              Обратный звонок
            </NuxtLink>
          </li>
        </ul>
        <div class="sm:mr-25 my-15 sm:my-0">
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" width="150px" height="105px"  class="md:w-[200px] sm:ml-2  " />
          </NuxtLink>
        </div>
        <ul class="fooNav flex flex-col lg:items-center text-center sm:text-start lg:space-x-3">
          <li><NuxtLink to="/about">О нас</NuxtLink></li>
          <li><NuxtLink to="/product1">Продукция</NuxtLink></li>
          <li><NuxtLink to="/galery">Галерея</NuxtLink></li>
          <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
          <li><NuxtLink to="/news">Новости и пресса</NuxtLink></li>
        </ul>
      </div>
      <div class="footer_bottom flex flex-col text-center md:text-start md:flex-row justify-between pt-5 border-t">
        <p class="mb-3">«East Can Solutions» All rights reserved</p>
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



@media (max-width: 640px) {
  .footer-list li {
  margin-bottom: 15px;
}


}

.footer-list p {
  margin-left: 10px;
}

.fooNav li {
  margin-bottom: 18px;
  border-bottom: 2px solid transparent ;
}

/* .fooNav li:hover {
    border-bottom: 2px solid white;
  } */


@media (max-width: 640px) {
  .fooNav li {
    margin-bottom: 10px;
  }
  
}

.footer_top {
  vertical-align: middle;
  align-items: center;
}
</style>
