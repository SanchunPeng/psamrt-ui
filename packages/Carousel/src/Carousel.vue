<template>
    <div class="p-carousel" :style="{height: height}">
        <div class="p-carousel-wapper">
            <div class="p-carousel-bottons-left"></div>
            <div class="p-carousel-bottons-right"></div>
            <slot></slot>
        </div>
        <ul class="p-carousel-bottons">
            <li v-for="(item, index) in carouselItemLen"
                @click="handleActiveClick(index)"
                :key="index"
                :class="['p-carousel-li', getActiveIndex === index ? 'is-active' : '']">
                <span class="p-carousel-botton"></span>
            </li>

        </ul>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';


@Component({
    name: 'PCarousel'
})

export default class PCarousel extends Vue {
    @Prop() height !: string;

    activeIndex : number = 0;

    carouselItemLen : number = 0;

    @Mutation refreshActiveIndex !: (value: number) => void;

    @Getter getActiveIndex !: number;

    mounted() {
        this.activeIndex = 0;
        this.carouselItemLen = this.$children.length;
    }
    handleActiveClick (index: number) {
        this.refreshActiveIndex(index);
    }
}
</script>
<style lang="scss" scoped>
    .p-carousel {
        overflow-x: hidden;
        position: relative;
        .p-carousel-wapper {
            .p-carousel-bottons-left, .p-carousel-bottons-right {
                border-radius: 50%;
                width: 50px;
                height: 50px;
                
            }
            .p-carousel-bottons-left {

            }
            .p-carousel-bottons-right {
                
            }
        }
        .p-carousel-bottons {
            position: absolute;
            list-style: none;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
            padding: 0;
            z-index: 2;
            .p-carousel-li {
                display: inline-block;
                background-color: transparent;
                padding: 12px 4px;
                cursor: pointer;
                &:hover .p-carousel-botton, &.is-active .p-carousel-botton {
                    background-color: #ffffff;
                }
                .p-carousel-botton {
                    display: inline-block;
                    width: 30px;
                    height: 2px;
                    background-color: $carouselItemButtons;
                    padding: 0;
                }
            }
        }
    }

    
</style>


