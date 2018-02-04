/**
 * Created by ZZl.
 * DateTime: 2018/1/8 15:53
 * desc:读取标题
 */
const cheerio = require('cheerio');
const fs = require('fs');
const axios=require('axios');
const async=require('async');

let titleObj={};
let sameLink=[];

//获取页面信息
function getPageInfo(href,tag,callback) {
    axios.get(href).then((resp)=>{
        if(resp.status===200){
            //获取标题
            let $html=cheerio.load(resp.data);
            let title='',authi='';
            if(tag==='usivf'){
                title=$html('#thread_subject').text();
                authi=$html('.authi').find('em>a').text();
            }else if(tag==='sina'){
                title=$html('.titName').text();
				authi=$html('.SG_revert_Tit').text()
            }
            //已键值对的方式存入链接以及其对应的标题
            if(titleObj.hasOwnProperty(href)){
                console.log('有相同的链接：',href);
                if(sameLink.indexOf(href)!==-1){
                    sameLink.push(href);
                }
            }else {
                titleObj[href]={
                    title:title,
                    authi:authi
                };
            }
            callback(titleObj[href]);
        }
    }).catch((error)=>{
        console.log('error: ',href,error);
		sameLink.push(href+'  获取失败');
        callback();
    });
}

function readFile(fileName) {
    let f=fs.readFileSync(fileName);
    let $=cheerio.load(f);
    
    //队列处理任务
    let q=async.queue(function (task,callback) {
        let href=task.href;
        //针对珍孕网
        if(href.indexOf('http://www.usivf.org/thread')===0){
            getPageInfo(href,'usivf',callback);
        }
        else if(href.indexOf('http://blog.sina.com.cn/s/blog')===0){
            getPageInfo(href,'sina',callback);
        }else {
            callback(titleObj[href]={
                title:'',
                authi:''
            });
        }
    },3);
    
    //队列所有完成后执行方法，将标题添加到链接后面
    q.drain=function () {
        console.log('all finish');
        $('a').each(function (index,item) {
            let $a=$(this);
            let href=$a.attr('href');
            if(titleObj.hasOwnProperty(href)){
                let info=titleObj[href];
                let titleDiv=cheerio.load(`<div style="color:red">${info.title}</div><div>${info.authi}</div>`);
                $a.after(titleDiv.html());
            }
        });
        //写入新文件
        let newFileName=fileName.split('/')[2].split('.')[0];
        fs.writeFile(`./dou/${newFileName}_new.htm`,$.html(),'utf8',function (error) {
            if(error){
                console.log(newFileName+' 写入失败');
            }else {
                console.log(newFileName+' 写入成功');
            }
        });
        
        fs.writeFile(`./dou/${newFileName}_same.txt`,sameLink.join('\n'),'utf8',function (error) {
            if(error){
                console.log(newFileName+' 相同链接写入失败');
            }else {
                console.log(newFileName+' 相同链接写入成功');
            }
        })
        
    };
    
    //给队列添加链接
    $('a').each(function (index,item) {
        let $a=$(this);
        let href=$a.attr('href');
        if(href){
            q.push({href:href},function (err) {
                console.log(href+' '+index+', push');
            });
        }
    });
}
readFile('./dou/1000pian.htm');
readFile('./dou/1000pian-2.htm');
readFile('./dou/fatie1000.htm');
readFile('./dou/fatie1000-2.htm');
readFile('./dou/fatie1000-3.htm');





