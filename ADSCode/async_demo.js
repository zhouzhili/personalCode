/**
 * Created by ZZl.
 * DateTime: 2018/1/30 14:34
 * desc:async练习实例
 */
const async=require('async');

function seriesDemo() {
    //产生异步函数处理方法
    function aysncFun(time,val,cb) {
        setTimeout(function () {
            cb(null,val);
        },time);
    }
    
    //cb就是处理结果的回调函数，第一个参数为错误值
    async.series([
        function (cb) {aysncFun(1,'33',cb);},
        function (cb) {aysncFun(2,null,cb);}
    ],function (err,result) {
        if(err){
            console.log('error:',err);
        }else {
            console.log('result:',result);
        }
    });
}

function waterFallDemo() {
    function asyncAddFun(val,cb) {
        setTimeout(function () {
           cb('',val+1);
           console.log('val is:',val);
        },1);
    }
    
    async.waterfall([
        function (cb) {asyncAddFun(1,cb);},
        function(n,cb){asyncAddFun(n,cb)},
        function(n,cb){asyncAddFun(n,cb)},
    ],function (err,result) {
        console.log(result);
    })
}

waterFallDemo();