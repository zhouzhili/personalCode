<template>
  <div class="mainContainer">
    <div class="listContainer" v-for="item in list">
      <content-list :listItem="item">
      </content-list>
    </div>
  </div>
</template>

<script>
  import contentList from './contentlist.vue'
  import axios from 'axios'

  export default {
    name:'mainContainer',
    data(){
      return{
        list:[]
      }
    },
    mounted(){
      let instance=axios.create({
        baseURL:' https://cnodejs.org/api/v1'
      });
      instance.get('/topics').then((response)=>{
        if(response.status===200){
          this.list=response.data.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    components:{
      contentList
    }
  }
</script>

<style>
  .mainContainer{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #ddd;
    margin: 100px 0;
    background-color: #f9fafc;
  }
  .listContainer{
    padding: 20px;
  }
</style>
