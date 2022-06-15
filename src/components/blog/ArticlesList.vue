<script setup>
import articles from '@/articles.json'

console.log(articles)
</script>

<template>
  C'est la liste des articles: <br />
  <ul>
    <li v-for="article in articles" :key="`article_${article.slug}`">
      <router-link :to="`/blog/${article.slug}`">
        {{ article.title }}
      </router-link>
    </li>
  </ul>
</template>
