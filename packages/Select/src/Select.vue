<template>
  <div :class="'p-select' + selectSize">
    <!-- <div class="p-select-input">
      <p-input
        type="text"
        :placeholder="placeholder ? placeholder : '请选择...'"
        :size="inputSize"
        :disbaled="disabled"
        :readonly="true"
        :value="getSelectLabel"
        @click.stop
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        @change="handleInputChange"
      >
      <i slot="suffix" :class="selectFocus ? 'p-input_icon p-icon-top-line'
        : 'p-input_icon p-icon-below-line'"></i>
      </p-input>
    </div> -->
    <!-- <div v-show="selectFocus" class="p-select-dropdown-wapper">
      <div class="p-select-dropdown">
        <div class="p-select-option-wapper">
          <slot></slot>
        </div>
      </div>
      <div class="p-select-dropdown-arrow">
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
import { Mutation, Getter } from 'vuex-class';
import Input from '../../Input';
import state from '@/utils/state.js'
import CommonPropsMethodMixin from '@/mixins/mixins';

@Component({
  name: 'PSelect',
  mixins: [CommonPropsMethodMixin],
})

export default class PSelect extends Vue {

  @Prop() size !: string;

  @Prop() disabled !: boolean;

  @Prop() placeholder !: string;

  @Prop() multiple !: boolean;

  // @Getter getSelectValue !: string;

  // @Getter getHoverValue !: string;

  // @Getter getSelectLabel !: string;
  getSelectLabel : string = ''

  // @Mutation refreshSelectValue !: (value: string) => void;

  // @Mutation refreshHoverValue !: (value: string) => void;

  // @Mutation refreshSelectLabel !: (value: string) => void;

  @Model('change') selectValue !: string;

  inputSize : string = '';

  selectFocus : boolean = false;

  get selectSize() {
    const propSize = this.size ? this.size.toLowerCase() : '';
    const bool = ['default', 'small', 'large'].indexOf(propSize) > -1;
    this.inputSize = bool ? propSize : '';
    return bool ? ` p-select-${propSize}` : '';
  }

  handleInputFocus(event: any) {
    this.selectFocus = true;
    // state.refreshHoverValue(state.getSelectValue());
    this.$emit('focus', event);
  }

  handleInputBlur(evetn: any) {
    this.$emit('blur', event);
    this.selectFocus = false;
  }

  handleInputChange(event: any) {
    // console.log(this.selectValue)
    // this.getSelectLabel = 
    // this.$emit('change', state.getSelectValue());
  }

  created() {
    // console.log(11111)
    state.refreshSelectValue(this.selectValue);
    state.refreshHoverValue(this.selectValue);
  }
}

</script>

<style lang="scss">
.p-select .p-input-original {
  cursor: pointer;
}

.p-select {
  width: 100%;
  font-size: 14px;
  &.p-select-small {
    font-size: 12px;
    .p-select-option-item {
      @include setFontAndHeight($smallInputHeight, 12px);
    }
  }
  &.p-select-default {
    font-size: 14px;
    .p-select-option-item {
      @include setFontAndHeight($defaultInputHeight, 14px);
    }
  }
  &.p-select-large {
    font-size: 16px;
    .p-select-option-item {
      @include setFontAndHeight($largeIputHeight, 16px);
    }
  }
  .p-select-dropdown-wapper {
    position: absolute;
    margin-top: 10px;
    z-index: 1111;
    .p-select-dropdown {
      position: absolute;
      min-width: 200px;
      max-height: 250px;
      border: 1px solid $defaultBorder;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      .p-select-option-wapper {
        padding: 5px 0;
      }
    }
    .p-select-dropdown-arrow, .p-select-dropdown-arrow:after {
      @include arrow-after-common;
      border-top-width: 0;
    }
    .p-select-dropdown-arrow {
      left: 35px;
      top: -6px;
      border-bottom-color: $defaultBorder;
      &:after {
        content: ' ';
        top: 1px;
        margin-left: -6px;
        border-bottom-color: #ffffff;
      }
    }
  }
}
</style>

