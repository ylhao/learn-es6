/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _temp = __webpack_require__(1);

var _temp2 = _interopRequireDefault(_temp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// value: 当前查找的值
// index: 当前索引
// arr: 当前数组
console.log(arr3.find(function (value, index, arr) {
    return value > 5;
}));

var arr_fill = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 要填充的值，填充起始位置，填充到的位置（不包括）
arr_fill.fill('jspang', 2, 5);
console.log(arr_fill);

var arr_of = ['jspang', '技术胖', '大胖逼逼叨'];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr_of[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;

        console.log(_item);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr_of.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var index = _step3.value;

        console.log(index);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = arr_of.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            _index = _step4$value[0],
            _item2 = _step4$value[1];

        console.log(_index, _item2);
    }

    // entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var arr = ['jspang', '技术胖', '大胖逼逼叨'];
var list = arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

// 主动抛出错误
function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

// console.log(add(0));

// ES5中，我们经常用严格模式来编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。
// 但是再ES6中如果你使用了默认值，再使用严谨模式的话，就会有冲突。
function add(a, b) {
    'use strict';

    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add(1, 2));
console.log(add.length);

// 箭头函数 函数名=(参数)=>{函数体}
var test_cc = function test_cc(a, b) {
    console.log(a + b);
};
test_cc(2, 3);

var arr_10 = ['jspang', '技术胖', '免费教程'];
function arr_fun(a, b, c) {
    console.log(a, b, c);
}

arr_fun.apply(undefined, arr_10);

var name = "jspang";
var skill = 'web';
var obj = { name: name, skill: skill };
console.log(obj); //Object {name: "jspang", skill: "web"}

var key = 'ylhao';
var obj1 = _defineProperty({}, key, 'test');
console.log(obj1);

var obj3 = {
    name: 'ylhao'
};
var obj4 = {
    name: 'ylhao'
};
console.log(obj3.name === obj4.name);
console.log(Object.is(obj3.name, obj4.name));

// === 同值相等 is 严格相等
console.log(+0 === -0); //true
console.log(NaN === NaN); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true

var aaa = { a: 'jspang' };
var bbb = { b: '技术胖' };
var ccc = { c: 'web' };

var ddd = Object.assign(aaa, bbb, ccc);
console.log(ddd);

var as = new String();
var bs = new Number();
var cs = new Boolean();
var ds = new Array();
var es = new Object();
var fs = Symbol();
console.log(typeof ds === 'undefined' ? 'undefined' : _typeof(ds)); // Object

var gs = Symbol('jspang');
console.log(gs);
console.log(gs.toString());

var gs1 = Symbol();
var obj = _defineProperty({}, gs1, 'ylhao');
console.log(obj[gs1]);
obj[gs1] = "yilonghao";
console.log(obj[gs1]);

var obj_protect = { name: 'jspang', skill: 'web' };
var age = Symbol();
obj_protect[age] = 25;
for (var item in obj_protect) {
    console.log(obj_protect[item]);
}

var names = new Set(['ylhao', 'yilonghao', 'jspang', 'ylhao']);
names.add('ruanyifeng');
console.log(names);
names.delete('ruanyifeng');
console.log(names);
var liao = 'liaoxuefeng';
names.add(liao);
console.log(names);
console.log(names.has('ylhao'));
console.log(names.size);

var maptest = new Map();
maptest.set('ylhao', 'yilonghao');
var jsontest = {
    name: 'ylhao',
    age: '25'
};
maptest.set(jsontest, 'iam');
maptest.set('iam', jsontest);
console.log(maptest.get(jsontest));
console.log(maptest.get('iam'));
maptest.delete(jsontest);
console.log(maptest.has(jsontest));
maptest.clear();

// pro 是一个代理对象
// 第一个花括号是被代理对象
// 第二个花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方
var pro = new Proxy({
    add: function add(val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, {
    get: function get(target, key, property) {
        console.log('come in Get');
        console.log(target);
        console.log(key);
        console.log(property);
        return target[key];
    },
    set: function set(target, key, value, receiver) {
        console.log('    setting ' + key + ' = ' + value);
        return target[key] = value;
    }
});
// 通过程序来看，target就是第一个花括号定义的对象
// name就是你访问的属性名
console.log(pro.name);
console.log(pro.add(140));
pro.name = 'ylhao';
console.log(pro.name);

// 16节 promise对象的使用

var state = 1;

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭--完成');
    } else {
        reject('洗菜做饭--出错');
    }
}

function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    if (state == 1) {
        resolve('坐下来吃饭--完成');
    } else {
        reject('坐下来吃饭--出错');
    }
}

function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗完');
    if (state == 1) {
        resolve('收拾桌子洗完--完成');
    } else {
        reject('收拾桌子洗完--出错');
    }
}

// 如果step状态reslove，那么执行匿名函数中的代码，否则，直接打印错误信息（reject返回的信息）然后程序运行结束
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });

// 类

var Coder = function () {
    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.a);
            console.log(this.name('jspang') + ':' + 'Skill:' + val);
        }
    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var jspang111 = new Coder(1, 2);
console.log(jspang111.add());
console.log(jspang111.a);

var htmler = function (_Coder) {
    _inherits(htmler, _Coder);

    function htmler() {
        _classCallCheck(this, htmler);

        return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
    }

    return htmler;
}(Coder);

var pang111 = new htmler();
pang111.name('技术胖');

// 模块化

console.log(_temp.testtest);

console.log(_temp.test111);

// 默认default

console.log(_temp2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add111 = add111;
var testtest = exports.testtest = 'testtest';

var test111 = 'test111';
var test222 = 'test222';
var test333 = 'test333';

exports.test111 = test111;
exports.test222 = test222;
exports.test333 = test333;
function add111(a, b) {
    return a + b;
}

var aaaa = 'aaaa';
var bbbb = 'bbbb';
var cccc = 'cccc';

exports.aaaaa = aaaa;
exports.bbbbb = bbbb;
exports.ccccc = cccc;


var zzz = 'zzzz';
exports.default = zzz;

/***/ })
/******/ ]);