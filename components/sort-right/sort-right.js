Component({
  data: {
    list: ''
  },
  attached() {
    let that = this
    wx.request({
      url: 'http://m.haimi.com/api/ad-module/get?Alias=yanxuan-brand-list&platform=WAP', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          list: res.data.data[0].Records
        })

      }
    })
  }

})

