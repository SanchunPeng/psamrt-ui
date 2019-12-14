<template>
  <div class="division">
    <p-input-number
      v-model="inputNumberValue"
      size="small"
      :min='1'
      :max="100"
      @change="handleInputNumberChange"
    ></p-input-number>
      <p-input-number
      v-model="inputNumberValue2"
      size="default"
      @change="handleInputNumberChange"
    ></p-input-number>
      <p-input-number
      v-model="inputNumberValue3"
      size="large"
      :disabled="true"
      @change="handleInputNumberChange"
    ></p-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InputNumberTest extends Vue {
  inputNumberValue: number = 0;

  inputNumberValue2: number = 0;

  inputNumberValue3: number = 0;

  handleInputNumberChange = (val: number) => {
    console.log('do handleInputNumberChange', val);
  }
}
</script>
