<template>
 <div :class="'p-progress' + progressSize + progressDisabled + progressType" ref="progressRef">
    <div class="p-progress-success"
    :style="leftStyle"></div>
    <div class="p-progress-surplus"
    :style="rightStyle"></div>
    <span class="p-progress-text">{{progressValue + '%'}}</span>
 </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch, Emit } from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';
import { StyleObject } from '@/utils/utils';

@Component({
  name: 'PProgress',
  mixins: [CommonPropsMethodMixin],
})

export default class PProgress extends Vue{
  @Prop() size !: string;

  @Prop() disabled !: boolean;

  @Model('change') progressValue !: number;

  @Prop() type !: string;

  leftStyle : StyleObject = {left: '', width: ''};

  rightStyle : StyleObject = {left: '', width: ''};

  progress : any;

  progressWidth : number = 0

  get progressSize() {
    return this.getComponentSize('p-progress', this.size);
  }

  get progressDisabled() {
    return this.disabled ? ' p-progress-disabled' : '';
  }

  get progressType() {
    return this.type ? ` ${this.type}` : '';
  }

  setProgressWidth() {
    this.progressWidth = this.progress.clientWidth - 50;
  }

  setProgressPosition (width: number) {
    let offsetLeft = this.progress.getBoundingClientRect().left;
    this.leftStyle.left = `${offsetLeft}px`;
    this.leftStyle.width = `${width}px`;
    this.rightStyle.width = `${this.progressWidth - width}px`;
  }

  mounted () {
    this.progress = this.$refs.progressRef;
    this.setProgressWidth();
    window.addEventListener('resize', this.setProgressWidth);
    this.setProgressPosition(this.progressValue * this.progressWidth / 100);
  }
}
</script>

<style lang="scss" scoped>
  .p-progress {
    width: 100%;
    @include setProgressHeghtAndFont($defaultInputHeight, 14px);
    &.p-progress-small {
      @include setProgressHeghtAndFont($smallInputHeight, 12px);
    }
    &.p-progress-default {
      @include setProgressHeghtAndFont($defaultInputHeight, 14px);
    }
    &.p-progress-large {
      @include setProgressHeghtAndFont($largeIputHeight, 16px);
    }

    &.success .p-progress-success{
      background-color: $success;
    }
    &.error .p-progress-success{
      background-color: $error;
    }
    &.warning .p-progress-success{
      background-color: $warning;
    }

    .p-progress-success, .p-progress-surplus {
      display: inline-block;
      height: 5px;
    }
    .p-progress-text {
      display: inline-block;
      padding-left: 10px;
      color: $disabledText;
    }
    .p-progress-surplus {
      background-color: $disabledText;
    }
    .p-progress-success {
      background-color: $primary;
    }
  }
</style>
