<template>
  <span :class="'p-rate' + rateSize + rateDisabled">
    <span v-for="(item, index) in rateMaxValue"
    :key="index"
    :class="item <= rateValue ? 'p-icon-favorite-s' : 'p-icon-favorite-line'"></span>
    <span class="p-rate-text">{{rateValue}}</span>
  </span>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';

@Component({
  name: 'PRate',
  mixins: [CommonPropsMethodMixin],
})

export default class PRate extends Vue {
  @Model('change') rateValue !: number;

  @Prop() disabled !: boolean;

  @Prop() size !: string;


  rateMaxValue = 5

  get rateDisabled() {
    return this.disabled ? ' p-rate-disabled' : '';
  }

  get rateSize() {
    return this.getComponentSize('p-rate', this.size);
  }
}
</script>

<style lang="scss" scoped>
.p-rate {
  display: inline-block;
  @include setFontAndHeight($defaultInputHeight, 14px);
  @include setFavoriteSize(18px);
  &.p-rate-small {
    @include setFontAndHeight($smallInputHeight, 12px);
    @include setFavoriteSize(16px);
  }
  &.p-rate-default {
    @include setFontAndHeight($defaultInputHeight, 14px);
    @include setFavoriteSize(18px);
  }
  &.p-rate-large {
    @include setFontAndHeight($largeIputHeight, 16px);
    @include setFavoriteSize(20px);
  }
  .p-icon-favorite-s:before {
    color: $warning;
  }
  .p-icon-favorite-line:before {
    color: $disabledText;
  }

  .p-rate-text {
    display: inline-block;
    color: $warning;
    padding-left: 10px;
  }
}
</style>
