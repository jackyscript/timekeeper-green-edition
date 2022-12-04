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
    <div class="timekeeper-entry" v-for="record in timeRecords" title="Click to edit this record">
      <div>{{ record.value.activityType }}</div>
      <div>{{ record.value.entryDate }}</div>
      <div>{{ record.value.beginTime }}</div>
      <div>{{ record.value.endTime }}</div>
      <div>{{ record.value.activityDescription }}</div>
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
