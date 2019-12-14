<template>
  <div class="input-test">
    <div class="division">
      <div class="input-container">
      <p-input
        type="text"
        placeholder="请输入..."
        size="small"
        v-model="inputValue1"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        @change="handleInputChange"
        ></p-input>
      <span>{{inputValue1}}</span>
      </div>
      <div class="input-container">
      <p-input
        type="text"
        placeholder="请输入..."
        size="small"
        v-model="inputValue2"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        @change="handleInputChange"
      >
      <i slot="suffix" class="p-input_icon p-icon-flow-determine"></i>
      </p-input>
      <span>{{inputValue2}}</span>
      </div>
      <div class="input-container">
      <p-input
        type="text"
        placeholder="请输入..."
        size="small"
        v-model="inputValue3"
        :disabled="true"
      ></p-input>
      <span>{{inputValue3}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  inputValue1 : string = '';

  inputValue2 : string = '';

  inputValue3 : string = '';

  handleInputFocus = (val: object) => {
    console.log('do handleInputFocus', val);
  }

  handleInputChange = (val: string) => {
    console.log('do handleInputChange', val);
  }

  handleInputBlur = (val: object) => {
    console.log('do handleInputBlur', val);
  }

}
</script>

<style lang="scss">
  .division {
    .input-container + .input-container {
      margin-top: 20px;
    }
    .p-input {
      width: 200px !important;
      margin-right: 15px;
    }
  } 

</style>
