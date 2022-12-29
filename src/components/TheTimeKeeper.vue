<script setup lang="ts">
import { ref, type Ref } from "vue";
import TimeRecords from "./TimeRecords.vue";
import { v4 as uuid } from "uuid";

const defaultTitle = "Welcome back, tell me about your day!";
const editTitle = "Forgot something?";
let formTitle = ref("");
formTitle.value = defaultTitle;

let entryDate = ref("");
let beginTime = ref("");
let endTime = ref("");
let activityType = ref("");
let activityDescription = ref("");

let activeRecord: string = "";

const currentDate: Date = new Date();
const currentDay: string = currentDate.toISOString().substring(0, 10);
const currentTime: string = currentDate.toISOString().substring(11, 16);

entryDate.value = currentDay;
beginTime.value = currentTime;
endTime.value = currentTime;

const timeRecords: Ref = ref({});

function setTimeRecord() {
  let id: string = activeRecord === "" ? uuid() : activeRecord;

  let currentRecord = {
    entryDate: entryDate.value,
    beginTime: beginTime.value,
    endTime: endTime.value,
    activityType: activityType.value,
    activityDescription: activityDescription.value,
  };

  timeRecords.value[id] = currentRecord;
  activeRecord = "";

  formTitle.value = defaultTitle;
}

function selectRecord(key: string) {
  activeRecord = key;

  (function setRecordToForm(timeRecord: any) {
    beginTime.value = timeRecord.beginTime;
    endTime.value = timeRecord.endTime;
    entryDate.value = timeRecord.entryDate;
    activityType.value = timeRecord.activityType;
    activityDescription.value = timeRecord.activityDescription;
  })(timeRecords.value[activeRecord]);

  formTitle.value = editTitle;
}
</script>

<template>
  <div class="flex-container">
    <div class="flex-item">
      <button title="Save this!" @click="setTimeRecord">💾</button>
    </div>
  </div>
  <h1>{{ formTitle }}</h1>
  <div class="timekeeper">
    <label for="activities">What did you do?</label>
    <select name="activities" id="activities" v-model="activityType">
      <option>Work</option>
      <option>Vacation</option>
      <option>Recovery</option>
    </select>

    <label for="current-day">On which day:</label>
    <input
      type="date"
      id="current-day"
      name="timekeeper-day"
      v-model="entryDate"
    />

    <label for="start-time">When did you start?</label>
    <input
      type="time"
      id="start-time"
      name="timekeeper-start"
      v-model="beginTime"
    />

    <label for="end-time">When did you finish?</label>
    <input type="time" id="end-time" name="timekeeper-end" v-model="endTime" />

    <label for="notes">Tell me more about your activity:</label>
    <textarea
      id="notes"
      name="notes-text"
      rows="10"
      placeholder="Learned something new, did some exercise, read a chapter in a new book, cooked my favourite meal..."
      maxlength="1000"
      v-model="activityDescription"
    ></textarea>
  </div>

  <TimeRecords :timeRecords="timeRecords" @select-record="selectRecord" />
</template>

<style scoped>
.timekeeper-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 300px;
}

.flex-container {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-content: stretch;
  align-items: flex-start;
}

.flex-item:nth-child(1) {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

.timekeeper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 0px;
  row-gap: 1vmin;
}

label {
  margin: 0px;
}

textarea:not([cols]) {
  width: 100%;
}

textarea {
  margin-right: auto;
  resize: none;
}
</style>
