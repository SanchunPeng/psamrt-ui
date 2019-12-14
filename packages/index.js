import Button from './Button';
import Badge from './Badge';
// import Carousel from './Carousel';
// import Cascader from './Cascader';
import CheckBox from './CheckBox';
import CheckBoxGroup from './CheckBoxGroup';
import Input from './Input';
import InputNumber from './InputNumber';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import Rate from './Rate';
import Select from './Select';
import SelectOption from './SelectOption';
import Slider from './Slider';
import Switch from './Switch';
import Tooltips from './Tooltips';

// 存储组件列表
const components = [
  Button,
  Badge,
  // Carousel,
  // Cascader,
  CheckBox,
  CheckBoxGroup,
  Input,
  InputNumber,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Select,
  Slider,
  Switch,
  Tooltips,
  SelectOption
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function install(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件，直接引入文件全部注册
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components,
};
