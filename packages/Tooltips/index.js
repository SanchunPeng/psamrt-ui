// 导入组件，组件必须声明 name
import Tooltips from './src/Tooltips.vue';

// 为组件提供 install 安装方法，供按需引入
Tooltips.install = function install(Vue) {
  Vue.component(Tooltips.name, Tooltips);
};

// 默认导出组件
export default Tooltips;
