<template>
  <div class="mainContainer">
    <div class="listContainer" v-for="item in list">
      <topic-item :listItem="item"></topic-item>
    </div>
  </div>
</template>

<script>
  import topicItem from './topicItem.vue'
  import moment from 'moment'
  import {getTopicList} from '../mainXHR/getData'

  export default {
    name:'topicList',
    data(){
      return{
        list:[]
      }
    },
    methods:{
      getData(){
        getTopicList().then((data)=>{
          this.list=data;
        },(error)=>{
          console.log(error);
        })
      }
    },
    created(){
      console.log('topicList create');
      this.getData();
    },
    components:{
      topicItem
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
    margin: 20px 0;
    background-color: #f9fafc;
    border-radius: 10px;
  }
  .listContainer{
    padding: 20px;
  }
</style>
