<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<template>
  <a
    v-for="social, index in appConfig.socials" :key="index"
    :href="social.url" target="_blank" :title="social.title"
    :alt="social.title" :aria-label="social.title"
    class="text-gray hover:text-black mx-2"
  >
    <Icon :name="social.icon" size="1.6em" />
  </a>
</template>

