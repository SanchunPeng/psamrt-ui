// 导入组件，组件必须声明 name
import CheckboxGroup from './src/CheckboxGroup.vue';

// 为组件提供 install 安装方法，供按需引入
CheckboxGroup.install = function install(Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};

// 默认导出组件
export default CheckboxGroup;
