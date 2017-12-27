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

console.log('test10');
