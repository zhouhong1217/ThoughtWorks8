module.exports = function main(numStr) {
    var str = numStr;
    let box_num = [];
    let box_item = [];
    let items =[
        ['._.','|.|','|_|'],
        ['...','..|','..|'],
        ['._.','._|','|_.'],
        ['._.','._|','._|'],
        ['...','|_|','..|'],
        ['._.','|_.','._|'],
        ['._.','|_.','|_|'],
        ['._.','..|','..|'],
        ['._.','|_|','|_|'],
        ['._.','|_|','..|'],
    ];
    for(i=0;i<str.length;i++){
        box_num.push(parseInt(str[i]))
    }
    //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
    box_num.map((value,index)=>{
        box_item.push(items[value])
    })
    //map()是原数组被“映射”成对应新数组
    var result = ``;
    for(let i = 0;i<3;i++){
        for(let j = 0;j<box_item.length;j++){
            if(j===box_item.length-1){
                //=== 和 !== 只有在相同类型下,才会比较其值；== 和 != 比较若类型不同，先偿试转换类型，再作值比较
                result += `${box_item[j][i]}`
            }else{
                result += `${box_item[j][i]} `
            }
        }
            result +=`\n`;
    }
    return result
};