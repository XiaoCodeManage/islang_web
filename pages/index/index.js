Page({
    onGetToken() {
        // 获取token 提交code
        wx.login({
          success:({code: account}) => {
              wx.request({
                url: 'http://127.0.0.1:3000/v1/token',
                method: 'POST',
                data: {
                    account,
                    type: 100 // 小程序登录
                },
                success: res => {
                    console.log(res)
                    if(res.statusCode == 200) {
                        wx.setStorageSync('token', res.data.token)
                    }
                }
              })
          }
        })
    },
    verifyToken() {
        wx.request({
          url: 'http://127.0.0.1:3000/v1/token/verify',
          method: "POST",
          data: {
            token: wx.getStorageSync('token')
          },
          success: res => {
              console.log(res);
          }
        })
    }
})