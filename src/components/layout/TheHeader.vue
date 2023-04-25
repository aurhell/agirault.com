<script setup>
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
  <div class="flex flex-row items-center justify-end pr-4 pt-4">
    <a
      v-for="(menu, index) in menuItems"
      :key="`menu_${index}`"
      class="
        mx-2
        text-xl uppercase
        text-slate-700 transition-colors
        hover:text-slate-500
        hover:underline
        hover:underline-offset-4
        dark:text-white
        dark:hover:text-slate-300
      "
      :href="menu.url"
    >
      {{ menu.name }}
    </a>
    <TheThemeSwitcher />
  </div>
</template>
