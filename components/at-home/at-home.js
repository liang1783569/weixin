Component({
  data:{
    list:''
  },
  attached(){
    let that = this
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=3&page=1&pageSize=100&platform=WAP', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          list: res.data.data[0].Products
        })
       
      }
    })
  }

})
     
