
/**
 * 网络请求方法
 *  1.封装函数
 *    1.功能点明确
 *    2.函数内部固定语法
 *    3.动态的参数抽离成形参
 *    4.
 */
export default(url,method='GET',data={})=>{
  // let datas
  // wx.request({
  //   url:url,
  //   method:method,
  //   data:data,
  //   success:(res)=>{
  //     console.log(res)
  //     datas=res
  //   }
  // })
  // return datas
  //promise 封装
  return new Promise((resolve,reject)=>{
    wx.request({
      url:"https://autumnfish.cn/"+url,
      method:method,
      data:data,
      success:(res)=>{
        resolve(res)
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  })
}