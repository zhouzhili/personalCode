/**
 * Created by ZZl.
 * DateTime: 2017/12/15 14:37
 * desc:路由
 * routes的components的key对应是router-view的name值
 */
import Vue from 'vue'
import Router from 'vue-router'
import topicList from './components/topicList.vue'
import detailContainer from './components/detailContainer.vue'

Vue.use(Router);
export default new Router({
  routes:[
    {
      path:'/',
      name:'rootPath',
      components:{
        main:topicList
      }
    },
    {
      path:'/topic/:id',
      name:'articleRoute',
      components:{
        main:detailContainer
      }
    }
  ]
});
