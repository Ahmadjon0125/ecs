<template>
    <section class="bg-[#F4F9FB] py-20">
        <div class="container">
            <h2 class="font-semibold uppercase sm:text-[50px] text-[25px] text-[#146699] mb-10">Оставьте заявку</h2>
            <form action="">
                <div class="grid sm:grid-cols-2 grid-cols-1">
                    <div class="flex flex-col mb-3">
                        <input class="py-6 sm:pl-10 pl-2 bg-white" type="text" placeholder="Ваше имя">
                        <input class="py-6 sm:pl-10 pl-2 bg-white my-3" type="text" placeholder="Телефонный номер">
                        <input class="py-6 sm:pl-10 pl-2 bg-white" type="text" placeholder="Email">
                    </div>
                    <textarea class="bg-white py-6 sm:pl-10 pl-2 sm:ml-5" name="" id="" cols="30" rows="8" placeholder="Комментарий"></textarea>
                </div>
                <div class="flex py-5" ><button class="ml-auto py-2 px-15 font-bold text-[#146699] border border-[#146699] hover:bg-sky-700 hover:text-white rounded cursor-pointer" type="submit">Отправить</button></div>
            </form>
        </div>
    </section>
</template>

<style>

input::placeholder {
    color: #323232;
    font-weight: 400;
    font-size: 16px;
}

textarea::placeholder {
    color: #323232;
    font-weight: 400;
    font-size: 16px;
}

</style>