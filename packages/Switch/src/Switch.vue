<template>
  <label :class="'p-switch' + switchSize + switchChecked + switchDisabled">
    <input
    class="p-switch-input"
    type="checkbox"
    @change="handleSwitchChange"
    :disabled="disabled"
    v-model="switchInputValue"
    />
    <span v-show="inactiveText" class="p-switch-inactive-text">{{ inactiveText }}</span>
    <span class="p-switch-label" ref="switchLabel"></span>
    <span v-show="activeText" class="p-switch-active-text">{{ activeText }}</span>
  </label>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';

@Component({
  name: 'PSwitch',
  mixins: [CommonPropsMethodMixin],
})

export default class PSwitch extends Vue {

  @Prop() size !: string;

  @Prop() activeColor !: string;

  @Prop() inactiveColor !: string;

  @Prop() activeText !: string;

  @Prop() inactiveText !: string;

  @Prop() disabled !: boolean

  @Model('change') switchValue !: boolean;

  switchInputValue : boolean = false;

  get switchChecked() {
    return this.switchInputValue ? ' is-checked' : '';
  }

  get switchSize() {
    return this.getComponentSize('p-switch', this.size);
  }

  get switchDisabled() {
    return this.disabled ? ' is-disabled' : '';
  }


  handleSwitchChange(event: any) {
    if (this.disabled) {
      return;
    }
    this.$emit('change', event.target.checked);
  }

  created() {
    this.switchInputValue = this.switchValue;
  }
}

</script>
<style lang="scss" scoped>
  .p-switch {
    position: relative;
    display: inline-block;
    margin: 10px 10px;
    &.p-switch-small {
        font-size: 12px;
        &.is-checked .p-switch-label:after{
            margin-left: -12px
        }
        .p-switch-label {
            width: 30px;
            height: 16px;
            &:after {
                width: 12px;
                height: 12px;
            }
        }
    }
    &.p-switch-default {
        font-size: 14px;
        &.is-checked .p-switch-label:after{
            margin-left: -14px
        }
        .p-switch-label {
            width: 34px;
            height: 18px;
        }
    }
    &.p-switch-large {
        font-size: 16px;
        &.is-checked .p-switch-label:after{
            margin-left: -16px
        }
        .p-switch-label {
            width: 38px;
            height: 20px;
            border-radius: 12px;
            &:after {
                width: 16px;
                height: 16px;
            }
        }
    }
    &.is-checked {
        .p-switch-label{
            background: $success;
            border-color: $success;
            &:after {
                left: 100%;
                margin-left: -14px
            }
        }
        .p-switch-inactive-text {
            color: $defaultFontColor;
        }
        .p-switch-active-text {
            color: $primary;
        }
    }
    &.is-disabled .p-switch-label{
        cursor: not-allowed;
        background: $defaultBorder;
        border-color: $defaultBorder;
    }
    .p-switch-input {
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
    .p-switch-inactive-text, .p-switch-active-text {
        display: inline-block;
        vertical-align: middle;
    }
    .p-switch-inactive-text {
        margin-right: 10px;
        color: $primary;
    }

    .p-switch-active-text {
        margin-left: 10px;
        color: $defaultFontColor;
    }

    .p-switch-label {
        position: relative;
        display: inline-block;
        font-size: 14px;
        width: 34px;
        height: 18px;
        background: $error;
        border: 1px solid $error;
        border-radius: 8px;
        vertical-align: middle;
        cursor: pointer;
        &:after {
            content: ' ';
            position: absolute;
            top: 1px;
            left: 1px;
            width: 14px;
            height: 14px;
            border-radius: 100%;
            background: #ffffff;
        }
    }
  }
</style>


