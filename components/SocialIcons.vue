<script lang="ts" setup>
const appConfig = useAppConfig()
const socials = appConfig.socials.filter((social) => {
  return social.title && social.url && social.icon
})
</script>

<template>
  <a
    v-for="social, index in socials"
    :key="index"
    :href="social.url" target="_blank" :title="social.title"
    :alt="social.title" :aria-label="social.title"
    class="text-gray hover:text-black mx-1"
  >
    <Icon v-if="social.icon" :name="social.icon" size="1.5em" />
  </a>
</template>
