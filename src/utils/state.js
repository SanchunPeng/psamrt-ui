export default {
  radioGroup: [],
  radioGroupValue: '',
  selectValue: '',
  hoverVaue: '',
  selectLabel: '',
  cascaderFocus: false,
  cascaderValue: '',
  cascaderLabel: '',
  cascaderSeconeLabel: '',
  cascadeThreeLabel: '',
  getRadioGroupValue: function (){
    return this.radioGroupValue;
  },
  refreshRadioGroupValue(value) {
    this.radioGroupValue = value;
  },
  getCheckboxGroupList() {
    return this.checkboxGroupList;
  },
  refreshCheckboxGroupValue(value) {
    this.checkboxGroupList = value;
  },
  getSelectValue() {
    return this.selectValue;
  },
  getHoverValue() {
    return this.hoverVaue;
  },
  getSelectLabel() {
    return this.selectLabel;
  },
  refreshSelectValue(value) {
    this.selectValue = value;
  },
  refreshHoverValue(value) {
    this.hoverVaue = value;
  },
  refreshSelectLabel(value) {
    this.selectLabel = value;
  },
  getCascaderFocus() {
    return this.cascaderFocus;
  },
  getCascaderValue() {
    return this.cascaderValue;
  },
  getCascaderLabel() {
    return this.cascaderLabel;
  },
  getCascaderSecondLabel() {
    return this.cascaderSeconeLabel;
  },
  getCascaderThreeLabel() {
    return this.cascadeThreeLabel;
  },
  refreshCascaderFocus(value) {
    this.cascaderFocus = value;
  },
  refreshCascaderValue(value) {
    this.cascaderValue = value;
  },
  refreshCascaderLabel(value) {
    this.cascaderLabel = value;
  },
  refreshCascaderSecondLabel(value) {
    this.cascaderSeconeLabel = value;
  },
  refreshCascaderThreeLabel(value) {
    this.cascadeThreeLabel = value;
  }
}