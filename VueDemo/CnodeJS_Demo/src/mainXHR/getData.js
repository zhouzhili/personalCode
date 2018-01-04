/**
 * Created by ZZl.
 * DateTime: 2017/12/14 14:19
 * desc:获取数据
 */
import axios from 'axios'
import moment from 'moment'

let instance=axios.create({
  baseURL:' https://cnodejs.org/api/v1'
});

/**
 * 获取主题列表
 * @returns {Promise}
 */
 export function getTopicList() {
  return new Promise((resolve,reject)=>{
    instance.get('/topics').then((response)=>{
      if(response.status===200){
        //格式化时间
        response.data.data.forEach((item,index)=>{
          item['create_at']=moment(item['create_at']).format('YYYY-MM-DD hh:mm:ss');
        });
        resolve(response.data.data);
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}

/**
 * 返回详细信息
 * @param id
 * @returns {Promise}
 */
export function getDetailContent(id) {
  return new Promise((resolve,reject)=>{
    instance.get('/topic/'+id).then((response)=>{
      if(response.status===200){
        let data=response.data.data;
        data['create_at']=moment(data['create_at']).format('YYYY-MM-DD hh:mm:ss');
        resolve(data);
      }
    }).catch(function (error) {
      reject(error);
    })
  })
}
