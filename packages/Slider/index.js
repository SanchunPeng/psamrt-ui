// 导入组件，组件必须声明 name
import Slider from './src/Slider.vue';

// 为组件提供 install 安装方法，供按需引入
Slider.install = function install(Vue) {
  Vue.component(Slider.name, Slider);
};

// 默认导出组件
export default Slider;
