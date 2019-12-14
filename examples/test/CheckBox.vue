<template>
  <div>
    <div class="division">
      <p-checkbox text="多选1" v-model="checkboxVlaue" label="1" @change="handleCheckboxChange"></p-checkbox>
      <!-- <p-checkbox text="多选2" v-model="checkboxVlaue" label="2" @change="handleCheckboxChange"></p-checkbox>
      <p-checkbox text="多选3" v-model="checkboxVlaue" label="3" @change="handleCheckboxChange"></p-checkbox> -->
    </div>

    <div class="division">
      <p-checkbox text="多选-选中-禁用"
        v-model="checkboxCheckedVlaue"
        :disabled="true" label="1"
        @change="handleCheckboxChange"></p-checkbox>
      <p-checkbox text="多选-禁用"
      v-model="checkboxDisabedVlaue"
      :disabled="true"
      label="2" @change="handleCheckboxChange"></p-checkbox>
    </div>

     <!-- <div class="division">
       <p-checkbox-group v-model="checkboxGroupList" @change="handleCheckboxGroupChange">
        <p-checkbox label="1" text="多选组1"></p-checkbox>
        <p-checkbox label="2" text="多选组2"></p-checkbox>
        <p-checkbox label="3" text="多选组3"></p-checkbox>
      </p-checkbox-group>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CheckBox extends Vue {
  checkboxVlaue : boolean = true;

  checkboxCheckedVlaue : boolean = true;

  checkboxDisabedVlaue : boolean = false;

  checkboxGroupList : string[] = ['1', '2', '5'];

  handleCheckboxChange = (val: boolean) => {
    console.log('do checkbox something', val);
  }

  handleCheckboxGroupChange = (val: string[]) => {
    console.log('do checkbox group something', val);
  }
}
</script>