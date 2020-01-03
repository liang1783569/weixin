// pages/components/home/nav.js
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
    tabArr: {
      curHdIndex: 1,
      curBdIndex: 1
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tab: function (e) {
      //var dataId = e.currentTarget.dataset.id;
      var dataId = e.currentTarget.id;
      var obj = {};
      obj.curHdIndex = dataId;
      obj.curBdIndex = dataId;
      this.setData({
        tabArr: obj
      })
    }

  }
})
