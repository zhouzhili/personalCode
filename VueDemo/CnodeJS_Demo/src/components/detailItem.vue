<template>
  <div>
    <div class="content">
      <div class="content-title">
        <h1>{{contentData.title}} </h1>
        <div class="content-tips">
          <div>发布于 {{contentData.create_at}} </div>
          <div>作者 {{contentData.author.loginname}} </div>
          <div>访问数 {{contentData.visit_count}} </div>
          <div>回复数 {{contentData.reply_count}} </div>
        </div>
      </div>
      <div v-html="contentData.content"></div>
    </div>

    <div class="reply content">
      <div class="reply-title">回复 {{contentData.replies.length}}</div>
      <div class="reply-content" v-for="reply in contentData.replies">
        <div class="reply-author">
          <span>
            <img :src="reply.author.avatar_url"/>
          </span>
          <span class="author-name">{{reply.author.loginname}}</span>
          <span class="reply-tips">{{reply.create_at}}</span>
        </div>
        <div v-html="reply.content" class="reply-word"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'detailItem',
    props:['contentData']
  }
</script>

<style>
  .content{
    flex-basis: 100%;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    color:#333;
  }
  .content img{
    max-width: 400px;
    max-height: 400px;
  }
  .content-title{
    border-bottom: 1px solid #d0d0d0;
    padding-bottom: 10px;
    background-color: #fff;
  }
  .content-tips{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #6a6a6a;
  }
  .content-tips>div{
    margin-right: 10px;
  }
  .content-tips>div:after{
    content: '•';
  }
  .content-tips>div:last-child:after{
    content: '';
  }
  .reply{
    padding: 0;
    margin-top: 20px;
  }
  .reply-title{
    height: 50px;
    background-color: #eaeaea;
    border-radius: 10px 10px 0 0;
    margin-bottom: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: #575757;
  }
  .reply-content{
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  .reply-author{
    display: flex;
  }
  .reply-author>span>img{
    width: 50px;
    height: 50px;
  }
  .reply-author>span{
    margin-right: 8px;
  }
  .author-name{
    font-size: 18px;
    color: #666;
    font-weight: 700;
  }
  .reply-tips{
    color:#3c3cf5
  }
  .reply-word{
    font-size: 18px;
    padding: 10px 40px
  }
</style>
