<script setup lang="ts">
defineProps(["timeRecords"])
</script>

<template>
  <h3>Summary:</h3>
  <div class="summaryTableHeader">
    <div>Type</div>
    <div>Entry date</div>
    <div>Start</div>
    <div>End</div>
    <div>Description</div>
  </div>
  <div class="summaryTable" v-for="record in timeRecords">
    <div>{{ record.value.activityType }}</div>
    <div>{{ record.value.entryDate }}</div>
    <div>{{ record.value.beginTime }}</div>
    <div>{{ record.value.endTime }}</div>
    <div>{{ record.value.activityDescription }}</div>
  </div>
</template>

<style scoped>
.summaryTableHeader {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.summaryTableHeader div{
  font-weight: bold;
}

.summaryTable {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
