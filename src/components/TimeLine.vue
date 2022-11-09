<script setup lang="ts">
import { DateTime } from "luxon";
import { ref, computed } from "vue";
import { thisMonth, thisWeek, TimeLinePost, today } from "../helpers/posts";
import TimeLineItem from "./TimeLineItem.vue";

const selectedPeriod = ref<Period>("Today");
const periods = ["Today", "This week", "This month"] as const;

const posts = computed<TimeLinePost[]>(() => {
  return [today, thisMonth, thisWeek]
    .map((post) => {
      return { ...post, created: DateTime.fromISO(post.created) };
    })
    .filter((post) => {
      if (selectedPeriod.value === "Today") {
        return post.created >= DateTime.now().minus({ day: 1 });
      }
      if (selectedPeriod.value === "This week") {
        return post.created >= DateTime.now().minus({ week: 1 });
      }
      if (selectedPeriod.value === "This month") {
        return post.created >= DateTime.now().minus({ month: 1 });
      }
    });
});
type Period = typeof periods[number];

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
    <TimeLineItem v-for="post of posts" :key="post.id" :post="post" />
  </nav>
</template>

<style scoped></style>
