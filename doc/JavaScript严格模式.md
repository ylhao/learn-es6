## ES6 在函数体中使用严格模式
ES5中，我们经常用严格模式来编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。但是再ES6中如果你使用了默认值，再使用严谨模式的话，就会有冲突。
``` js
// 会报错
function add(a,b=1){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}

// 修改为以下形式
function add(a,b){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
```