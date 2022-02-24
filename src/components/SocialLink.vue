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
        class="h-8 w-8 mx-2 text-slate-700 hover:text-slate-500 dark:text-white dark:hover:text-slate-300 hover:h-10 hover:w-10 transition-all duration-600"
        :icon="icon"
      />
    </a>
  </div>
</template>
