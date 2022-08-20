<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import navs from './components/nav.vue'
import warmword from './components/warmword.vue'
import Warmword from './components/warmword.vue';
</script>

<template>
<img src="./img/top.png" alt="">
  <navs />
  <div id="container">
    <router-view ></router-view>
  </div>
  <div class="word">
    <Warmword />
  </div>
  
  
</template>

