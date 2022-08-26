<template>
  <div class="flex flex-col flex-grow justify-center items-center">
    <div class="relative">
      <img
        class="block w-40 h-40 object-cover rounded-full mb-4"
        src="/images/AG.jpg"
        alt="Ma tronche de cake"
      />
      <img
        className="block w-40 h-40 object-cover rounded-full mb-4 absolute top-0 left-0 hover:opacity-25 transition-opacity duration-1000 ease-out"
        src="/images/AG-blackandwhite.png"
        alt="Ma tronche de cake"
      />
      <!-- <img
        src="/images/AG-blackandwhite.png"
        class="block w-40 h-40 object-cover rounded-full mb-4"
        alt="Ma tronche de cake"
      /> -->
    </div>
    <div>
      <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">
        <span
          class="hidden dark:inline-block bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400"
          >Aurélien Girault</span
        >
        <span class="inlineblock dark:hidden text-slate-600">Aurélien</span>
        {{ ' ' }}
        <span class="inline-block dark:hidden text-indigo-600">Girault</span>
      </h1>
      <h2>👨‍💻 Développeur front-end</h2>
      <h3>📍 Rennes</h3>
    </div>
  </div>
</template>
