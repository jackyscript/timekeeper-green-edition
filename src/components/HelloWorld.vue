<script setup lang="ts">
defineProps<{
  title: string;
  type: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1>{{ title }}</h1>
    <h1 class="green">{{ type }}</h1>
    <h3>
      A sample timekeeper application using
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      How can I help you?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
