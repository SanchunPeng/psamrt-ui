<template>
  <div id="app">
    <ButtonTest/>
    <hr/>
    <RadioTest/>
    <hr/>
    <InputTest/>
    <hr/>
    <!-- <SelectTest/> -->
    <!-- <hr/> -->
    <!-- <CascaderTest/> -->
    <CheckBox/>
    <hr/>
    <SwitchTest/>
    <hr/>
    <InputNumberTest/>
    <hr/>
    <SliderTest/>
    <hr/>
    <TooltipsTest/>
    <hr/>
    <RateTest/>
    <hr/>
    <ProgressTest/>
    <hr/>
    <BadgeTest/>
    <hr/>
    <PopoverTest/>
    <hr/>
    <!-- <CarouselTest/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonTest from './test/Button.vue';
import RadioTest from './test/Radio.vue';
import CheckBox from './test/CheckBox.vue';

import InputTest from './test/InputTest.vue';
import SelectTest from './test/Select.vue';
import CascaderTest from './test/Cascader.vue';
import SwitchTest from './test/Switch.vue';
import InputNumberTest from './test/InputNumber.vue';
import SliderTest from './test/Slider.vue';
import TooltipsTest from './test/Tooltips.vue';
import RateTest from './test/Rate.vue'
import ProgressTest from './test/Progress.vue'
import BadgeTest from './test/Badge.vue'
import PopoverTest from './test/Popover.vue'
// import CarouselTest from './test/Carousel.vue'

@Component({
  components: {
    ButtonTest,
    RadioTest,
    InputTest,
    SelectTest,
    CascaderTest,
    CheckBox,
    SwitchTest,
    InputNumberTest,
    SliderTest,
    TooltipsTest,
    RateTest,
    ProgressTest,
    BadgeTest,
    PopoverTest,
    // CarouselTest
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  #app {
    padding: 5px;
  }
  hr {
    margin: 30px 50px 30px 0;
    border-color: #fff;
  }
  .division {
    margin: 10px auto;
  }
</style>
