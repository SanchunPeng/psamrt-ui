<template>
  <div :class="'p-slider' + sliderSize">
    <div class="p-slider-bar" ref="slider" @click="handleSliderClick">
      <div class="p-slider-left" :style="leftStyle"></div>
      <div :class="'p-slider-button' + sliderHover"
        :style="bottonStyle"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
      </div>
      <div :class="'p-slider-hover'"
        v-show="showTipsAll || (!showTipsAll && isHover)"
        :style="hoverStyle"
        >
        <div class="p-slider-content">{{crrentSliderValue}}</div>
        <div class="p-slider-arrow"></div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch 
  } from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';
import { StyleObject } from '@/utils/utils';

@Component({
  name: 'PSlider',
  mixins: [CommonPropsMethodMixin],
})

export default class PSlider extends Vue {
  @Prop() size !: string;

  @Prop() disabled !: boolean;

  @Prop() min !: number;

  @Prop() max !: number;

  @Prop() showTipsAll !: boolean;

  @Model() sliderValue !: number;

  crrentSliderValue : number = this.sliderValue ? this.sliderValue : this.min ? this.min : 0;

  sliderWidth : number = 0;

  isHover : boolean = false;

  bottonStyle : StyleObject = { left: '', width: '' };

  hoverStyle : StyleObject = { left: '', width: '' };

  leftStyle : StyleObject = { left: '', width: '' };

  slider : any;

  get sliderSize() {
    return this.getComponentSize('p-slider', this.size);
  }

  get sliderDisabled() {
    return this.disabled ? ' is-disabled' : '';
  }

  get sliderHover() {
    return this.showTipsAll ? ' is-hover' : this.isHover ? ' is-hover' : '';
  }

  mounted() {
    this.slider = this.$refs.slider;
    this.resetSliderSize();
    window.addEventListener('resize', this.resetSliderSize);
    this.setButtonPosition(this.crrentSliderValue / (this.max - this.min) * this.sliderWidth);
  }

  resetSliderSize() {
    this.sliderWidth = this.slider.clientWidth;
  }

  handleMouseEnter() {
    this.isHover = true;
  }

  handleMouseLeave() {
    this.isHover = false;
  }

  handleSliderClick(event: any) {
    this.resetSliderSize();
    if (event.clientX > this.sliderWidth) {
      return;
    }
    const offsetLeft = this.slider.getBoundingClientRect().left;
    this.setButtonPosition(event.clientX - offsetLeft);
    this.setSliderValue((event.clientX - offsetLeft) / this.sliderWidth);
  }

  setSliderValue(present: number) {
    this.crrentSliderValue = Math.floor(present * (this.max - this.min)) + this.min;
  }

  setButtonPosition(left: number) {
    this.bottonStyle.left = `${left}px`;
    this.hoverStyle.left = `${left + 8}px`;
    this.leftStyle.width = `${left + 2}px`;
  }
}
</script>

<style lang="scss" scoped>
  .p-slider {
    width: 100%;
    position: relative;
    height: $defaultInputHeight;
    line-height: $defaultInputHeight;
    .p-slider-bar {
      width: 100%;
      height: 8px;
      background: $defaultBorder;
      border-radius: 4px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .p-slider-left {
        height: 8px;
        background: $primary;
        border-radius: 4px;
      }
      .p-slider-button {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #ffffff;
        border: 1px solid $primary;
        border-radius: 100%;
        cursor: pointer;
        &.is-hover {
          border-width: 2px;
        }
      }
      .p-slider-hover {
        position: relative;
        width: 18px;
        height: 18px;
        top: -45px;
        .p-slider-content {
          position: absolute;
          display: block;
          padding: 0 5px;
          height: 25px;
          line-height: 25px;
          white-space: nowrap;
          border: 2px solid $primary;
          border-radius: 4px;
          transform: translateX(-50%);
        }
        .p-slider-arrow, .p-slider-arrow:after {
          @include arrow-after-common;
          border-bottom-width: 0;
          margin-left: -6px;
        }
        .p-slider-arrow {
          top: 24px;
          border-top-color: $primary;
        }
        .p-slider-arrow:after {
          content: '';
          top: -9px;
          border-top-color: #ffffff;
        }
      }
    }
  }
</style>
