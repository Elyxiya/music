<template>
  <div class="home-page">
    <div class="header">
      <my-header />
    </div>
    <div class="content">
      <my-content />
    </div>
    <div class="footer">
      <my-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from './MyHeader.vue'
import MyContent from './MyContent.vue'
import MyFooter from './MyFoot.vue'
</script>
<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    flex: 0 0 5.2083rem;
    background-color: saddlebrown;
  }
  .content {
    flex: 1;
    overflow: auto;
    scroll-behavior: smooth;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .footer {
    flex: 0 0 6.25rem;
    background-color: rgba(204, 48, 48, 0.9);
  }
}
</style>
