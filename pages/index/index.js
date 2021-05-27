// pages/mv/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    recommentList:[],
    soleData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlunbo()
    this.getRecommentData()
    this.getSoleData()
  },
  getlunbo(){
    request('/banner').then(res=>{
      // console.log(res)
      this.setData({
        banner:res.data.banners
      })
    })
  }, 
  //推荐数据
  getRecommentData(){
    request('/top/playlist',"GET",{
      limit:10
    }).then(res=>{
      // console.log(res)
      this.setData({
        recommentList:res.data.playlists
      })
    })
  },
  getSoleData(){
    request('/personalized/privatecontent').then(res=>{
      console.log(res)
      this.setData({
        soleData:res.data.result
      })
    })
  },
  //newmusic
  gonewmusiclist(){
    wx.navigateTo({
      url: '/pages/newMusicList/index',
    })
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