<template>
  <div class="galery-hero pt-35">
    <Breadcrumb
      :title="'  Галерея '"
      :subtitle="'Главная '"
      :route="'/galery'"
    />
  </div>



  <section class="py-15">
    <div class="container">
      <div>
        <el-tabs type="card" class="demo-tabs border-b-none">
          <el-tab-pane label="Фото">Фото</el-tab-pane>
          <el-tab-pane label="Видео">Видео</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </section>
</template>

<style >
.galery-hero {
  background-image: url("../public/galeryBg.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}


.demo-tabs > .el-tabs__content {
  padding: 62px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
} 

.el-tabs__item {
  font-size: 20px;
  border-radius: none;
  
}

.el-tabs__item.is-active {
  background-color: #146699;
  color: white;

}

.el-tabs--card>.el-tabs__header {
  border-bottom: none;
}
</style>

<script setup>

import { Calendar } from '@element-plus/icons-vue'
const items = [
  {
    label: "Фото",

    slot: "tab1",
  },
  {
    label: "Видео",

    slot: "tab2",
  },
];
</script>
