<template>
    <div :class="'p-checkbox-group' + checkboxGroupSize + checkboxGroupDisabled"
      @click="handleClick">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch, Emit,
} from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import CommonPropsMethodMixin from '@/mixins/mixins';


@Component({
  name: 'PCheckboxGroup',
  mixins: [CommonPropsMethodMixin],
})

export default class PCheckboxGroup extends Vue {
    @Prop() size !: string;

    @Prop({ default: false }) disabled !: boolean;

    @Model('change') checkboxnGroupValue !: string[];

    @Getter getCheckboxGroupList !: string[]

    @Mutation refreshCheckboxGroupValue !: (value: string[]) => void

    get checkboxGroupSize() {
      return this.getComponentSize('p-checkbox-group', this.size);
    }

    get checkboxGroupDisabled() {
      return this.disabled ? ' is-disabled' : '';
    }

    handleClick(event: any) {
      if (event.target.type !== 'checkbox') {
        return;
      }
      this.$emit('change', this.getCheckboxGroupList);
    }

    created() {
      this.refreshCheckboxGroupValue(this.checkboxnGroupValue);
    }
}
</script>

<style lang="scss" scoped>
  .p-checkbox-group {
    font-size: 14px;
    &.p-checkbox-group-small .p-checkbox {
      font-size: 12px;
    }
    &.p-checkbox-group-default .p-checkbox {
      font-size: 14px;
    }
    &.p-checkbox-group-large .p-checkbox {
      font-size: 16px;
    }
  }

</style>
