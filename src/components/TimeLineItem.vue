<script setup lang="ts">
import { ref } from "vue";
import { TimeLinePost } from "../helpers/posts";

defineProps<{
  post: TimeLinePost;
}>();
</script>
<template>
  <a
    class="panel-block is-flex is-flex-direction-column is-align-items-flex-start"
  >
    <div>
      <a>{{ post.title }}</a>
    </div>
    <div>{{ post.created.toFormat("d MMM") }}</div>
  </a>
</template>
