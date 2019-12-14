<template>
  <div class="division">
    <p-rate v-model="rateValue"></p-rate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RateTest extends Vue {
  rateValue: number = 4;
}
</script>
