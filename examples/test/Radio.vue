<template>
  <div>
    <div class="division">
      <p-radio text="单选1" v-model="radio" label="1" @change="handleRadioChange"></p-radio>
      <p-radio text="单选2" v-model="radio" label="2" @change="handleRadioChange"></p-radio>
      <p-radio text="单选3" v-model="radio" label="3" @change="handleRadioChange"></p-radio>
    </div>

    <div class="division">
      <p-radio text="单选-选中-禁用"
        v-model="disabledRadio"
        :disabled="true" label="1"
        @change="handleRadioChange"></p-radio>
      <p-radio text="单选-禁用"
      v-model="disabledRadio"
      :disabled="true"
      label="2" @change="handleRadioChange"></p-radio>
    </div>

     <div class="division">
       <p-radio-group v-model="radioGroup" @change="handleRadioGroupChange">
        <p-radio label="1" text="单选组1"></p-radio>
        <p-radio label="2" text="单选组2"></p-radio>
        <p-radio label="3" text="单选组3"></p-radio>
      </p-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RadioTest extends Vue {
  radio : string = '1';
  disabledRadio : string = '1';
  radioGroup : string = '1';

  handleRadioChange = (val: string) => {
    console.log('do radio something', val);
  }

  handleRadioGroupChange = (val: string) => {
    console.log('do radio group something', val);
  }
}
</script>
