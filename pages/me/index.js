// pages/me/index.js
//获取app.js中的数据
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:app.globalData.userInfo,
    userInfo:false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getStorage({
    //   key: 'userInfo',
    //   success:(res)=>{
    //     this.setData({
    //       userInfo:res.data,
    //       show:false
    //     })
    //   }
    // })
    let value=wx.getStorageSync('userInfo')
    if(value){
      console.log(value)
      this.setData({
        userInfo:value,
      })
    }
  },
  getUserInfo(res){
    console.log(res)
    wx.setStorageSync('userInfo', res.detail.userInfo)
    if(res.detail.userInfo){
      this.setData({
        userInfo:res.detail.userInfo,
        show:false
      })
    }
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})