<script setup>
import TheLayout from '@/components/layout/TheLayout.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ThePresentation from '@/components/ThePresentation.vue'
</script>

<template>
  <TheLayout>
    <div class="flex flex-col h-screen">
      <TheHeader />
      <ThePresentation />
      <TheFooter />
    </div>
  </TheLayout>
</template>
