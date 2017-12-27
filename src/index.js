function jspang(first,...arg){
    for(let val of arg){
        console.log(val);
    }
}
 
jspang(0,1,2,3,4,5,6,7);

let string1='技术胖';
let [a,b] = [1,2];
let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${string1}${a+b}。<br/>这节课我们学习字符串模版。`;
document.write(blog);

document.write(blog.includes(string1));
document.write(blog.startsWith(string1));
document.write(blog.endsWith(string1));
document.write(blog.repeat(3));

console.log(Number.isFinite(5));//true
console.log(Number.isFinite(5.1));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
console.log(Number.isFinite(null));//false

console.log(Number.isNaN(NaN));

let a2=123.1;
console.log(Number.isInteger(a2)); //false

let a3=123.0
console.log(Number.isInteger(a3)); //true

let a4='9.18';
console.log(Number.parseInt(a4)); 
console.log(Number.parseFloat(a4));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Math.pow(2,53)-1); 

let  json1 = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
 
let arr1=Array.from(json1);
console.log(arr1);
console.log(arr1 instanceof Array);

let arr2 =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr2);

let arr3=[1,2,3,8,5,6,7,4,9];
// value: 当前查找的值
// index: 当前索引
// arr: 当前数组
console.log(arr3.find(function(value,index,arr){
    return value > 5;
}));

let arr_fill =[0,1,2,3,4,5,6,7,8,9,10];
// 要填充的值，填充起始位置，填充到的位置（不包括）
arr_fill.fill('jspang',2,5);
console.log(arr_fill);

let arr_of=['jspang','技术胖','大胖逼逼叨']

for (let item of arr_of){
   console.log(item);
}

for (let index of arr_of.keys()){
    console.log(index);
}

for (let [index, item] of arr_of.entries()){
    console.log(index, item);
}

// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。

let arr=['jspang','技术胖','大胖逼逼叨']
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

// 主动抛出错误
function add(a,b=1){
   
    if(a == 0){
        throw new Error('This is error')
    }
     return a+b;
}
 
// console.log(add(0));

// ES5中，我们经常用严格模式来编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。
// 但是再ES6中如果你使用了默认值，再使用严谨模式的话，就会有冲突。
function add(a,b=1){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
 
console.log(add(1));