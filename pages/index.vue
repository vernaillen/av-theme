<script setup lang="ts">
const { t } = useI18n()
const nrOfPosts = 1
</script>

<template>
  <div class="container max-w-screen-xl my-20">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <HighlightPages />
      </div>
    </div>
  </div>
  <div class="bg-primary bg-opacity-[35%] w-full">
    <div class="container max-w-screen-xl my-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mt-20 mb-16">
          <div class="prose m-auto">
            <article ref="content">
              <ContentDoc class="animate__animated animate__fadeIn animate__fasters" />
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container max-w-screen-xl my-20">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <h2>{{ t('news.titleOnHomepage') }}</h2>
        <BlogPostList :nr-of-posts="nrOfPosts" :excerpt="true" />
      </div>
    </div>
  </div>
  <InstagramPosts />
</template>
