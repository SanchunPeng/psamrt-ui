// 导入组件，组件必须声明 name
import Select from './src/Select.vue';

// 为组件提供 install 安装方法，供按需引入
Select.install = function install(Vue) {
  Vue.component(Select.name, Select);
};

// 默认导出组件
export default Select;
