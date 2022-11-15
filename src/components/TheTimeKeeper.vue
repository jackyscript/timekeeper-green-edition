<script setup lang="ts"></script>

<template>
  <div class="timekeeper">
    <h1>Welcome back, tell me about your day!</h1>

    <label for="activities">What did you do?</label>
    <select name="activities" id="activities">
      <option value="work">Work</option>
      <option value="vacation">Vacation</option>
      <option value="recovery">Recovery</option>
    </select>

    <label for="current-day">Current day:</label>
    <input type="date" id="current-day" name="timekeeper-start" />
  </div>
</template>

<style scoped>
.timekeeper {
  display: grid;
  grid-template:
    "a" auto
    "b" auto
    "c" auto;
}

label {
  margin: 0px;
}

select,
input {
  margin-bottom: 20px;
}
</style>
