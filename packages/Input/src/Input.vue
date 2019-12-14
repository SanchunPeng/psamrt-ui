<template>
  <div :class="inputType === 'textarea' ? 'p-textarea' : 'p-input'
  + inputSize + inputDisabled + inputSuffix">
    <template v-if="inputType === 'textarea'" >
    </template>
    <template v-else>
      <input
      :class="['p-input-original', {'input-hover' : inputFocus}]"
      :type='inputType'
      :placeholder="placeholder"
      :autocomplete="inputAutocomplete"
      :disabled="disabled"
      :readonly="readonly"
      :value="inputValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"/>
      <span class="p-input_suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </span>

    </template>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch, Emit,
} from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';
 
@Component({
  name: 'PInput',
  mixins: [CommonPropsMethodMixin],
})

export default class PInput extends Vue {
  @Prop() type !: string;

  @Prop() placeholder !: string;

  @Prop() size !: string;

  @Prop() value !: string;

  @Prop() autocomplete !: string;

  @Prop() disabled !: boolean;

  @Prop() prefixIcon !: string;

  @Prop() suffixIcon !: string; 

  @Prop() readonly !: boolean;

  @Model('change') inputModelValue !: string;

  get inputValue() {
    return this.inputModelValue ? this.inputModelValue
      : this.value === null || this.value === undefined ? '' : this.value;
  }

  inputFocus : boolean = false;

  get inputSuffix() {
    return this.$slots.suffix ? ' p-input-suffix' : '';
  }


  get inputType() {
    const propType = this.type ? this.type.toLowerCase() : '';
    return ['text', 'textarea'].indexOf(propType) > -1 ? this.type : 'text';
  }

  get inputAutocomplete() {
    const propAutocomplete = this.autocomplete ? this.autocomplete.toLowerCase() : '';
    return ['off', 'on'].indexOf(propAutocomplete) > -1 ? this.autocomplete : 'off';
  }

  get inputSize() {
    // const propSize = this.size ? this.size.toLowerCase() : '';
    // return ['default', 'small', 'large'].indexOf(propSize) > -1 ? ` p-input-${propSize}` : '';
    return this.getComponentSize('p-input', this.size);
  }

  get inputDisabled() {
    return this.disabled ? ' is-disabled': '';
  }

  handleInput() {
    // this.$emit('input', event.target.value)
  }

  handleFocus(event: any) {
    this.inputFocus = true;
    this.$emit('focus', event);
  }

  handleBlur(event: any) {
    this.inputFocus = false;
    this.$emit('blur', event);
  }

  @Emit('change')
  handleChange(event: any) {
    return event.target.value;
  }
}

</script>
<style lang="scss" scoped>
  .p-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    &.p-input-small {
      .p-input-original {
        @include setFontAndHeight($smallInputHeight, 12px);
      }
      .p-input_icon{
        line-height: $smallInputHeight;
      }
    }
    &.p-input-default {
      .p-input-original{
        @include setFontAndHeight($defaultInputHeight, 14px);

      }
      .p-input_icon{
        line-height: $defaultInputHeight;
      }
    }
    &.p-input-large {
      .p-input-original {
        @include setFontAndHeight($largeIputHeight, 16px);
      }
      .p-input_icon{
        line-height: $largeIputHeight;
      }
    }
    .p-input-original {
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid $defaultBorder;
      color: $defaultFontColor;
      display: inline-block;
      font-size: inherit;
      height: $defaultInputHeight;
      line-height: $defaultInputHeight;
      outline: none;
      padding: 0 15px;
      width: 100%;
      &.input-hover {
        border-color: $primary;
      }
    }
    &.is-disabled .p-input-original{
      background-color: $disabledBackground;
      border-color: $disabledBorder;
      color: $disabledText;
      cursor: not-allowed
    }
    .p-input_icon {
      line-height: $defaultInputHeight;
    }
    &.p-input-suffix {
      .p-input-original {
        padding-right: 30px;
      }
      .p-input_suffix {
        width: 25px;
        position: absolute;
        right: 5px;
        top: 0;
        height: 100%;
        .p-input_icon {
          width: 100%;
          height: 100%;
          display: inline-block;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
  }
</style>
