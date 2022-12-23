<script setup lang="ts">
const { page } = useContent()
const url = computed(() => {
  if (page.value && page.value.image)
    return page.value.image.src
  else return 'header-imgs/header.png'
})
</script>

<template>
  <div class="bg-primary h-[280px] xl:h-[350px] w-full">
    <NuxtImg
      :src="url"
      preload
      format="webp"
      height="350"
      width="100vw"
      fit="cover"
      style="object-fit: cover;"
      class="h-[280px] xl:h-[350px] w-full animate__animated animate__fadeIn animate__fast"
    />
  </div>
</template>
