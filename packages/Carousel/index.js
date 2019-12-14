// 导入组件，组件必须声明 name
import Carousel from './src/Carousel.vue';

// 为组件提供 install 安装方法，供按需引入
Carousel.install = function install(Vue) {
  Vue.component(Carousel.name, Carousel);
};

// 默认导出组件
export default Carousel;
