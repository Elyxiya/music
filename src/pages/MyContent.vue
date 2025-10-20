<template>
  <div class="content-box">
    <my-menu />
    <div class="main-content">
      <!-- 这里是主要内容区域 -->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyMenu from '@/components/menu/MyMeun.vue'
</script>
<style scoped lang="scss">
.content-box {
  display: flex;
  width: 100%;
  height: 100%;

  .main-content {
    flex: 1;
    padding: 1rem;
    background-color: #fff;
    overflow-y: auto;
  }
}
</style>
