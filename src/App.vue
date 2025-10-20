<script setup lang="ts">
import MyLayout from './pages/MyLayout.vue'
</script>

<template>
  <div class="container">
    <my-layout />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // background-image: url(./assets/img/bg-3.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // ::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.1);
  //   z-index: 1;
  // }
}
</style>
