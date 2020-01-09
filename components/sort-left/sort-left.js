// components/sort-left/sort-left.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getText(e){
      let val = e.currentTarget.dataset.name
      console.log(val)
      wx.setStorage({
        key: 'sortItem',
        data: val,
        success: function (res) {
          console.log('异步保存成功')
        }
      })
      wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
        url: "/pages/search/search"
      })
    }
    
  }
})
