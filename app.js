App({
  onLaunch (options) {
    // Do something initial when launch.
    //检查用户是否授权 
    let value=wx.getStorageSync('userInfo')
    if(value){
      this.globalData.userInfo=false
    }else{
      this.globalData.userInfo=true
    }
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: {
    userInfo:true
  }
})