
var util = require('../../utils/util');
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        city: '',
        getLoc: true
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getLocation();
        
    },
    
    onShow: function () {
        this.getLocation()
    },
    
    cityInput: function (e) {
        this.setData({city: e.detail.value.trim()});
    },
    
    search: function () {
        var self = this;
        var cityName = this.data.city;
        var cName = cityName;
        wx.navigateTo({
            url: '../weatherInfo/weatherInfo?cityName=' + cityName,
        });
    },
    
    /**
     * 获取定位信息
     * 根据高德API获取所在街区
     */
    getLocation:function () {
        var self=this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                var params = {
                    key: 'e87cf4564f08b0f6fb383980b61924e5',
                    location: res.longitude + ',' + res.latitude
                };
                var url = util.formatUrl('https://restapi.amap.com/v3/geocode/regeo', params);
                wx.request({
                    url: url,
                    success: function (res) {
                        var city='-';
                        if (res.data.status === '1') {
                            var address=res.data.regeocode.addressComponent;
                            city = address.district||address.city;
                        }else {
                            self.errorToast();
                        }
                        self.setData({city: city, getLoc: false});
                    },
                    fail: function (res) {
                        self.errorToast();
                        self.setData({getLoc: false});
                    }
                })
            },
            fail: function () {
                self.errorToast();
                self.setData({getLoc: false});
            }
        })
    },
    
    /**
     * 错误信息弹窗
     * @param title
     */
    errorToast:function (title) {
        var t=title||'无法获取定位信息,请手动输入';
        wx.showToast({
            title: t,
            icon: 'success',
            image: '../../image/error.png',
            duration: 2000
        })
    }
})