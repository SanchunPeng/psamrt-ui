<template>
  <div class="division">
      <p-cascader
        :option="cascaderOptions"
        size="small"
        v-model="cascaderValue"
        @change="handleCascaderChange"
        @focus="handleInputFocus"
        >
      </p-cascader>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CascaderTest extends Vue {
  cascaderValue : string = '1';

  cascaderOptions = [
    {
      value: '1',
      label: '选项1',
      children: [{
        value: '11',
        label: '选项11',
      }, {
        value: '12',
        label: '选项12',
      }, {
        value: '13',
        label: '选项13',
        children: [{
          value: '131',
          label: '选项131',
        }, {
          value: '132',
          label: '选项132',
        }, {
          value: '133',
          label: '选项133',
        }, {
          value: '134',
          label: '选项134',
        }],
      }, {
        value: '14',
        label: '选项14',
      }],
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

  handleCascaderChange = (val: string) => {
    console.log('do handleCascaderChange', val);
  }

  handleInputFocus = (val: object) => {
    console.log('do handleInputFocus', val);
  }
}
</script>
<style lang="scss">
  .p-cascader {
    width: 200px;
    margin-right: 15px;
  }
</style>
