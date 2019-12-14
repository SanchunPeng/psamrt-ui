<template>
  <div>
    <div class="division">
      <p-button text="default"/>
      <p-button text="primary" type="primary"/>
      <p-button text="success" type="success"/>
      <p-button text="error" type="error"/>
      <p-button text="warning" type="warning"/>
    </div>
    <div class="division">
      <p-button text="small" size="small"/>
      <p-button text="default"/>
      <p-button text="large" size="large"/>
    </div>
    <div class="division">
      <p-button text="small" size="small" type="primary"/>
      <p-button text="primary" type="primary"/>
      <p-button text="large" size="large" type="primary"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ButtonTest extends Vue {
}
</script>
<style lang="scss">
  .p-button{
    margin-right: 10px;
  }
</style>
