<template>
    <span class="p-popover"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
        ref="popoverRef">
        <slot></slot>
        <div class="p-popover-wapper"
            :style="popoverStyle"
            v-show="popoverItemShow">
            <div class="p-popover-item"
                v-clickoutside="handleClickOutside">
                <div class='item-hedader'>{{title}}</div>
                <div class='item-content'>{{content}}</div>
            </div>
            <span :class="'popover-item-arrow' + arrowType" :style="arrowStyle"></span>
        </div>
    </span>
   
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch, Emit } from 'vue-property-decorator';
import CommonPropsMethodMixin from '@/mixins/mixins';
import { StyleAllObject } from '@/utils/utils';
import clickoutside from '@/directive/clickoutside';

@Component({
    name: 'PPopover',
    mixins: [CommonPropsMethodMixin],
    directives: {clickoutside},
})

export default class PPopover extends Vue {
   @Prop() title !: string;

   @Prop() content !: string;

   @Prop() width !: string;

   @Prop() trigger !: string;

   popoverItemShow : boolean = false

   popoverItem : any;

   popover : any;

   popoverStyle : StyleAllObject = { left: '', width: '', top: '', bottom: '', right: '' };

   arrowStyle : StyleAllObject = { left: '', width: '', top: '', bottom: '', right: '' };

   popoverShowPositionTop : boolean = false;

   mounted() {
    this.popoverStyle.width = this.width ? this.width : '150px';
    this.popover = this.$refs.popoverRef;
    this.setIsShowTop();
   }
   
   setIsShowTop() {
    let { top, left, right, bottom} = this.popover.getBoundingClientRect();
    let width = right - left;
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    let offset = (parseInt(this.width) - width) / 2;
    if (top > (innerHeight - bottom)) {
        this.popoverShowPositionTop = true;
        this.popoverStyle.bottom = `${bottom - top + 10}px`;
    } else {
        this.popoverShowPositionTop = false;
        this.popoverStyle.top = `${bottom - top + 10}px`;
    }
    if (left < offset) {
        this.popoverStyle.left = '5px;'
        this.arrowStyle.left = `${left + width / 2 - 11}px`;
    } else if ((innerWidth - right) < offset) {
        this.popoverStyle.right = '5px;'
        this.arrowStyle.right = `${innerWidth - right + width / 2 - 11}px`;
    } else {
        this.popoverStyle.left = `${-offset}px`;
        this.arrowStyle.left = `${parseInt(this.width) / 2 - 6}px`;
    }
   }

   get arrowType() {
       return this.popoverShowPositionTop ? ' arrow-top' : ' arrow-bottom';
   }

   handleMouseEnter() {
    this.trigger === 'hover' && (this.popoverItemShow = true);
   }

   handleMouseLeave() {
    this.trigger === 'hover' && (this.popoverItemShow = false);
   }

   handleClick() {
    this.trigger === 'click' && (this.popoverItemShow = true);
   }

   handleClickOutside() {
    this.trigger === 'click' && (this.popoverItemShow = false);
   }
}
</script>

<style lang="scss" scoped>
  .p-popover {
    padding: 10px 15px;
    position: relative;

    .p-popover-wapper {
        position: absolute;
        z-index: 1111;

        .p-popover-item {
            padding: 20px;
            border: 1px solid $disabledBorder;
            box-shadow:2px 2px 6px $disabledBorder;
            background: #ffffff;
            border-radius: 4px;
            .item-hedader {
                padding-bottom: 20px;
                font-weight: 500;
                font-size: 16px;
            }
            .item-content {
                color: $disabledText;
                font-size: 14px;
            }
        }
        .popover-item-arrow, .popover-item-arrow:after {
            @include arrow-after-common;
        }
        .popover-item-arrow:after {
            content: '';
            border-top-color: #ffffff;
            top: -7px;
            margin-left: -6px;
        }
        .popover-item-arrow {
            border-top-color: $disabledBorder;
        }
    } 

    
  }

</style>


