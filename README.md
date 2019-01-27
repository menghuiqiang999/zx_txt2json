HEAD
========================================================================================================================
# zx_txt2json

#### 介绍
函数，将txt格式的JSON  文件转换成JSON格式。主要用于http,https返回的JSON格式的数据转换。


#### 安装教程

 npm install zx_txt2json


#### 使用说明

    输入为文本格式的JSON数据，返回JSON格式。
    样例：
    const txt2json = require("./txt2json");

    const txt =JSON.stringify({errcode:0,errmsg:"ok"}) ;

    txt2json(txt,(err,result) =>{
        if(err){return console.log(err)}
        console.log(result,result.errcode,result.errmsg);
    });



#### 参与贡献

zx


>>>>>>> end
