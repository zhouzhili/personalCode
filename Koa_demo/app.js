/**
 * Created by ZZl.
 * DateTime: 2018/1/31 10:19
 * desc:
 */
const Koa=require('koa');
const app=new Koa();
const fs=require('fs');
const path=require('path');
const server=require('koa-static');


const main=server(path.join(__dirname,'public'));

app.use(main);

app.listen(3000);
console.log('app running in http://127.0.0.1:3000');