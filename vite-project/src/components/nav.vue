<template>
  <div class="menu-demo">
    <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_1']"
      show-collapse-button
    >
      <a-sub-menu key="0">
        <template #icon v-on:><icon-apps></icon-apps></template>
        <template #title>分类</template>
        <a-menu-item key="0_0" v-on:click="showItroduction()">个人简介</a-menu-item>
        <a-menu-item key="0_1" v-on:click="showCode()">编程</a-menu-item>
        <a-menu-item key="0_2" disabled>开发中</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>标签</template>
        <a-menu-item key="1_0" disabled>#css</a-menu-item>
        <a-menu-item key="1_1" disabled>#html</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-vue/es/icon';
import 'vue-router'
import router from '../router';
export default {
  name:'nav',
  components: {
    IconMenuFold,
    IconMenuUnfold,
    IconApps,
    IconBug,
    IconBulb,
  },
  data(){

  },
  methods: {
    showItroduction(){
      router.push('../components/introduction')
},
  showCode(){
    router.push('../components/code') 

  }
  }
};
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  padding: 40px;
  background-color: var(--color-neutral-2);
  position: relative;
  left: 10%;
}
</style>
