<template>
  <el-container class="main">
    <el-aside>
      <el-tree :data="treeData" :props="defaultProps" @node-click="treeNodeClick"></el-tree>
    </el-aside>
    <el-main>main</el-main>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      treeData: [
        {
          label:'一级菜单 1',
          children:[
            {
              label:'二级菜单 1-1'
            },{
              label:'二级菜单 1-2'
            }
          ]
        },
        {
          label:'一级菜单 2',
          children:[
            {
              label:'二级菜单 2-1'
            },{
              label:'二级菜单 2-2'
            }
          ]
        },
        {
          label:'一级菜单 3',
          children:[
            {
              label:'二级菜单 3-1'
            },{
              label:'二级菜单 3-2'
            }
          ]
        },
        {
          label:'一级菜单 4',
          children:[
            {
              label:'二级菜单 4-1'
            },{
              label:'二级菜单 4-2'
            }
          ]
        }
      ],
      defaultProps:{
        children:'children',
        label:'label'
      }
    }
  },
  methods:{
    treeNodeClick:function (data) {
      console.log(data);
    }
  }
}
</script>

<style>
.main{
  margin: 30px;
}
</style>
