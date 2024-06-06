<script setup lang="ts">
import TabPage from './components/TabPage.vue'
import BoxElement from './components/BoxElement.vue'
import BaseLayout from './components/BaseLayout.vue'
import HomePage from './components/HomePage.vue'
import ArticleService from './components/ArticleService.vue'
import DebounceRef from './components/DebounceRef.vue'
import XScroll from './components/XScroll.vue'
import SlideIn from './components/SlideIn.vue'
</script>

<template>
  <!-- <HomePage></HomePage> -->
  <!-- <ArticleService></ArticleService>
  <DebounceRef></DebounceRef> -->

  <x-scroll>
    <div class="flex flex-row h-screen">
      <div class="w-full h-full"><img src="https://picsum.photos/1200?random=1" /></div>
      <div class="w-full h-full"><img src="https://picsum.photos/1200?random=2" /></div>
      <div class="w-full h-full"><img src="https://picsum.photos/1200?random=3" /></div>
      <div class="w-full h-full"><img src="https://picsum.photos/1200?random=4" /></div>
      <div class="w-full h-full"><img src="https://picsum.photos/1200?random=5" /></div>
    </div>
  </x-scroll>
</template>

<style scoped></style>
