<template>
  <div class="division">
    <p-select
      type="text"
      placeholder="请输入..."
      size="small"
      v-model="selectValue"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      @change="handleInputChange"
      >
      <!-- <p-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </p-option> -->
    </p-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SelectTest extends Vue {
  selectValue : string = '1';

  selectOptions: object[] = [
    {
      value: '1',
      label: '选项1',
    }, {
      value: '2',
      label: '选项2',
    }, {
      value: '3',
      label: '选项3',
    }, {
      value: '4',
      label: '选项4',
    },
  ];

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
  .p-select {
    width: 200px;
    margin-right: 15px;
  }
</style>
