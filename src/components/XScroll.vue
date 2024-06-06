<template>
  <div v-resize="handleResize" class="w-screen h-screen">
    <div class="parents">
      <div class="child">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

let size = reactive({ w: 0, h: 0 })

function handleResize(curSize) {
  console.log(`宽度: ${curSize.width}, 高度: ${curSize.height}`)
  size.w = curSize.width
  size.h = curSize.height
}
</script>

<style scoped>
.child {
  position: absolute;
  width: var(--w);
  height: var(--h);
  transform: translateX(600px) rotate(90deg);
  transform-origin: left top;
}

.parents {
  --h: calc(v-bind(size.h) * 1px);
  --w: calc(v-bind(size.w) * 1px);
  width: var(--h);
  height: var(--w);
  overflow: auto;
  position: relative;
  transform-origin: right top;
  transform: rotate(-90deg) translateY(-600px);
}
</style>
