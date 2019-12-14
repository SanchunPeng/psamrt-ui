<template>
  <div class="division">
    <p-badge v-model="badgeValue" type="success" :hidden="isHidden" @click="handleBadgeClick">
      <p-button text="评论"></p-button>
    </p-badge>
    <p-badge v-model="badgeValue1" type="warning" :hidden="isHidden1" @click="handleBadgeClick1">
      <p-button text="评论"></p-button>
    </p-badge>
    <p-badge v-model="badgeValue2" :hidden="isHidden2" @click="handleBadgeClick2">
      <p-button text="评论"></p-button>
    </p-badge>
    <p-badge :isHot="true" :hidden="isHidden3" @click="handleBadgeClick3">
      <p-button text="评论"></p-button>
    </p-badge>
    <p-badge v-model="badgeValue3" type="error" :hidden="isHidden4" :max="99" @click="handleBadgeClick4">
      <p-button text="评论"></p-button>
    </p-badge>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BadgeTest extends Vue {
  isHidden : boolean = false;

  isHidden1 : boolean = false;

  isHidden2 : boolean = false;

  isHidden3 : boolean = false;

  isHidden4 : boolean = false;
  
  badgeValue : number = 30;

  badgeValue1 : number = 2;

  badgeValue2 : number = 10;

  badgeValue3 : number = 100;

  handleBadgeClick() {
    this.isHidden = true
  }

  handleBadgeClick1() {
    this.isHidden1 = true
  }

  handleBadgeClick2() {
    this.isHidden2 = true
  }

  handleBadgeClick3() {
    this.isHidden3 = true
  }

  handleBadgeClick4() {
    this.isHidden4 = true
  }
}
</script>
