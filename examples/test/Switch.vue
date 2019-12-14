<template>
    <div class="division">
      <p-switch
        v-model="switchSmallValue"
        size="small"
        @change="handleSwitchChange"
      >
      </p-switch>
       <p-switch
        v-model="switchSmallValue"
        size="small"
        :disabled="true"
        @change="handleSwitchChange"
      >
      </p-switch>
      <p-switch
        v-model="switchValue"
        @change="handleSwitchChange"
      >
      </p-switch>
      <p-switch
        v-model="switchDefaultValue"
        active-text="你好"
        inactive-text="不好"
        @change="handleSwitchChange"
      >
      </p-switch>
      <p-switch
        v-model="switchLargeValue"
        size="large"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="handleSwitchChange"
      >
      </p-switch>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SwitchTest extends Vue {

  switchValue: boolean = false;

  switchSmallValue: boolean = false;

  switchLargeValue: boolean = false;

  switchDefaultValue: boolean = false;

  handleSwitchChange = (val: boolean) => {
    console.log('do handleSwitchChange', val);
  }
}
</script>
<style lang="scss">
  .p-cascader {
    width: 200px;
    margin-right: 15px;
  }
</style>
