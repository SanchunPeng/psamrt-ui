<template>
  <div class="division">
    <p-progress v-model="progressValue" type="success"></p-progress>
    <p-progress v-model="progressValue1" type="warning"></p-progress>
    <p-progress v-model="progressValue2"></p-progress>
    <p-progress v-model="progressValue3" type="error"></p-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProgressTest extends Vue {
  progressValue : number = 80; // 0-100

  progressValue1 : number = 15; // 0-100

  progressValue2 : number = 40; // 0-100

  progressValue3 : number = 60; // 0-100
}
</script>
<style lang="scss">
  .p-progress {
    width: 500px;
  }
</style>
