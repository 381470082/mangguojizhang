const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  try {
    const { OPENID } = cloud.getWXContext();
    const result = await db.collection('course-message').add({
      data: {
        touser: OPENID, // 订阅者的openid
        page: 'main', // 订阅消息卡片点击后会打开小程序的哪个页面，注意这里的界面是线下小程序有的，否则跳不过去
        data: {
          thing3: {
            value: '记得今日要打卡哦' //key必须和模版一样！！！
          },
          amount6:{
            value: 10 //key必须和模版一样！！！
          },
          amount7:{
            value: 10 //key必须和模版一样！！！
          },
          time1: {
            value: '2021年05月16日'
          },
          thing4: {
            value: '本月生活费不足，请注意消费'
          }
        }, // 订阅消息的数据（课程信息）
        templateId: C0DYOKjMqbBtfAITZ3Fd4jXK_dKFRzJPhTpDN6IPtHI, // 订阅消息模板ID
        isSend: false, // 消息发送状态设置为 false
      },
    });
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
