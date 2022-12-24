<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <NuxtLoadingIndicator color="#707070" />
  <HeaderComponent />
  <HeaderImage />
  <NuxtPage />
  <FooterComponent />
  <easy-lightbox />
</template>
