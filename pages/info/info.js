// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      useInfo:{},
      isLogin:false,
      
  },
  tapName:function(event) {
    if(event){
      wx.navigateTo({
        url: '/pages/my_class/my_class'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          //用户允许授权
          this.setData({
            isLogin: true
          });
        }
        else {
          //用户未授权
          this.setData({
            isLogin: false
          });
        }

      }
    })
    wx.getUserInfo({
      success: (data) => {
        console.log(data.userInfo);
        this.setData({
          useInfo: data.userInfo
        });
      }
    })
  

  },
  //用户点击登陆的授权
  handleGetUserInfo(data){
    console.log(data);
    if(data.detail.rawData){
      this.getThisUserInfo();
    }
  },
  //获取用户信息
  getThisUserInfo(){
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        this.setData({
          useInfo: data.userInfo
        });
      }
    })
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          //用户允许授权
          this.setData({
            isLogin: true
          });
        }
        else {
          //用户未授权
          this.setData({
            isLogin: false
          });
        }

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