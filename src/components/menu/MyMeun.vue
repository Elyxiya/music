<template>
  <div class="menus">
    <div class="menu-main">
      <div class="title">主导航</div>
      <router-link to="/home" class="menu-item">首页</router-link>
      <router-link to="/found" class="menu-item">发现</router-link>
      <router-link to="/star" class="menu-item">我的收藏</router-link>
      <router-link to="/history" class="menu-item">播放历史</router-link>
    </div>
    <div class="menu-side">
      <div class="title">我的歌单</div>
      <div class="menu-item">喜欢的音乐</div>
      <div class="menu-item">运动健身</div>
      <div class="menu-item">休闲放松</div>
      <div class="menu-item">经典老歌</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.menus {
  flex: 0 0 15rem;
  background-color: #53b413;
  border-right: 1px solid #ddd;
  .menu-main,
  .menu-side {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .title {
      font-size: 0.8rem;
      // font-weight: bold;
      margin-bottom: 1rem;
      color: #d2d1d1;
    }
    .menu-item {
      padding: 0.7rem 0.5rem;
      border-radius: 0.3rem;
      cursor: pointer;
      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
}
</style>
