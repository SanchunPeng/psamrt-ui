<template>
    <label :class="'p-checkbox' + checkboxSize + checkboxChecked + checkboxDisabled">
        <span :class="'p-checkbox-input' + checkboxChecked + checkboxDisabled">
            <span class="p-checkbox-input-show"></span>
            <input type="checkbox" class="p-checkbox-original"
            :checked="checkboxCurrentValue"
            :disabled="disabled"
            @click="handleClick"/>
        </span>
        <span class="p-checkbox-label">
            {{ text }}
        </span>
    </label>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch, Emit,
} from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import CommonPropsMethodMixin from '@/mixins/mixins';

@Component({
  name: 'PCheckbox',
  mixins: [CommonPropsMethodMixin],
})

export default class PCheckbox extends Vue {
  @Prop() text!: string;

  @Prop() size!: string;

  @Prop() label!: string;

  @Prop({ default: false }) disabled!: boolean;

  @Model('change') checkboxVlaue !: boolean;

  @Getter getCheckboxGroupList !: string[];

  @Mutation refreshCheckboxGroupValue !: (value: string[]) => void

  checkboxCurrentValue : boolean = false;

  handleClick(event: any) {
    if (this.disabled) {
      return;
    }
    if (this.isCheckboxGroup) {
      let checkList : string[] = this.getCheckboxGroupList;
      if (event.target.checked) {
        checkList.push(this.label);
      } else {
        const index = checkList.indexOf(this.label);
        checkList.splice(index, 1);
      }
      this.refreshCheckboxGroupValue(checkList);
    } else {
      this.$emit('change', event.target.checked);
    }
  }

  get checkboxSize() {
    return this.getComponentSize('p-checkbox', this.size);
  }

  get checkboxChecked() {
    let result = ''
    if (this.isCheckboxGroup) {
      if (this.getCheckboxGroupList.length > 0) {
        const bool : boolean = this.getCheckboxGroupList.indexOf(this.label) > -1;
        this.checkboxCurrentValue = bool;
        result = bool ? ' is-checked' : '';
      } else {
        result = '';
      }
    } else {
      this.checkboxCurrentValue = this.checkboxVlaue;
      result = this.checkboxCurrentValue ? ' is-checked' : '';
    }
    return result
  }

  get checkboxDisabled() {
    return this.disabled ? ' is-disabled' : '';
  }

  get isCheckboxGroup() {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== 'CheckboxGroup') {
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
  .p-checkbox {
    font-size: 14px;
    color: $defaultFontColor;
    cursor: pointer;
    &.p-checkbox-small {
        font-size: 12px;
    }
    &.p-checkbox-default {
        font-size: 14px;
    }
    &.p-checkbox-large {
        font-size: 16px;
    }
    &.is-checked > .p-checkbox-label {
        color: $primary;
    }
    &.is-disabled {
      span.p-checkbox-input-show{
        cursor: not-allowed;
      }
      & > .p-checkbox-label {
        color: $disabledText;
        cursor: not-allowed;
      }
    }
    .p-checkbox-input {
      white-space: nowrap;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .p-checkbox-input-show {
        border: 1px solid $defaultBorder;
        border-radius: 2px;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        &:after {
          box-sizing: content-box;
          content: "";
          border: 1px solid #fff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg);
          width: 3px;
          transform-origin: center;
        }
      }
      .p-checkbox-original{
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
      &.is-checked > .p-checkbox-input-show{
        border-color: $primary;
        background: $primary;
      }
      &.is-disabled > .p-checkbox-input-show{
        border-color: $disabledBorder;
        background: $disabledBackground;
        &:after {
          border: 1px solid $disabledBackground
        }
      }
      &.is-disabled.is-checked > .p-checkbox-input-show{
        border-color: $disabledBorder;
        background: $disabledBackground;
        &:after {
          border: 1px solid $disabledText;
          border-left: 0;
          border-top: 0;
        }
      }
    }
  }
  .p-checkbox + .p-checkbox {
      margin-left: 20px;
  }
    
</style>
