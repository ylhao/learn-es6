# gulp 简介
- [官网](https://gulpjs.com/)
- [中文](https://www.gulpjs.com.cn/)

## 为什么我要引入gulp自动构建工具？
在学习过程中，每次修改代码，我都要执行一下“npm run build”，这些操作看起来还不是很繁琐，但是当工程比较大的时候，操作再多一点儿，这可能就会成为让人头疼的、繁琐的操作。我在想能不能简化这个流程。我修改完代码，自动执行编译过程，下面尝试用 gulp 来实现这个设想。

## 什么是任务自动化
减少人工操作，让电脑自动的去监听操作，自动响应

## gulp 与 grunt
gulp流行之前是grunt的天下，grunt有一些缺点，项目复杂以后操作慢，尤其是级联操作。gulp通过stream(流)的方式操作文件，操作非常快。用NodeJS做开发的。

## glob 模式
可以自行搜索了解。
[node-glob](https://github.com/isaacs/node-glob)

## 使用 gulp

### 学习
[gulp 学习指南](https://github.com/ylhao/learn-gulp)

### 应用
``` shell
# 安装依赖环境
npm install --save-dev del gulp gulp-sequence require-dir webpack-stream gulp-rename babel-core babel-loader 

# 新建 tasks 文件夹
# 新建 gulpfile.babel.js 文件
# 运行命令
gulp
```

## 错误提示 Failed to load external module @babel/register
（不影响使用，待解决）

## Error: The thunkFunction already filled
是gulp-sequence引起的，解决办法如下：

``` js
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', function(cb){
    gulpSequence('clean','scripts')(cb);
});
```

