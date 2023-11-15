function debounce(fn, wait = 50) {
    let timer;
    return function(...args) {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

const dfn = debounce(function(a,b) {
    console.log(a,b);
})

dfn(1111,2222)
dfn(1111,2222)
dfn(1111,2222)
dfn(1111,2222)
dfn(1111,2222)
dfn(1111,2222)
dfn(1111,2222)
