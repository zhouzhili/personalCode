<template>
  <div class="detailCon">
    <detail-item :contentData="contentData"></detail-item>
  </div>
</template>

<script>
  import detailItem from './detailItem.vue'
  import {getDetailContent} from '../mainXHR/getData'

  export default {
    name:'detailContent',
    data(){
      return{
        contentData:{
          create_at:'',
          author:{loginname:''},
          visit_count:'',
          reply_count:'',
          content:'',
          replies:[]
        }
      }
    },
    beforeCreate(){
      let id=this.$route.params.id;
      console.log('detail',id);
      getDetailContent(id).then((data)=>{
        this.contentData=data;
      },(error)=>{
        console.log('获取详细数据失败',error);
      })
    },
    components:{
      detailItem,
    }
  }
</script>

<style>
  .detailCon{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
  }

</style>
