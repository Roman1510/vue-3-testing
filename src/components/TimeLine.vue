<script setup lang="ts">
import { ref } from "vue";
import { thisMonth, thisWeek, today, Post } from "../helpers/posts";

const periods = ["Today", "This week", "This month"] as const;

const posts: Post[] = [today, thisMonth, thisWeek];

type Period = typeof periods[number];

const selectedPeriod = ref<Period>("Today");

const selectPeriod = (period: Period) => {
  console.log(period);
  selectedPeriod.value = period;
};
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <a
        v-for="(period, index) in periods"
        :key="index"
        :class="{ 'is-active': period === selectedPeriod }"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
    <a v-for="(post, index) in posts" :key="index" class="panel-block"
      >{{ post.title }}{{ post.created }}</a
    >
  </nav>
</template>

<style scoped></style>
