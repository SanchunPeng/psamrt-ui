<template>
  <div class="division">
    <p-popover
      trigger="hover"
      title="标题"
      width='200px'
      content="这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子"
    >
      <p-button text="hover激活弹出框"></p-button>
    </p-popover>

    <p-popover
      trigger="click"
      title="标题"
      width='200px'
      content="这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子这是例子"
    >
      <p-button text="click激活弹出框"></p-button>
    </p-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PopoverTest extends Vue {
  sliderValue: number = 500;

  handleSliderChange = (val: number) => {
    console.log('do handleSliderChange', val);
  }
}
</script>
