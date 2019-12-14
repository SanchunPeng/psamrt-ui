<template>
  <div class="division">
    <p-slider
      v-model="sliderValue"
      :min='1'
      :max="1000"
      :showTipsAll="true"
      @change="handleSliderChange"
    ></p-slider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SliderTest extends Vue {
  sliderValue: number = 500;

  handleSliderChange = (val: number) => {
    console.log('do handleSliderChange', val);
  }
}
</script>
<style lang="scss">
  .p-slider {
    width: 500px;
  }
</style>
