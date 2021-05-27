// pages/mv/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classTtitle:['内地',"港台","欧美","韩国","日本"],
    activeIndex:0,
    area:"内地",
    offset:1,
    mvList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getmvData()
  },
  selectClass(e){
    this.setData({
      activeIndex:e.currentTarget.dataset.index,
      area:e.currentTarget.dataset.class,
      mvList:[]
    })
    this.getmvData()
  },
  getmvData(){
    wx.showLoading({
      title: '加载中',
    })
    request('/mv/all','GET',{
      limit:10,
      area:this.data.area,
      offset:this.data.offset
    }).then(res=>{
      wx.hideLoading()
      console.log(res)
      //数据合并
      let mvlist=[...this.data.mvList,...res.data.data]
      this.setData({
        mvList:mvlist
      })
    })
  },
  goplay(e){
    /**
     * let id={id:'',class:''}
     * id.id=e.currentTarget.dataset.id
     * id.class=this.data.area
     * url......+JSON.stringify(id)
     * options=> let id=JSON.parse(options.id)
     * =>this.getMVurl(id.id)
     */
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url:'/packgeA/pages/mvDetail/index?id='+id+"&class="+this.data.area,
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
    let offset=this.data.offset+1
    this.setData({
      offset:offset
    })
    this.getmvData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})