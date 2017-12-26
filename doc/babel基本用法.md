## 参考教程
[传送](http://es6.ruanyifeng.com/#docs/intro)

## 作用
工欲善其事，必先利其器。我们首先需要一个ES6运行环境，现在的Chrome浏览器已经支持大部分ES6语法了，但是有些低版本的浏览器还是不支持ES6的语法，这就需要我们把ES6的语法自动的转变成ES5的语法。我们就使用Babel把ES6编译成ES5。

## 流程

### 准备工作
1. 建立src目录和dist目录，src目录存放es6语法形式的js源代码。dist存放编译后的源代码。
2. 编写index.html。
3. 在index.html中引入dist目录下的文件。

### 配置babel
``` shell
# 初始化项目
npm init -y

# 安装依赖
npm install --save-dev babel-preset-es2015 babel-cli

# 在 package.json 中添加 scripts
"scripts": {
    "build": "babel src -d dist"
}

# 配置 .babelrc 配置文件

# 执行
npm run build
```

### scripts 简介
当我们执行“npm run bulid”时，就等价于执行“babel src -d dist”
