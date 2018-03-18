# ES6 学习环境
这里搭建了一个 ES6 的学习环境，其中用到了任务自动化工具 gulp 和 ES6 转码器 Babel。具体的搭建步骤可以参考：
1. [npm 包管理工具](https://www.jianshu.com/p/626e568aaa5a)
2. [Babel 转码器](https://www.jianshu.com/p/c55ed0af4b4a)
3. [gulp 自动化构建工具](https://www.jianshu.com/p/d88c065469e4)


#### 使用方法
```
// 安装Node.js
http://www.runoob.com/nodejs/nodejs-install-setup.html

// 全局安装 gulp
npm install -g gulp

// 克隆该库
git clone https://github.com/ylhao/learn-es6

// 在根目录下执行以下命令
npm install

// 启动
gulp

// 之后修改 src 文件夹的 index.js 会自动得到转码后的文件（dist 文件夹下的 index.js）
```
