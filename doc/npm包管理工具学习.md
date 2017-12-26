## npm 包管理工具

npm 包管理工具随 node 一起安装。不需要单独安装。

## npm 常用操作
``` shell
# 更新
npm install npm@latest -g #latest: 最新版本, -g: 全局安装

# 查看版本
npm -v

# 初始化一个新的package.json 文件
npm init
npm init -y

# 查看全局安装了哪些模块
npm list -g
npm list -g depth 0

# 查看本地安装了哪些模块
npm list
npm list depth 0

# 全局安装
npm install -g <package name>

# 本地安装
npm install <package name>

# 本地安装并添加到 package.json
npm install <package name> --save-dev
npm install <package name> --save

# 依照package.json 安装
npm install

# 卸载模块，同时也会在package.json中移除
npm uninstall <package name>
```

## --save 和 --save-dev
--save-dev 是你开发时候依赖的东西，--save 是你发布之后还依赖的东西。比如，你写 ES6 代码，如果你想编译成 ES5 发布那么 babel 就是 devDependencies。如果你用了 jQuery，由于发布之后还是依赖jQuery，所以是dependencies。