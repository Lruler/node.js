let fs = require('fs')

// flag中用a是追加内容，w是覆盖 也要记得用Promise封装 
fs.writeFile('zkfather.txt',"张旷是我儿",{flag:"w",encoding:'utf-8'},(err,data) => {
    if(err) console.log('写入错误');
    else console.log('写入成功');
})
// unlink是删除函数
