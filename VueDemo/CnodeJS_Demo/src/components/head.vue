<template>
  <div class="head" v-bind:style="defaultThem">
    <header>
      <a href="https://cnodejs.org/" title="NodeJS中文社区主站">
        <img src="../assets/logo.svg">
      </a>
      <div class="about">
        <span>关于</span>
      </div>
    </header>
    <div class="changeColor" @click="changeColor">
      <span>换肤</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c_head',
    data() {
      return {
        defaultThem: {
          'backgroundColor': '#324057'
        }
      }
    },
    methods: {
      changeColor() {
        let currentColor = this.defaultThem.backgroundColor;
        this.defaultThem.backgroundColor = currentColor === '#324057' ? '#444' : '#324057';
      }
    }
  }
</script>

<style>
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
  }

  .about {
    font-size: 20px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }

  header {
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  header > a > img {
    height: 40px;
  }

  .changeColor {
    width: 60px;
    color: #a9a9a9;
    cursor: pointer;
  }
</style>
