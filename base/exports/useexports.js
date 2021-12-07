const a = 123;
const b = 456;
const c = 789;

// exports就是默认导出对象
exports.a = a;
// 系统默认设置 exports == modules.exports
module.exports.c = c

// 使用module.exports可以给导出对象整个赋值，而exports只能给单个属性赋值
module.exports = {user: '哦吼'}
exports = { user: '哦吼' } // 默认导出空对象


/* 
Node中每个模块都有一个module对象， module对象中的有一个exports属性为一个接口对象， 我们需要把模块之间公共的方法或属性挂载在这个接口对象中， 方便其他的模块使用这些公共的方法或属性。
Node中每个模块的最后， 都会return: module.exports。
Node中每个模块都会把module.exports指向的对象赋值给一个变量exports， 也就是说： exports = module.exports。
module.exports = XXX， 表示当前模块导出一个单一成员， 结果就是XXX。
如果需要导出多个成员时必须使用exports.add = XXX;
exports.foo = XXX;
或者使用module.exports.add = XXX;
module.export.foo = XXX;。
*/