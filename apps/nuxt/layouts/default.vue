<template>
  <div>
    <NuxtLoadingIndicator />
    <TheLeftDrawer />
    <main class="flex flex-col">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({  
  key: (route) => route.fullPath,
});
</script>

<style> 
html, body {
  @apply bg-gray-900 text-gray-100;
}
</style>