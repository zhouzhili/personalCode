import Vue from 'vue'
import mTable from './mTable.vue'
import mTree from './mTree.vue'
import Bus from './bus'


import 'bootstrap/dist/css/bootstrap.css';

let data = {
  name: 'My Tree',
  children: [
    {name: 'hello'},
    {name: 'wat'},
    {
      name: 'child folder',
      children: [
        {name: 'child folder'},
        {name: 'hello'},
        {name: 'wat'}
      ]
    }
  ]
};

let items = [
  {name: 'zz', age: 20, city: 'wuhan'},
  {name: 'zz', age: 20, city: 'beijing'},
  {name: 'zz', age: 20, city: 'hunan'},
  {name: 'wee', age: 30, city: 'changsha'}
];
let items2 = [
  {name: 'qq', age: 23, city: 'tianjing'},
  {name: 'rr', age: 25, city: 'hhh'},
  {name: 'ss', age: 40, city: 'zzz'},
  {name: 'wee', age: 60, city: 'mmm'}
];
let tag = false;

Bus.$on('tree', function (nodeType) {
  app.tableData = tag ? items : items2;
  tag=!tag;
});

let app = new Vue({
  el: '#app',
  data: {
    treeData: data,
    tableData: items
  },
  methods: {
    tableEvent(msg) {
      console.log('father:', msg);
    }
  },
  components: {
    'mTree': mTree,
    'mTable': mTable
  }
});
