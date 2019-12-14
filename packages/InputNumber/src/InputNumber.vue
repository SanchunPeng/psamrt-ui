<template>
  <div :class="'p-number' + numberSize + numberDisabled">
    <span :class="{'p-number-prefix': true, 'is-disabled': prefixDisabled}"
      @click="handleDecreaceNumber"></span>
    <p-input
    :size="size"
    :value="inputNumber"
    @change="handleInputChange"
    :disabled="disabled"></p-input>
    <span :class="{'p-number-suffix': true, 'is-disabled': suffixDisabled}"
      @click="handleIncreaceNumber"></span>
  </div>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';
import Input from '../../Input';

@Component({
  name: 'PInputNumber',
  components: {
  },
  mixins: [CommonPropsMethodMixin],
})

export default class PInputNumber extends Vue {
  @Prop() size !: string;

  @Prop() disabled !: boolean;

  @Model('change') inputNumberValue !: number;

  @Prop() min !: number;

  @Prop() max !: number;

  inputNumber : number = (this.min && this.max
    && (this.inputNumberValue < this.min || this.inputNumberValue <= this.max))
    ? this.min : this.inputNumberValue;

  get prefixDisabled() {
    return this.min && this.inputNumber && this.inputNumber === this.min;
  }

  get suffixDisabled() {
    return this.max && this.inputNumber && this.inputNumber === this.max;
  }

  get numberSize() {
    return this.getComponentSize('p-number', this.size);
  }

  get numberDisabled() {
    return this.disabled ? ' is-disabled' : '';
  }

  handleInputChange(val: number) {
    if (this.min && this.max && val >= this.min && val <= this.max) {
      this.inputNumber = val;
    }
  }

  handleIncreaceNumber() {
    if (this.disabled || this.inputNumber === this.max) return;
    this.inputNumber = this.inputNumber + 1;
  }

  handleDecreaceNumber() {
    if (this.disabled || this.inputNumber === this.min) return;
    this.inputNumber = this.inputNumber - 1;
  }
}
</script>

<style lang="scss" >
  .p-number {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    &.p-number-small {
      .p-number-prefix, .p-number-suffix {
        width: $smallInputHeight;
      }
      .p-input {
        margin-left: $smallInputHeight;
        margin-right: $smallInputHeight;
      }
    }
    &.p-number-default {
      .p-number-prefix, .p-number-suffix {
        width: $defaultInputHeight;
      }
      .p-input {
        margin-left: $defaultInputHeight;
        margin-right: $defaultInputHeight;
      }
    }
    &.p-number-large {
      .p-number-prefix, .p-number-suffix {
        width: $largeIputHeight;
      }
      .p-input {
        margin-left: $largeIputHeight;
        margin-right: $largeIputHeight;
      }
    }
    .p-number-prefix, .p-number-suffix {
      position: absolute;
      width: $defaultInputHeight;
      top: 0;
      bottom: 0;
      text-align: center;
      border: 1px solid $defaultBorder;
      background: $defaultBorder;
      &.is-disabled {
        cursor: not-allowed;
      }
      &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .p-number-prefix {
      left: 1px;
      &:after {
        content: '-';
      }
    }

    .p-number-suffix {
      right: 1px;
      &:after {
        content: '+';
      }
    }

    .p-input {
      width: 100px !important;
      margin-left: $defaultInputHeight;
      margin-right: $defaultInputHeight;
    }
    .p-input .p-input-original {
      border-radius: 0px;
    }
  }

</style>
