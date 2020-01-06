// pages/search/search.js
Page({

  data: {
    keyword:'',
    searchList:''
  },

  handleInput(e){
    let keyword=e.detail.value
    this.setData({
      keyword
    })
    wx.request({
      url: 'http://m.haimi.com/api/search/product?',
      keyword,
      method:'GET',
      header: {
        'content-type': 'application/json'
      },
      success: (res)=>{
        searchList:res.data.data
        console.log(res.data.data)
      }
    })
  }
})