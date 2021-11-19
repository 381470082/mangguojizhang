// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'zhiyinlingdong-2guv6utlddf8cec0',
});
const db = cloud.database();
const todos = db.collection('cost-test2');
// 云函数入口函数
exports.main = async (event, context) => {
try{
  return await todos.where({
    Day:event.Day,
    _openid:event.id
  }).get()
}catch(e){
}
}