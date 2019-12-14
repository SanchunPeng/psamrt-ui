<template>
  <button :class="'p-button' + buttonType + buttonSize">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'PButton',
})

export default class PButton extends Vue {
  @Prop() text!: string;

  @Prop() type!: string;

  @Prop() size!: string;

  // computed
  get buttonType() {
    const types = ['default', 'primary', 'success', 'error', 'warning'];
    const propType = this.type ? this.type.toLowerCase() : '';
    return types.indexOf(propType) > -1 ? ` ${propType}` : ' default';
  }

  get buttonSize() {
    const sizes = ['default', 'small', 'large'];
    const propSize = this.size ? this.size.toLowerCase() : '';
    return sizes.indexOf(propSize) > -1 ? ` ${propSize}` : '';
  }
}
</script>

<style lang="scss" scoped>
button {
  border-radius: 4px;
  min-width: 40px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
    padding: 4px 9px 5px;

  &.small{
    font-size: 12px;
    padding: 2px 6px 3px;
  }
  &.large{
    font-size: 16px;
    padding: 6px 12px 7px;
  }

  &.default{
    color: $defaultFontColor;
    border: 1px solid $defaultBorder;

    &:hover{
      background-color: $defaultHover;
    }
  }

  &:not(.default) {
    border: none;
    color: #fff;
  }

  &.primary{
    background-color: $primary;
    &:hover{
      background-color: $primaryHover;
    }
  }

  &.success{
    background-color: $success;
    &:hover{
      background-color: $successHover;
    }
  }

  &.error{
    background-color: $error;
    &:hover{
      background-color: $errorHover;
    }
  }
  &.warning{
    background-color: $warning;
    &:hover{
      background-color: $warningHover;
    }
  }

}
</style>
