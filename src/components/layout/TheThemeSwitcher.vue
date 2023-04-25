<script setup>
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'

const DARK = 'dark'
const LIGHT = 'light'
const THEME = 'theme'

const state = reactive({ theme: localStorage.getItem(THEME) })

function applyDark() {
  state.theme = DARK
  document.documentElement.classList.add(DARK)
  localStorage.setItem(THEME, DARK)
}

function applyLight() {
  state.theme = LIGHT
  document.documentElement.classList.remove(DARK)
  localStorage.setItem(THEME, LIGHT)
}

function switchTheme() {
  if (state.theme === DARK) {
    applyLight()
  }
  else {
    applyDark()
  }
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem(THEME) === DARK
  || (!(THEME in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  applyDark()
}
else {
  applyLight()
}
</script>

<template>
  <button type="button" @click="switchTheme()">
    <Icon v-if="state.theme === DARK" icon="carbon:light" class="h-7 w-7 text-sky-900 transition duration-300 hover:text-sky-700 dark:text-yellow-500 dark:hover:text-yellow-300" />
    <Icon
      v-else-if="state.theme === LIGHT"
      icon="bxs:moon"
      class="h-7 w-7 text-sky-900 transition duration-300 hover:text-sky-700 dark:text-yellow-500 dark:hover:text-yellow-300"
    />
  </button>
</template>
