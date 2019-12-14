<template>
    <label :class="'p-radio' + radioSize + radionChecked + radioDisabeed">
        <span :class="'p-radio-input' + radionChecked + radioDisabeed">
            <span class="p-radio-input-show" ></span>
            <input type="radio" class="p-radio-original"
            :checked="radioValue"
            :value="label"
            :disabled="disabled"
            @click="handleClick"/>
        </span>
        <span class="p-radio-label">
            {{ text }}
        </span>
    </label>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
// import { Getter, State, Mutation } from 'vuex-class';
import state from '@/utils/state.js'
import CommonPropsMethodMixin from '@/mixins/mixins';

@Component({
  name: 'PRadio',
  mixins: [CommonPropsMethodMixin],
})

export default class PRadio extends Vue {
  @Prop() text!: string;

  @Prop() size!: string;

  @Prop({ default: false }) disabled!: boolean;

  @Prop() label!: string;

  @Model('change') radioValue !: string;

  // @Getter getRadioGroupValue !: string // 注意，这里需要加上类型

  // @Mutation refreshRadioGroupValue !: (value: string) => void

  radioCurrentValue !: string

  handleClick(event: any) {
    if (this.disabled) {
      return;
    }
    if (this.isRadioGroup) {
      this.radioValue = event.target.value;
      state.refreshRadioGroupValue(event.target.value);
    } else {
      this.$emit('change', event.target.value);
    }
  }

  get radioSize() {
    // const propSize = this.size ? this.size.toLowerCase() : '';
    // return ['default', 'small', 'large'].indexOf(propSize) > -1 ? ` p-radio-${propSize}` : '';
    return this.getComponentSize('p-radio', this.size);
  }

  get radionChecked() {
    return this.radioValue === this.label ? ' is-checked' : '';
    // if (this.isRadioGroup) {
    //   // this.radioCurrentValue = state.getRadioGroupValue();
    //   return this.radioValue === this.label ? ' is-checked' : '';
    // } else {
    //   // this.radioCurrentValue = this.radioValue;
    //   return this.radioValue === this.label ? ' is-checked' : '';
    // }
  }

  get radioDisabeed() {
    return this.disabled ? ' is-disabled' : '';
  }

  get isRadioGroup() {
    let parent = this.$parent;
    while (parent) {
      const temp = parent.$options;
      if (parent.$options.name !== 'PRadioGroup') {
        parent = parent.$parent;
      } else {
        return true;
      }
    }
    return false;
  }
}
</script>

<style lang="scss" scoped>
    .p-radio {
        font-size: 14px;
        color: $defaultFontColor;
        cursor: pointer;
        &.p-radio-small {
            font-size: 12px;
        }
        &.p-radio-large {
            font-size: 16px;
        }
         &.p-radio-default {
            font-size: 14px;
        }
        &.is-checked > .p-radio-label{
            color: $primary;
        }
        &.is-disabled {
          .p-radio-input .p-radio-input-show{
            cursor: not-allowed;
          }
          & > .p-radio-label{
            color: $disabledText;
            cursor: not-allowed;
          }
        }

        .p-radio-input {
            white-space: nowrap;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
            .p-radio-input-show {
                border: 1px solid $defaultBorder;
                border-radius: 100%;
                width: 14px;
                height: 14px;
                background-color: #fff;
                position: relative;
                cursor: pointer;
                display: inline-block;
                &:after {
                    width: 4px;
                    height: 4px;
                    border-radius: 100%;
                    background-color: #fff;
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }

            .p-radio-original{
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0;
            }
            &.is-checked > .p-radio-input-show{
                border-color: $primary;
                background: $primary;
            }
            &.is-disabled > .p-radio-input-show{
                border-color: $disabledBorder;
                background: $disabledBackground;
                &:after {
                    background: $disabledBackground
                }
            }
            &.is-disabled.is-checked > .p-radio-input-show{
                border-color: $disabledBorder;
                background: $disabledBackground;
                &:after {
                    background: $disabledText
                }
            }

        }

        .p-radio-label {
            color: $defaultFontColor;
        }
    }

    .p-radio + .p-radio {
        margin-left: 20px;
    }
</style>
