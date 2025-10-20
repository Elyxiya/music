<template>
  <div class="footer-box">
    <div class="song-info">
      <div class="album-art"></div>
      <div class="song-details">
        <div class="song-title">歌曲标题</div>
        <div class="artist-name">艺术家名称</div>
      </div>
    </div>
    <div class="control">
      <div class="player-control"></div>
      <div class="progress-bar"></div>
    </div>
    <div class="extra-info">
      <div class="volume-control"></div>
      <div class="playlist-control"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  .song-info {
    display: flex;
    align-items: center;
    .album-art {
      width: 3rem;
      height: 3rem;
      background-color: #ccc;
      margin-right: 1rem;
    }
    .song-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .song-title {
        font-size: 1rem;
        font-weight: bold;
      }
      .artist-name {
        font-size: 0.875rem;
        color: #bbb;
      }
    }
  }
  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
    .player-control {
      width: 10rem;
      height: 2rem;
      background-color: #444;
      margin-bottom: 0.5rem;
    }
    .progress-bar {
      width: 15rem;
      height: 0.5rem;
      background-color: #666;
    }
  }
  .extra-info {
    display: flex;
    align-items: center;
    .volume-control,
    .playlist-control {
      width: 2rem;
      height: 2rem;
      background-color: #444;
      margin-left: 1rem;
    }
  }
}
</style>
