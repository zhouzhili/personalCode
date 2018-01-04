<template>
  <div class="listWrap">
    <div class="authorImg">
      <img :src="listItem.author.avatar_url" :title="listItem.author.loginname"/>
    </div>
    <div class="titleWrap">
      <div class="title">
        <router-link :to="{name:'articleRoute',params:{id:listItem.id}}">
          {{listItem.title}}
        </router-link>
      </div>
      <div class="tips">
        <div>
          <span>回复:</span>
          <span> {{listItem['reply_count']}} </span>
        </div>
        <div>
          <span>创建于:</span>
          <span>{{listItem['create_at']}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'topic-item',
    props:['listItem']
  }
</script>

<style>
  .listWrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding-bottom: 16px;
    margin-bottom: 5px;
  }
  .authorImg{
    margin-right: 20px;
  }
  .authorImg>img{
    max-height: 70px;
  }
  .titleWrap{
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title{
    font-size: 23px;
    font-weight: 800;
    color: #646363;
  }
  .title>a{
    cursor: pointer;
    text-decoration: none;
    color: #1d1a87
  }
  .title>a:hover{
    text-decoration: underline;
  }
  .tips{
    display: flex;
    color: #727272;
  }
  .tips>div{
    margin-right: 40px;
  }
</style>
