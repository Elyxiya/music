<template>
  <div>
    <svg :style="{ width: width, height: height }">
      <use :href="prefix + name" :fill="color" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  //href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  //svg矢量图的名字
  name: {
    type: String,
    required: true,
  },
  //svg图标的颜色
  color: {
    type: String,
    default: '',
  },
  //svg宽度
  width: {
    type: String,
    default: '16px',
  },
  //svg高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style scoped></style>
