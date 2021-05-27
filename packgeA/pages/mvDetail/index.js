// pages/mvDetail/index.js
import request from '../../../utils/request'
import moment from 'moment'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MVurl:"",
    mvRecomment:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getMVurl(options.id)
    this.getRecommentData(options.area)
  },
  getMVurl(id){
    request('/mv/url',"GET",{id:id}).then(res=>{
      // console.log(res)
      this.setData({
        MVurl:res.data.data.url,
      })
    })
  },
  getRecommentData(area){
    request('/mv/all','GET',{
      limit:5,
      area:area,
      offset:1,
    }).then(res=>{
      console.log(res)
      for(let i=0;i<res.data.data.length;i++){
        res.data.data[i].time=moment(res.data.data[i].duration).format('mm:ss')
      }
      this.setData({
        mvRecomment:res.data.data
      })
    })
  },
  goplayMV(e){
    let id=e.currentTarget.dataset.id
     this.getMVurl(id)
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
  onShareAppMessage: function (res) {
    console.log(res)
    console.log(this.data.MVIMG)
    if(res.from==='button'){
       return{
         title:'啦啦啦',
         imageUrl:'',
         query:''
       }
    }
  }
})