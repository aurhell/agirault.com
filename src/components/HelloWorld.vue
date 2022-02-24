<script setup>
// import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'Hello world !',
  },
})

// let count = ref(0)

// function increment() {
//   count.value++
// }
</script>

<template>
  <div class="flex flex-column justify-center">
    <div class="flex">
      <h1 class="text-3xl font-bold underline">{{ msg }}</h1>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
