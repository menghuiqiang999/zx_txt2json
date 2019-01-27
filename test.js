/**
 * Created by Administrator on 2019/1/27.
 */
const txt2json = require("./txt2json");

const txt =JSON.stringify({errcode:0,errmsg:"ok"}) ;

txt2json(txt,(err,result) =>{
    if(err){return console.log(err)}
    console.log(result,result.errcode,result.errmsg);
});