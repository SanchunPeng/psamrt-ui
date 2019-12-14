<template>
  <span :class="'p-cascader' + cascaderSize" v-clickoutside="handleClickOutside">
    <div class="p-cascader-input">
      <p-input
        type="text"
        :placeholder="placeholder ? placeholder : '请选择...'"
        :size="inputSize"
        :disbaled="disabled"
        :readonly="true"
        :value="cascaderInputValue"
        @blur="handleInputBlur"
        @focus="handleInputFocus"
      >
        <i slot="suffix" :class="getCascaderFocus ? 'p-input_icon p-icon-top-line'
        : 'p-input_icon p-icon-below-line'"></i>
      </p-input>
    </div>
    <div v-show="getCascaderFocus" class="p-cascader-dropdown-wapper">
      <div class="p-cascader-dropdown">
        <p-cascader-menu
          :firstOption="option"
          @change="handleInputChange"
          :size="inputSize"></p-cascader-menu>
      </div>
      <div class="p-cascader-dropdown-arrow"></div>
    </div>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import Input from '../../Input';
import PCascaderMenu from './CascaderMenu.vue';
import { CascaderOption } from '@/mixins/mixins';
import clickoutside from '@/directive/clickoutside';


@Component({
  name: 'PCascader',
  components: {
    PCascaderMenu,
  },
  directives: { clickoutside },
})

export default class PCascader extends Vue {

  @Prop() option !: Array<CascaderOption>;

  @Prop() placeholder !: string;

  @Model('change') cascaderValue !: string;

  @Prop() size !: string;

  @Prop() disabled !: boolean;

  @Getter getCascaderFocus !: boolean;

  @Getter getCascaderLabel !: string;

  @Getter getCascaderSecondLabel !: string;

  @Getter getCascaderThreeLabel !: string;

  @Getter getCascaderVlaue !: string;

  @Mutation refreshCascaderFocus !: (value: boolean) => void;

  inputSize : string = '';

  get cascaderSize() {
    const propSize = this.size ? this.size.toLowerCase() : '';
    const bool = ['default', 'small', 'large'].indexOf(propSize) > -1;
    this.inputSize = bool ? propSize : '';
    return bool ? ` p-select-${propSize}` : '';
  }

  get cascaderInputValue() {
    let result = '';
    result += this.getCascaderLabel ? this.getCascaderLabel : '';
    result += this.getCascaderSecondLabel ? ` / ${this.getCascaderSecondLabel}` : '';
    result += this.getCascaderThreeLabel ? ` / ${this.getCascaderThreeLabel}` : '';
    return result;
  }

  handleClickOutside() {
    this.refreshCascaderFocus(false);
  }

  handleInputFocus(event: any) {
    this.refreshCascaderFocus(true);
    // this.refreshHoverValue(this.getSelectValue);
    this.$emit('focus', event);
  }

  handleInputBlur(value: string) {
  }

  handleInputChange(value: string) {
    this.$emit('change', value);
  }
}
</script>

<style lang="scss" scoped>
@import '@/style.scss';
.p-cascader {
  width: 100%;
  font-size: 14px;
  display: block;
  &.p-cascader-small {
    font-size: 12px;
  }
  &.p-cascader-defalut {
    font-size: 14px;
  }
  &.p-cascader-large {
    font-size: 16px;
  }

  .p-cascader-dropdown-wapper {
    position: absolute;
    margin-top: 10px;
    z-index: 1111;
    .p-cascader-dropdown {
      // min-width: 200px;
      max-height: 250px;
      border: 1px solid $defaultBorder;
      // overflow: scroll;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .p-cascader-dropdown-arrow, .p-cascader-dropdown-arrow:after  {
      @include arrow-after-common;
      border-top-width: 0;
    }
    .p-cascader-dropdown-arrow {
      left: 35px;
      top: -5px;
      border-bottom-color: $defaultBorder;
      &:after {
        content: ' ';
        top: 1px;
        margin-left: -5px;
        border-bottom-color: #ffffff;
      }
    }
  }
}
</style>
