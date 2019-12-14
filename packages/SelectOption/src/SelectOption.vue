<template>
  <li
    class="p-select-option-item"
    @mouseenter="handleHoverItem"
    @mousedown="handleOptionClick"
    :class="{
      'is-selected': getSelectValue === value,
      'is-disabled': disabled,
      'is-hover': getHoverValue === value
    }">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </li>

</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator';
import {Mutation, Getter} from 'vuex-class';
import state from '@/utils/state.js'


@Component({
  name: 'POption'
})

export default class PSelect extends Vue {

  @Prop() disabled !: boolean;

  @Prop() label !: string;

  @Prop() value !: string;

  getSelectValue : string = ''

  getSelectLabel : string = ''

  getHoverValue : string = ''


  // @Getter getSelectValue !: string;

  // @Getter getHoverValue !: string;

  // @Getter getSelectLabel !: string;

  // @Mutation refreshSelectValue !: (value: string) => void;

  // @Mutation refreshHoverValue !: (value: string) => void;

  // @Mutation refreshSelectLabel !: (value: string) => void;

  handleOptionClick() {
    state.refreshSelectLabel(this.label);
    state.refreshSelectValue(this.value);
  }

  handleHoverItem() {
    state.refreshHoverValue(this.value);
  }

  created() {
    if (this.getSelectValue !== '' && this.getSelectLabel === '' && this.getSelectValue === this.value) {
      state.refreshSelectLabel(this.label);
    }
  }

}
</script>

<style lang="scss" scoped>
    .p-select-option-item {
        font-size: 14px;
        padding: 0 15px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: $defaultFontColor;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        &.is-selected{
            color: $primary;
        }
        &.is-hover {
            background: $defaultHover;
        }
    }
</style>

