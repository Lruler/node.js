# 中间件级别

1. app级别
+ 注册时一定在最顶级使用
+ 通过app.use使用
2. router级别 通过数组形式传入
3. 异常处理（可以是router也可以是app级别

# sequlize
sequlize-cil mysql2

node app --> ORM(sequlize) --> 驱动(node-mysql/mysql2) -->mysql db

# pm2 开启运维服务