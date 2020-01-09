// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchList: [],
    Subject: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getData() {
      let Subject=this.data.Subject
      wx.request({
        url: 'http://m.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=%E8%A3%99%E5%AD%90&Sort=&BrandID=&platform=WAP',
        data: {
          Subject
        },
        method: 'GET',
        header: {
          'content-type': 'application/x-www--forn-urlencoded'
        },
        success: (res) => {
          if (res.data.dara !== '') {
            this.setData({
              searchList: res.data.data
            })
          }
        }
      })
    },


    handleInput(e) {
      let Subject=e.detail.value
      console.log(Subject)
      this.setData({
        Subject
      })
      // this._getData()
    },
    searchTap() {
      // this.setData({
      //   Subject
      // })
      this._getData()
    }
  }
})
