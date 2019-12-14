<template>
  <div :class="'p-radio-group' + radioGroupSize + radioGroupDisabled" @click="handleClick">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';
// import { Mutation } from 'vuex-class';
import state from '@/utils/state.js'
import CommonPropsMethodMixin from '@/mixins/mixins';

@Component({
  name: 'PRadioGroup',
  mixins: [CommonPropsMethodMixin],
})


export default class PRadioGroup extends Vue {
  @Prop() size !: string;

  @Prop({ default: false }) disabled !: boolean;

  @Model('change') radioCurrentGroupValue !: string;

  // @Mutation refreshRadioGroupValue !: (value: string) => void

  get radioGroupSize() {
    return this.getComponentSize('p-radio-group', this.size);
  } 

  get radioGroupDisabled() {
    return this.disabled ? ' is-disabled' : '';
  }

  handleClick(event: any) {
    if (event.target.type !== 'radio') {
      return;
    }
    this.$emit('change', event.target.value);
  }

  created() {
    state.refreshRadioGroupValue(this.radioCurrentGroupValue)
    // this.refreshRadioGroupValue(this.radioCurrentGroupValue);
  }
}
</script>

<style lang="scss" scoped>
  .p-radio-group {
    font-size: 14px;
    &.p-radio-group-small .p-radio {
      font-size: 12px;
    }
    &.p-radio-group-default .p-radio {
      font-size: 14px;  
    }
    &.p-radio-group-large .p-radio {
      font-size: 16px;
    }
  }
</style>
