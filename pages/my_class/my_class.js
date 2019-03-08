//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  goToDetail: function (e) {
    if (e) {
      wx.navigateTo({
        url: '/pages/play/play'
      })
    }
  }
})
