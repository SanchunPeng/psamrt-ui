// 导入组件，组件必须声明 name
import Progress from './src/Progress.vue';

// 为组件提供 install 安装方法，供按需引入
Progress.install = function install(Vue) {
  Vue.component(Progress.name, Progress);
};

// 默认导出组件
export default Progress;
