// 节流：规定的时间间隔内只能触发一次
function throttle (fn, wait = 3000) {
    let timer;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, args)
            }, wait)
        }
    }
}

const tfn = throttle(function (a,b) {
    console.log(a,b);
})

setInterval(() => {
    tfn(1111);
}, 1000)

tfn(1111, 2222)
tfn(1111, 2222)
tfn(1111, 2222)
