<template>
  <div class="header-box">
    <div class="logo">
      <span class="colorful-text">音乐播放器</span>
    </div>
    <div class="tool">
      <div class="search">
        <input type="text" placeholder="搜索音乐、歌词、歌手" />
      </div>
      <div class="icons">
        <i class="iconfont icon-gengduo"></i>
        <i class="iconfont icon-xiaoxi"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="user">
        <i class="iconfont icon-yonghu"></i>
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: #1d283a;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    .colorful-text {
      /* 设置背景渐变色，这里是从蓝色到粉色的水平渐变 */
      background: linear-gradient(90deg, #6699ff, #ff66b3);
      /* 让背景只裁剪到文字区域 */
      -webkit-background-clip: text;
      background-clip: text;
      /* 文字颜色设为透明，这样背景渐变就能透过文字显示 */
      -webkit-text-fill-color: transparent;
    }
  }
  .tool {
    display: flex;
    align-items: center;
    .search {
      input {
        width: 15rem;
        height: 2rem;
        border-radius: 1rem;
        border: none;
        padding: 0 1rem;
        box-sizing: border-box;
        font-size: 1rem;
        outline: none;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      margin: 0 1rem;
      i {
        font-size: 1.5rem;
        color: #fff;
        margin: 0 0.5rem;
        cursor: pointer;
      }
    }
    .user {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      i {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
