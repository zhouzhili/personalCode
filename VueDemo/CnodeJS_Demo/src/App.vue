<template>
  <div id="app">
    <c_head></c_head>
    <router-view name="main"></router-view>
  </div>
</template>

<script>

import c_head from './components/head.vue'
import './assets/markdown.css'

export default {
  name:'app',
  components:{
    c_head
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    background-color: #e1e1e1;
  }
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
