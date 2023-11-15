// instanceof 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
function myInstanceof (obj, constructor){
    if (typeof obj !== 'object' || obj === null) return false
    const proto = Object.getPrototypeOf(obj)
    while(true) {
        if (proto === null) return false
        if (proto === constructor.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}
console.log(myInstanceof(['aa'], Array));