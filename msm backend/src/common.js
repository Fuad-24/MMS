const keyMap=(obj,keys)=>{
    let result={}
    keys.map(key=>{
        result[key]=obj[key];
    })
    return result;
}
module.exports={keyMap}