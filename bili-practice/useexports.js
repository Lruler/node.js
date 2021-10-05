const a = 123;
const b = 456;
const c = 789;

// exports就是默认导出对象
exports.a = a;
// 系统默认设置 exports == modules.exports
module.exports.c = c

// 使用module.exports可以给导出对象整个赋值，而exports只能给单个属性赋值
module.exports = {user: '哦吼'}
exports = {user:'哦吼'} // 默认导出空对象