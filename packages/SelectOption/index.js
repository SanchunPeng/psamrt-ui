// 导入组件，组件必须声明 name
import SelectOption from './src/SelectOption.vue';

// 为组件提供 install 安装方法，供按需引入
SelectOption.install = function install(Vue) {
  Vue.component(SelectOption.name, SelectOption);
};

// 默认导出组件
export default SelectOption;
