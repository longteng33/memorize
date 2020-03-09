function memorize(fn){
    // 闭包，缓存池
    var cache={};
    return function(){
        // 确保每一个k都不一样
        var k=[].join.call(arguments,",")
        // 如果cache[k]有就直接取，如果没有就再算
        return cache[k]=cache[k]||fn.apply(this,arguments);
    }
}
