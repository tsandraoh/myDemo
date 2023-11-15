// 数组扁平化
var arr = [
    ['a'],
    ['b'],
]
console.log(arr.flat(2)); // es6 flat方法 参数 ：数组维度

function myFlat (arr) {
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur)
    },[])
}