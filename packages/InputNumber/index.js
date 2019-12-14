// 导入组件，组件必须声明 name
import InputNumber from './src/InputNumber.vue';

// 为组件提供 install 安装方法，供按需引入
InputNumber.install = function install(Vue) {
  Vue.component(InputNumber.name, InputNumber);
};

// 默认导出组件
export default InputNumber;
