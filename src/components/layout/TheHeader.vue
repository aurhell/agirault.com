<script setup>
import TheThemeSwitcher from '@/components/layout/TheThemeSwitcher.vue'

const menuItems = [
  {
    name: 'Accueil',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  // {
  //   name: 'CV',
  //   url: '#cv',
  // },
]
</script>

<template>
  <div class="flex flex-row pt-4 pr-4 justify-end items-center">
    <router-link
      v-for="(menu, index) in menuItems"
      :key="`menu_${index}`"
      :to="menu.path"
      class="
        text-slate-700
        hover:text-slate-500
        hover:cursor-pointer
        dark:text-white dark:hover:text-slate-300
        hover:underline hover:underline-offset-4
        transition-all
        duration-600
        text-xl
        uppercase
        mx-2
      "
      :href="menu.url"
    >
      {{ menu.name }}
    </router-link>
    <TheThemeSwitcher class="ml-2" />
  </div>
</template>
