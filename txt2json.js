/**
 * Created by Administrator on 2019/1/27.
 */
/**
 * 将txt格式的JSON  文件转换成JSON格式。
 * 主要用于http,https返回的JSON格式的数据转换。
 * @param txt
 * @param callback
 */
function txt2json(txt,callback){
    try{
        const json  = JSON.parse(txt);
        callback(null,json);
    }
    catch (e){
        callback(e);
    }
}
module.exports = txt2json;