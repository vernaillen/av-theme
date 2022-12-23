<template>
  <div class="container max-w-screen-xl my-20">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <HighlightPages />
      </div>
    </div>
  </div>
  <div class="bg-primary w-full">
    <div class="container max-w-screen-xl my-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mt-20 mb-10">
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
        <h2>News / Archive</h2>
      </div>
    </div>
  </div>
  <div class="bg-primary w-full">
    <div class="container max-w-screen-xl mt-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8  mt-20 mb-10">
          <InstagramPosts />
        </div>
      </div>
    </div>
  </div>
</template>
