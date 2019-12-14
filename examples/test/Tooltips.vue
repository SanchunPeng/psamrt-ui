<template>
  <div class="division">
    <p-tooltips content="你好好呀" placement="top"><p-button text="上边" size="small"/></p-tooltips>
    <p-tooltips content="你好好呀" placement="bottom"><p-button text="下边" size="small"/></p-tooltips>
    <p-tooltips content="你好好呀" placement="left"><p-button text="左边" size="small"/></p-tooltips>
    <p-tooltips content="你好好呀" placement="right"><p-button text="右边" size="small"/></p-tooltips>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
 
@Component
export default class TooltipsTest extends Vue {
}
</script>
