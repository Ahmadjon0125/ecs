<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "tailwindcss";

.container {
  width: 1340px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}

.fixed-position {
  position: fixed;
}

.navbar ul li {
  margin-left: 60px;
}
</style>
