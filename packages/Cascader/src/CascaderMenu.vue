<script lang="tsx">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';
import { CreateElement } from 'vue';
import CommonPropsMethodMixin, { CascaderOption } from '@/mixins/mixins';
import { Mutation, Getter } from 'vuex-class';

@Component({
  components: {
  },
  mixins: [CommonPropsMethodMixin]
})

export default class PCascaderMenu extends Vue {
  @Prop() size !: string;

  @Prop() firstOption !: Array<CascaderOption>;

  @Getter getCascaderLabel !: string;

  @Getter getCascaderSecondLabel !: string;

  @Getter getCascaderThreeLabel !: string;

  @Mutation refreshCascaderLabel !: (value: string) => void;

  @Mutation refreshCascaderSecondLabel !: (value: string) => void;

  @Mutation refreshCascaderThreeLabel !: (value: string) => void;

  @Mutation refreshCascaderFocus !: (value: boolean) => void;

  @Mutation refreshCascaderValue !: (value: string) => void;

  secondOption : Array<CascaderOption> = [];

  threeOption : Array<CascaderOption> = [];

  get menuSize() {
    return this.getComponentSize('p-cascader-menu', this.size)
  }

  cascaderMenuClick(item: CascaderOption, type: number) {
    const isChildren : boolean = item.children && item.children.length > 0;
    if (type === 1) {
      this.secondOption = isChildren ? item.children : [];
      !isChildren && this.refreshCascaderFocus(false);
      this.refreshCascaderLabel(item.label);
      this.refreshCascaderValue(item.value);
      !isChildren && this.refreshCascaderSecondLabel('');
      !isChildren && this.refreshCascaderThreeLabel('');
      !isChildren && this.$emit('change', item.value)
      this.threeOption = [];
    } else if (type === 2) {
      this.threeOption = isChildren ? item.children : [];
      !isChildren && this.refreshCascaderFocus(false);
      this.refreshCascaderSecondLabel(item.label);
      !isChildren && this.refreshCascaderThreeLabel('');
      this.refreshCascaderValue(item.value);
      !isChildren && this.$emit('change', item.value)
    } else {
      this.refreshCascaderFocus(false);
      this.refreshCascaderThreeLabel(item.label);
      this.refreshCascaderValue(item.value);
      this.$emit('change', item.value)
    }
  }

  render (h: CreateElement) {
    return (
      <div class={"p-cascader-menu" + this.menuSize}>
        {this.firstOption && <ul class="p-cascader-group">{
          this.firstOption.map((item, index) => (
            <li class={
              {
              'p-cascader-item': true,
              'p-icon-right-line': (item.children && item.children.length > 0),
              'is-selected': (this.getCascaderLabel === item.label)
            }} key={index} onClick={this.cascaderMenuClick.bind(this, item, 1)}>{item.label}</li>
          )
        )
        }</ul>}
        
        {this.secondOption && this.secondOption.length > 0 && <ul class="p-cascader-group">{
          this.secondOption.map((item, index) => (
            <li class={
              {
                'p-cascader-item': true,
                'p-icon-right-line': (item.children && item.children.length > 0),
                'is-selected': (this.getCascaderSecondLabel === item.label)
            }} key={index} onClick={this.cascaderMenuClick.bind(this, item, 2)}>{item.label}</li>
          )
        )
        }</ul>}
        
        {this.threeOption && this.threeOption.length > 0 && <ul class="p-cascader-group">{
          this.threeOption.map((item, index) => (
            <li class={
              {
                'p-cascader-item': true,
                'is-selected': (this.getCascaderThreeLabel === item.label)
            }} key={index} onClick={this.cascaderMenuClick.bind(this, item, 3)}>{item.label}</li>
          )
        )
        }</ul>}
      </div>
    )    
  }
}
</script>

<style lang="scss">
.p-cascader-menu {
    &.p-cascader-menu-small {
      font-size: 12px;
      .p-cascader-group .p-cascader-item {
        @include setFontAndHeight($smallInputHeight, 12px);
      }
    }
    &.p-cascader-menu-default {
      font-size: 14px;
      .p-cascader-group .p-cascader-item {
        @include setFontAndHeight($defaultInputHeight, 14px);
      }
    }
    &.p-cascader-menu-large {
      font-size: 16px;
      .p-cascader-group .p-cascader-item {
        @include setFontAndHeight($largeIputHeight, 16px);
      }
    }
    .p-cascader-group {
      display: inline-block;
      position: relative;
      list-style: none;
      padding: 5px 0;
      .p-cascader-item {
        min-width: 140px;
        font-size: 14px;
        padding: 0 15px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: $defaultFontColor;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        &.is-selected{
          color: $primary;
        }
        &:hover {
          background: $defaultHover;
        }
        &.p-icon-right-line {
          padding-right: 30px;
          &:before {
              position: absolute;
              right: 5px;
          }
        }
      }
    }
    .p-cascader-group + .p-cascader-group {
      border-left: 1px solid $defaultBorder;
    }
}


</style>
