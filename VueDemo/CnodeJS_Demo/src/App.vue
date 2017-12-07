<template>
  <div id="app">
    <c_head></c_head>
    <c_main_container v-show="!flag"></c_main_container>

  </div>
</template>

<script>

import c_main_container from './components/mainContainer.vue'
import c_head from './components/head.vue'

export default {
  name:'app',
  data(){
    return{
      flag:true
    }
  },
  components:{
    c_head,
    c_main_container
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
