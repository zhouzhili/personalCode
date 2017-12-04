<template>
  <div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th v-for="header in headers">
          {{header.key}}
        </th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='(item,index) in items'>
        <td>{{item.name}} </td>
        <td>{{item.age}} </td>
        <td>{{item.city}} </td>

        <td>
          <button class="btn btn-danger" v-on:click="remove(index)">删除</button>
        </td>
      </tr>
      <tr>
        <td><input v-model="info.name"/></td>
        <td><input v-model="info.age"/></td>
        <td><input v-model="info.city"/></td>
        <td><button class="btn btn-primary" @click="add">添加</button></td>
      </tr>
      </tbody>
    </table>
    <div class="test">
      <button class="btn btn-primary" @click="test">测试事件</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mTable',
    props:['items'],
    data() {
      return {
        info:{
          name:'',age:'',city:''
        },
        headers: [
          {key: '姓名'},
          {key: '年龄'},
          {key: '城市'}
        ]
      }
    },
    methods:{
      remove:function (index) {
        this.items.splice(index,1)
      },
      add:function () {
        this.items.push(this.info);
        this.info={name:'',age:'',city:''}
      },
      test(){
        this.$emit('test','from table');
      }
    }
  }
</script>

<style>
  table {
    margin: 20px;
    font-size: 20px;
    width: 400px;
  }
  .test{
    margin-top:30px;
  }
</style>

