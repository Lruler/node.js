var mysql = require('mysql'); //引入模块

var connection = mysql.createConnection({ //设置参数
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect(); //连接数据库


//执行数据库操作并执行回调，有err则抛出异常，控制台输出结果 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) { 
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end(); //结束链接