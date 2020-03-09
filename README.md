# memorize
记忆函数封装(缓存函数)

function memorize(fn){<br>
    // 闭包，缓存池<br>
    var cache={};<br>
    return function(){<br>
        // 确保每一个k都不一样<br>
        var k=[].join.call(arguments,",")<br>
        // 如果cache[k]有就直接取，如果没有就再算<br>
        return cache[k]=cache[k]||fn.apply(this,arguments);<br>
    }<br>
}<br>
<br>
1、用到了递归的函数，可使用缓存函数，减少计算量<br>
2、一些数据需要频繁地去调用，所以可以将他们放到缓存池中，需要用的时候直接取就可以了<br>
3、使用：计算阶乘的函数<br>
function factorial(n){<br>
            if(n==0){<br>
                return 1<br>
            }else{<br>
                return n*factorial(n-1)<br>
            }<br>
        }<br>
var factorialMemorize=memorize(factorial)<br>
然后再使用factorialMemorize函数去计算阶乘<br>

