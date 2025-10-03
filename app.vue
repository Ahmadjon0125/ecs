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
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.fixed-position {
  position: fixed;
}

.navbar ul li {
  margin-left: 60px;
}
</style>
