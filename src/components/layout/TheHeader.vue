<script setup>
import TheThemeSwitcher from '@/components/layout/TheThemeSwitcher.vue'

const menuItems = [
  // {
  //   name: 'Blog',
  //   url: '#blog',
  // },
  // {
  //   name: 'CV',
  //   url: '#cv',
  // },
]
</script>

<template>
  <div class="flex flex-row pt-4 pr-4 justify-end items-center">
    <a
      v-for="(menu, index) in menuItems"
      :key="`menu_${index}`"
      class="
        text-slate-700
        hover:text-slate-500
        dark:text-white dark:hover:text-slate-300
        hover:underline hover:underline-offset-4
        transition-colors
        duration-600
        text-xl
        uppercase
        mx-2
      "
      :href="menu.url"
    >
      {{ menu.name }}
    </a>
    <TheThemeSwitcher />
  </div>
</template>
