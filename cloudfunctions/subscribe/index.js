const cloud = require('wx-server-sdk')
cloud.init({
})
exports.main = async (event, context) => {
  try {
    const { OPENID } = cloud.getWXContext()
    const result = await cloud.openapi.subscribeMessage.send({
        touser: OPENID,//需要发送用户的openid
        page: 'pages/main/main',//点击通知挑转的页面
        lang: 'zh_CN',//语言设置
        data: {
          thing3: {
            value: '记得今日要打卡哦' //key必须和模版一样！！！
          },
          amount6:{
            value: event.yestoday //key必须和模版一样！！！
          },
          amount7:{
            value: event.pay //key必须和模版一样！！！
          },
          time1: {
            value: '2021年05月16日'
          },
          thing4: {
            value: '本月生活费不足，请注意消费'
          }
        },
        templateId: 'C0DYOKjMqbBtfAITZ3Fd4jXK_dKFRzJPhTpDN6IPtHI',//模版ID
        miniprogramState: 'developer'
      })
    return result
  } catch (err) {
    return err
  }
}
