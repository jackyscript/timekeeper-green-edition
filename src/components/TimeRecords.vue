<script setup lang="ts">
defineProps(["timeRecords"])
</script>

<template>
  <h3>Summary:</h3>
  <div class="summary-table-header">
    <div>Type</div>
    <div>Entry date</div>
    <div>Start</div>
    <div>End</div>
    <div>Description</div>
  </div>
  <div class="summary-table">
    <div class="timekeeper-entry" v-for="(record, key) in timeRecords" title="Click to edit this record" @click="$emit('selectRecord', key)">
      <div>{{ record.activityType }}</div>
      <div>{{ record.entryDate }}</div>
      <div>{{ record.beginTime }}</div>
      <div>{{ record.endTime }}</div>
      <div>{{ record.activityDescription }}</div>
    </div>
  </div>
</template>

<style scoped>
.summary-table-header {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.summary-table-header div {
  font-weight: bold;
}

.timekeeper-entry:nth-child(odd) {
    background-color: gainsboro;
}

.timekeeper-entry {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.timekeeper-entry:hover {
  background-color: orange;
  cursor: pointer;
}
</style>
