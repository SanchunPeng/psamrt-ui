<template>
  <div :class="'p-tooltips' + tooltipDisabled" >
    <div :class="'p-tooltips-wapper' + tooltipPlacement" v-show="!disabled && isHover">
        <div class="p-tooltips-content">{{content}}</div>
        <span class="p-tooltips-arrow"></span>
    </div>
    <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';

@Component({
  name: 'PTooltips',
})

export default class PTooltips extends Vue {
  @Prop() disabled !: boolean;

  @Prop() content !: string;

  @Prop() placement !: string;

  isHover : boolean = false;

  get tooltipDisabled() {
    return this.disabled ? ' is-disabled' : '';
  }

  get tooltipPlacement() {
    return this.placement ? ` p-tooltip-place-${this.placement}` : ' p-tooltip-place-default';
  }

  showTooltips(isShow : boolean) {
    this.isHover = isShow;
  }

  handleMouseEnter() {
    this.showTooltips(true);
  }

  handleMouseLeave() {
    this.showTooltips(false);
  }
}

</script>

<style lang="scss" scoped>
@mixin place-top {
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
}
@mixin arrow-place-top {
    .p-tooltips-arrow, .p-tooltips-arrow:after {
        @include arrow-after-common;
        border-bottom-width: 0;
        left: 50%;
        margin-left: -6px;
    }
    .p-tooltips-arrow {
        border-top-color: $primary;
    }
    .p-tooltips-arrow:after {
        content: '';
        border-top-color: #ffffff;
    }
}
.p-tooltips {
    display: inline-block;
    position: relative;
    margin: 5px 15px;
    .p-tooltips-wapper {
        position: absolute;
        min-width: 15px;
        word-wrap: break-word;
        z-index: 1111;
        background: #ffffff;
        &.p-tooltip-place-default {
            @include place-top;
            @include arrow-place-top;
        }
        &.p-tooltip-place-top {
            @include place-top;
            @include arrow-place-top;
        }
        &.p-tooltip-place-right {
            left: calc(100% + 10px);
            .p-tooltips-arrow, .p-tooltips-arrow:after {
                @include arrow-after-common;
                border-left-width: 0;
                margin-top: -6px;
                top: 50%;
            }
            .p-tooltips-arrow {
                margin-left: -6px;
                border-right-color: $primary;
            }
            .p-tooltips-arrow:after {
                content: '';
                margin-left: 1px;
                border-right-color: #ffffff;
            }

        }
        &.p-tooltip-place-bottom {
            top: 35px;
            left: 50%;
            transform: translateX(-50%);
            .p-tooltips-arrow, .p-tooltips-arrow:after {
                @include arrow-after-common;
                border-top-width: 0;
            }
            .p-tooltips-arrow {
                left: 50%;
                top: -6px;
                margin-left: -6px;
                border-bottom-color: $primary;
            }
            .p-tooltips-arrow:after {
                content: '';
                margin-left: -6px;
                top: 1px;
                border-bottom-color: #ffffff;
            }
        }
        &.p-tooltip-place-left {
            right: calc(100% + 10px);
            .p-tooltips-arrow, .p-tooltips-arrow:after {
                @include arrow-after-common;
                border-right-width: 0;
                margin-top: -6px;
                top: 50%;
            }
            .p-tooltips-arrow {
                left: 100%;
                border-left-color: $primary;
            }
            .p-tooltips-arrow:after {
                content: '';
                margin-left: -7px;
                border-left-color: #ffffff;
            }
        }
        .p-tooltips-content {
            padding: 5px 10px;
            white-space:nowrap;
            border: 1px solid $primary;
            border-radius: 4px;
        }
        .p-tooltips-arrow:after {
            top: -7px;
        }
    }
}
</style>
