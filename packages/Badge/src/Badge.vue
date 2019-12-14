<template>
    <span :class="'p-badge' + badgeType" @click="handleBadgeClick">
        <slot></slot>
        <span :class="{
            'p-badge-cup' : true,
            'p-badge-cup-hot': isHot
            }"
        v-show="!hidden" ref="badgeText" :style="badgeTextStyle">{{currentBadgeValue}}</span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch, Emit } from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';
import { StyleRightObject } from '@/utils/utils';

@Component({
  name: 'PBadge',
  mixins: [CommonPropsMethodMixin],
})

export default class PBadge extends Vue{
    @Prop() hidden !: boolean;

    @Prop() type !: string;

    @Prop() max !: number;
 
    @Prop() isHot !: boolean;

    @Model('change') badgeValue !: number;

    currentBadgeValue : string = '';

    badgeTextStyle : StyleRightObject = {top: '', right: ''}

    badge: any;

    get badgeType() {
        return this.type ? ` ${this.type}` : '';
    }

    setBadgeTextRect(width: number, height: number) {
        this.badgeTextStyle.top = `${-height / 2}px`;
        this.badgeTextStyle.right = `${15 - width / 2}px`;
    }

    created() {
        this.currentBadgeValue = this.max ?
            this.badgeValue > this.max ? `${this.max}+` : `${this.badgeValue}`
            : this.isHot ? '' : `${this.badgeValue}`;
    }

    mounted() {
        this.badge = this.$refs.badgeText;
        !this.isHot && this.setBadgeTextRect(this.badge.clientWidth, this.badge.clientHeight)
    }

    handleBadgeClick() {
        this.$emit('click')
    }

}
</script>

<style lang="scss" scoped>
  .p-badge {
    padding: 10px 15px;
    position: relative;
    &.success {
      .p-badge-cup {
        background-color: $success;
      }
    }
    &.warning {
      .p-badge-cup {
        background-color: $warning;
      }
    }
    &.error {
      .p-badge-cup {
        background-color: $error;
      }
    }
    .p-badge-cup {
        border-radius: 10px;
        background-color: $primary;
        color: #ffffff;
        padding: 3px 5px;
        position: absolute;
        z-index: 111;
        &.p-badge-cup-hot {
          background-color: $error;
          border-radius: 50%;
          padding: 4px;
          top: -2px;
          right: 13px;
        }
    }
  }
</style>


