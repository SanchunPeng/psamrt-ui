<template>
  <div class="division">
    <p-carousel height="200px"
      @change="handleCarouselChange">
      <p-carousel-item v-for="(item, index) in 4" :key="index">
        <h3>{{item}}</h3>
      </p-carousel-item>
    </p-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CarouselTest extends Vue {
  handleCarouselChange = (pre: number, next: number) => {
    console.log('handleCarouselChange');
  }
}
</script>
<style lang="scss">
  .p-carousel {
    width: 500px;
  }
</style>
