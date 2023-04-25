<template>
  <div class="flex flex-grow flex-col items-center justify-center">
    <div
      v-motion
      class="relative"
      :initial="{ opacity: 0, y: 100, scale: 2 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="300"
    >
      <img
        class="mb-4 block h-40 w-40 rounded-full object-cover md:h-96 md:w-96"
        src="/images/face3.webp"
        alt="Ma tronche de cake"
      >
    </div>
    <div>
      <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">
        <span
          class="hidden bg-gradient-to-l from-blue-300 to-green-400 bg-clip-text text-transparent dark:inline-block"
        >Aurélien Girault</span>
        <span class="inline-block text-slate-600 dark:hidden">Aurélien</span>
        {{ ' ' }}
        <span class="inline-block text-indigo-600 dark:hidden">Girault</span>
      </h1>
      <h2>👨‍💻 Développeur front-end</h2>
      <h3>📍 Rennes</h3>
    </div>
  </div>
</template>
