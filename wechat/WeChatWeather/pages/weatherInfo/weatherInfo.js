Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        tag: true,
        weatherInfo: {},
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
        var cityKey = options.cityKey;
        var self = this;
        wx.request({
            url: 'http://wthrcdn.etouch.cn/weather_mini?citykey=' + cityKey,
            success: function (res) {
                self.setData({weatherInfo: res.data.data});
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
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    
    },
    
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    
    },
    
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    
    },
    
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    
    },
    
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    
    },
    
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    
    },
    
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    }
})