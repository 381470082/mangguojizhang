// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'zhiyinlingdong-2guv6utlddf8cec0',
});
const db = cloud.database();
const todos = db.collection('zhandagn-test5');

// 云函数入口函数
exports.main = async (event, context) => {
try{
  return await todos.where({
    Month:event.Month,
    _openid:event.id,
    Event:event.Event,
    Type:1
  }).get()
}catch(e){
console.log(e)
}
}