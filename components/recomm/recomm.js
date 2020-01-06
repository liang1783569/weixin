// // components/recomm/recomm.js
// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {

//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {

//   }
// })
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: './swiper'
    }
  },

  data: {
    image: ['1.png', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
Component({
  data:{
    productList:"",
    beautyList:"",
    homeList:'',
    directList:'',
    electList:'',
    personList:'',
    kitchenList:'',
    bagList:'',
    motherList:''
  },
  attached(){
    let that=this
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header:{
        'content-type': 'application/json' 
      },
      success(res){
        that.setData({
          productList: res.data.data[0].Products
        })
      }
    })
    wx.request({
      url:'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res2){
        that.setData({
          beautyList:res2.data.data[1].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res3){
        that.setData({
          homeList:res3.data.data[2].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res4) {
        that.setData({
          directList: res4.data.data[3].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res5) {
        that.setData({
          electList: res5.data.data[4].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res6) {
        that.setData({
          personList: res6.data.data[5].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res7) {
        that.setData({
          kitchenList: res7.data.data[6].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res8) {
        that.setData({
          bagList: res8.data.data[7].Products
        })
      }
    })
    wx.request({
      url: 'http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',
      header: {
        'content-type': 'application/json'
      },
      success(res9) {
        that.setData({
          motherList: res9.data.data[8].Products
        })
      }
    })
  }
})