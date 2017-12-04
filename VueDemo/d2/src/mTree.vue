<template>
  <div class="tree">
    <li>
      <div @click="toggle" class="header">
        <span v-if="isFolder">
          [{{open ? '-' : '+'}}]
        </span>
        {{data.name}}
      </div>
      <ul v-show="open">
        <m-tree v-for="item in data.children" :data="item"></m-tree>
      </ul>
    </li>
  </div>
</template>

<script>
  import Bus from './bus'
  export default {
    name: 'mTree',
    props: ['data'],
    data() {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.data.children && this.data.children.length;
      }
    },
    methods: {
      toggle: function () {
        this.$emit('tree',this.data.name);

        if(this.isFolder){
          this.open = !this.open;
        }else {
          console.log('tree',this.data.name);
          Bus.$emit('tree',this.data.name);
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .tree {
    font-size: 20px;
    width: 300px;
    margin-top: 20px;
    overflow: hidden;
  }

  li {
    padding: 5px;
    background-color: #cccccc;
  }
  .header{
    border-bottom: 1px solid #afacac;
    cursor: pointer;
  }
</style>
