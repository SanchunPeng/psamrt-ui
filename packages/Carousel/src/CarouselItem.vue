<template>
    <div class="p-carousel-item"
        :style="carouselItemStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
import { StyleTransformObject } from '@/utils/utils';

import { Getter } from 'vuex-class';

@Component

export default class CarouselItem extends Vue {
    @Prop() label !: string;

    @Prop() name !: string;

    carouselItemStyle : StyleTransformObject = { transform: '', scale: '' };

    carousel : any = null;

    @Getter getActiveIndex !: number;

    carouselWidth : number = 0;

    mounted() {
        let parent = this.$parent;
        if (parent.$options.name === 'Carousel') {
            this.carousel = parent
        }
        this.carousel && (this.carouselWidth = this.carousel.$el.offsetWidth);
        let index = this.carousel.$children.indexOf(this)
        this.setTransformValue(index)
    }

    @Watch('getActiveIndex')
    onGetActiveIndexChange (newV: number, oldV: number) {
        this.setTransformValue(newV);
    }
    setTransformValue(index: number) {
        if (index === this.getActiveIndex) {
            this.carouselItemStyle.transform = "0px";
        } else {
            this.carouselItemStyle.transform = `translateX(${index * this.carouselWidth}px)`;
        }
    }

    
}
</script>
<style lang="scss" scoped>
    .p-carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
        z-index: 0;
        background-color: $disabledText;

        h3 {
            line-height: 100%;
            height: 100%;
            text-align: center;
            color: #ffffff;
        }
    }
</style>


