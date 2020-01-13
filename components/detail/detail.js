// components/detail/detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     detail_id:String
  },
  observers: {
    'detail_id': function (detail_id) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
     let that = this
      wx.request({
        url:`http://m.haimi.com/api/product/detail-cdn?ProductID=4991877&platform=WAP`,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
         
          that.setData({
            list: res.data.data
          })
         
        }
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    list:Object
  },

  /**
   * 组件的方法列表
   */
  // methods: {
  //   detailTap(e){
  //     console.log(e)
  //   }
  // },
  // lifetimes:{
  //   attached(){
   
  //   }
  // }
})
