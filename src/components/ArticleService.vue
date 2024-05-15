<template>
  <div>
    <h1>文章列表</h1>
    <article-card v-for="article in articles" :key="article.id" :article="article"></article-card>
  </div>
</template>

<script>
import ArticleCard from '@/components/Article.vue'
import mockdata from '@/data/articles.js'

export default {
  name: 'ArticleList',
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: [],
      userMockData : true
    }
  },
  mounted() {
    if(this.userMockData){
        this.articles = mockdata.articles
    }else{
        
      this.fetchArticles()
    }
  },
  methods: {
    async fetchArticles() {
      try {
         let response = await fetch('localhost/api/articles')
         this.articles = response.json()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
