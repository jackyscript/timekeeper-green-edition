<script setup lang="ts">
import { ref } from "vue";
import { setupTime } from "./time.js";

const entryDate = ref<HTMLInputElement>();
const beginTime = ref<HTMLInputElement>();
const endTime = ref<HTMLInputElement>();

const currentDate = new Date();

let currentTime = currentDate.toISOString().substring(11, 16);

setupTime(entryDate, currentDate);
setupTime(beginTime, currentTime);
setupTime(endTime, currentTime);
</script>

<template>
  <h1>Welcome back, tell me about your day!</h1>
  <div class="timekeeper">
    <label for="activities">What did you do?</label>
    <select name="activities" id="activities">
      <option value="work">Work</option>
      <option value="vacation">Vacation</option>
      <option value="recovery">Recovery</option>
    </select>

    <label for="current-day">On which day:</label>
    <input type="date" id="current-day" name="timekeeper-day" ref="entryDate" />

    <label for="start-time">When did you start?</label>
    <input
      type="time"
      id="start-time"
      name="timekeeper-start"
      ref="beginTime"
    />

    <label for="end-time">When did you finish?</label>
    <input type="time" id="end-time" name="timekeeper-end" ref="endTime" />

    <label for="notes">Tell me more about your activity:</label>
    <textarea
      id="notes"
      name="notes-text"
      rows="20"
      placeholder="Learned something new, did some exercise, read a chapter in a new book, cooked my favourite meal..."
      maxlength="1000"
    ></textarea>
  </div>
</template>

<style scoped>
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
