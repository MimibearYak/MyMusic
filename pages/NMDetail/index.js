// pages/NMDetail/index.js
import request from '../../utils/request'
import moment from 'moment'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    play:false,
    coverImg:'',
    musicUrl:'',
    tName:'',
    MusicTime:'00:00',
    CurrentTime:'00:00',
    currentProgress:0

  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getMusicUrl(options.id)
    this.getMusicDetail(options.id)
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    //play
    backgroundAudioManager.onPlay(()=>{
      this.setData({
        play:true
      })
    })
    //pause
    backgroundAudioManager.onPause(()=>{
      this.setData({
        play:false
      })
    })
    //monitor play
    backgroundAudioManager.onTimeUpdate(()=>{
      // console.log(backgroundAudioManager.duration)
      let MusicTime=moment(backgroundAudioManager.duration*1000).format("mm:ss")
      let CurrentTime=moment(backgroundAudioManager.currentTime*1000).format('mm:ss')
      //当前时间长度条=当前时间/总时间*总长度
      let currentProgress=backgroundAudioManager.currentTime/backgroundAudioManager.duration*550
      this.setData({
        MusicTime:MusicTime,
        CurrentTime:CurrentTime,
        currentProgress:currentProgress
      })
    })

  },
  getMusicUrl(id){
    request('/song/url','GET',{id:id}).then(res=>{
      console.log(res)
      this.setData({
        musicUrl:res.data.data[0].url
      })
    })
  },  
  getMusicDetail(id){
    request('/song/detail','GET',{ids:id}).then(res=>{
      console.log(res)
      let tName=res.data.songs[0].name
      wx.setNavigationBarTitle({
        title: tName,
      })
      this.setData({
        name:res.data.songs[0].ar[0].name,
        coverImg:res.data.songs[0].al.picUrl,
        tName:res.data.songs[0].name
      })
    })
  },
  playMusic(){
    //拿到音乐实例
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    if(this.data.play){
      backgroundAudioManager.pause()
      this.setData({
        play:false
      })
    }else{
      this.setData({
        play:true
      })
      if(this.data.play){
        backgroundAudioManager.src=this.data.musicUrl
        backgroundAudioManager.title = this.data.tName
      }
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