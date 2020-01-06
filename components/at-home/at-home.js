Component({
  behaviors: [],
  data:{
    list:''
  },
  properties: {
    url: String,
    title:String,
    bannerimg:String

  },
  attached(){
    let that = this
    wx.request({
      url: this.properties.url, //仅为示例，并非真实的接口地址
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
     
