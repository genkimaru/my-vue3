<script setup lang="ts">
import TabPage from './components/TabPage.vue'
import BoxElement from './components/BoxElement.vue'
import BaseLayout from './components/BaseLayout.vue'
import HomePage from './components/HomePage.vue'
import ArticleService from './components/ArticleService.vue'
import DebounceRef from './components/DebounceRef.vue'
</script>

<template>
  <!-- <HomePage></HomePage> -->

  <ArticleService></ArticleService>
  <DebounceRef></DebounceRef>
</template>
