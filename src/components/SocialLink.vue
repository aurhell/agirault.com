<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icon: {
    type: String,
    default: '',
  },
  originalColor: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <a :href="url">
      <Icon
        class="mx-2 h-8 w-8 text-slate-700 transition-all hover:-translate-y-1 hover:text-slate-500 dark:text-white dark:hover:text-slate-300"
        :icon="icon"
      />
    </a>
  </div>
</template>
