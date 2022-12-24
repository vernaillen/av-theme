<script setup lang="ts">
// import * as dayjs from 'dayjs'

const props = defineProps({
  nrOfPosts: {
    type: Number,
    default: 1000,
    required: false,
  },
  excerpt: {
    type: Boolean,
    default: false,
    required: false,
  },
})

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent('news')
    .where({ isNews: true })
    .sort({ date: -1 })
    .limit(props.nrOfPosts)
    .find(),
)

const { t } = useI18n()

/* function formatDate(d: string) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
} */
const animateDurationClass = (index: number) => {
  return `animate-duration-${index * 1000}, animate-delay-${index * 100}`
}
</script>

<template>
  <div v-for="post, index in data" :key="index" class="w-full grid md:grid-cols-2 animate__animated animate__fadeIn" :class="animateDurationClass(index)">
    <div class="relative bg-transparent mb-10">
      <h3>
        <NuxtLink
          :aria-label="post.title"
          :to="post._path"
          class="font-bold text-primary dark:text-white text-xl sm:text-2xl block mb-4 hover:bg-opacity-80"
        >
          {{ post.title }}
          <div v-if="post.titleLine2">
            {{ post.titleLine2 }}
          </div>
        </NuxtLink>
      </h3>

      <ContentRenderer v-if="excerpt" :value="post" excerpt />
      <ContentRenderer v-if="!excerpt" :value="post" />
      <NuxtLink :to="post._path" :aria-label="post.title">
        <button class="text-black font-medium bg-white mt-5 mb-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp">
          {{ t('news.readmore') }}
        </button>
      </NuxtLink>
      <div class="flex">
        <div
          class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
        >
          <div class="w-full">
            <div class="text-xs text-body-color">
              {{ post.date }}
            </div>
          </div>
        </div>
        <div class="inline-block">
          <div class="text-xs text-body-color">
            {{ t('news.by') }} {{ post.author }}
          </div>
        </div>
      </div>
    </div>
    <div class="relative bg-transparent mb-10">
      <NuxtLink v-if="post.thumbnail" :to="post._path" :aria-label="post.title">
        <nuxt-img
          loading="lazy" :src="post.thumbnail" class="mb-4"
          :alt="`thumbnail ${post.title}`"
        />
      </NuxtLink>
      <NuxtLink v-if="post.thumb_video_webm || post.thumb_video_mp4" :to="post._path" :aria-label="post.title">
        <client-only>
          <video autoplay width="432" class="rounded-md mb-4">
            <source v-if="post.thumb_video_webm" :src="post.thumb_video_webm" type="video/webm">
            <source v-if="post.thumb_video_mp4" :src="post.thumb_video_mp4" type="video/m4v">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </client-only>
      </NuxtLink>
    </div>
  </div>
</template>
