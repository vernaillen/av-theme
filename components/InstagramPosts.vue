<script setup lang="ts">
const appConfig = useAppConfig()
const tagembedId = appConfig.tagembed.id
</script>

<template>
  <div v-if="tagembedId" class="bg-primary w-full">
    <div class="container max-w-screen-xl mt-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8  mt-20 mb-10">
          <h2>Instagram</h2>
          <iframe
            :src="`https://widget.tagembed.com/${tagembedId}?view`" style=" width:100%;height:400px;overflow: auto;"
            frameborder="0" allowtransparency="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
