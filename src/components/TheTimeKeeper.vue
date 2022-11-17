<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";

const entryDate = ref<HTMLInputElement>();
const beginTime = ref<HTMLInputElement>();
const endTime = ref<HTMLInputElement>();

let onMount = function (): void {
  const currentDate = new Date();

  let currentTime = currentDate.toISOString().substring(11, 16);

  type supportedTimeValue = string | Date;

  function isSupportedTimeValue(
    timeValue: supportedTimeValue
  ): timeValue is supportedTimeValue {
    return typeof timeValue === "string" || timeValue instanceof Date;
  }

  function setTime(
    timeRef: Ref<HTMLInputElement | undefined>,
    timeValue: string | Date
  ): void {
    if (typeof timeRef !== "undefined") {
      setupTimeElement(timeRef, timeValue);
    } else {
      console.error(
        "During time initialization an error occured: The given HTMLInputTimeElement is undefined"
      );
    }
  }

  function setTimeValue(
    timeElement: HTMLInputElement,
    timeValue: supportedTimeValue
  ): void {
    if (typeof timeValue === "string") {
      timeElement.value = timeValue;
    } else if (timeValue instanceof Date) {
      timeElement.valueAsDate = timeValue;
    } else {
      console.error(
        "During time initialization an error occured: timeValue has illegal type " +
          typeof timeValue
      );
    }
  }

  function setupTimeElement(
    timeRef: Ref<HTMLInputElement | undefined>,
    timeValue: supportedTimeValue
  ) {
    const timeElement = timeRef.value;
    if (timeElement && isSupportedTimeValue(timeValue)) {
      setTimeValue(timeElement, timeValue);
    }
  }

  setTime(entryDate, currentDate);
  setTime(beginTime, currentTime);
  setTime(endTime, currentTime);
};

onMounted(() => {
  onMount();
});
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
