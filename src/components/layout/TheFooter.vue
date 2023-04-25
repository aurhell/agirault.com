<script setup>
const socialLinks = [
  {
    icon: 'mdi-linkedin',
    originalColor: '#0e76a8',
    url: 'https://www.linkedin.com/in/a-girault/',
  },
  {
    icon: 'mdi-github',
    originalColor: '#171515',
    url: 'https://github.com/aurhell',
  },
  {
    icon: 'mdi-twitter',
    originalColor: '#1da1f2',
    url: 'https://twitter.com/aurhell_',
  },
  {
    icon: 'mdi-mail',
    url: 'mailto:contact@agirault.com',
  },
]
</script>

<template>
  <div class="flex flex-row items-end justify-center pb-4">
    <SocialLink
      v-for="(social, index) in socialLinks"
      :key="`social_${index}`"
      v-motion-slide-bottom
      :delay="1200 + index * 100"
      :icon="social.icon"
      :original-color="social.originalColor"
      :url="social.url"
    />
  </div>
</template>
