// 导入组件，组件必须声明 name
import Checkbox from './src/Checkbox.vue';

// 为组件提供 install 安装方法，供按需引入
Checkbox.install = function install(Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

// 默认导出组件
export default Checkbox;
