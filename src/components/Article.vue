<template>
  <div class="article-card">
    <h2>{{ article.title }}</h2>
    <p>作者: {{ article.author }}</p>
    <p>发布日期: {{ article.date }}</p>
    <p>评论数: {{ article.comment }}</p>
    <p>点赞数: {{ article.likes }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
