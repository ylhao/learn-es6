'use strict';

function jspang(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

jspang(0, 1, 2, 3, 4, 5, 6, 7);

var string1 = '技术胖';
var a = 1,
    b = 2;

var blog = '<b>\u975E\u5E38\u9AD8\u5174\u4F60\u80FD\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0</b>\uFF0C\u6211\u662F\u4F60\u7684\u8001\u670B\u53CB' + string1 + (a + b) + '\u3002<br/>\u8FD9\u8282\u8BFE\u6211\u4EEC\u5B66\u4E60\u5B57\u7B26\u4E32\u6A21\u7248\u3002';
document.write(blog);

document.write(blog.includes(string1));
document.write(blog.startsWith(string1));
document.write(blog.endsWith(string1));
document.write(blog.repeat(3));

console.log(Number.isFinite(5)); //true
console.log(Number.isFinite(5.1)); //true
console.log(Number.isFinite('jspang')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false
console.log(Number.isFinite(null)); //false

console.log(Number.isNaN(NaN));

var a2 = 123.1;
console.log(Number.isInteger(a2)); //false

var a3 = 123.0;
console.log(Number.isInteger(a3)); //true

var a4 = '9.18';
console.log(Number.parseInt(a4));
console.log(Number.parseFloat(a4));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Math.pow(2, 53) - 1);

var json1 = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length: 3
};

var arr1 = Array.from(json1);
console.log(arr1);
console.log(arr1 instanceof Array);

var arr2 = Array.of('技术胖', 'jspang', '大胖逼逼叨');
console.log(arr2);

var arr3 = [1, 2, 3, 8, 5, 6, 7, 4, 9];
console.log(arr3.find(function (value, index, arr) {
    return value > 5;
}));