<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

useSeoMeta({
  title: post.value.seo.title,
  ogTitle: post.value.seo.title,
  description: post.value.seo.description,
  ogDescription: post.value.seo.description,
});
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer :value="post" />
</template>
