const util=require('../../utils/util.js');
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        tag: true,
        info: {},
        cityName: ''
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
            title:'查询中...'
        });
        var cityName = options.cityName;
        
        var url=util.formatUrl('https://www.sojson.com/open/api/weather/json.shtml',{city:cityName});
        var self = this;
        wx.request({
            url:url ,
            success: function (res) {
                if(res.data.status===200){
                    self.setData({info: res.data});
                }else {
                    self.setData({tag: false});
                }
            },
            fail: function (res) {
                self.setData({tag: false});
            },
            complete: function () {
                wx.hideLoading();
                self.setData({cityName: cityName});
            }
        })
    },
})