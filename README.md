## 添加 .gitignore 文件
- [参考链接1](https://blog.haohtml.com/archives/15965)
- [参考链接2](https://git-scm.com/docs/gitignore)

## git 基本操作
``` bash
# 首先在 github 上新建一个仓库，并用一个 README.md 初始化

# 添加远程仓库
git remote add origin https://github.com/ylhao/learn-es6
git remote show

# 全局配置用户名和邮箱地址
# git config --global user.name "ylhao"
# git config --global user.email "765422195@qq.com"

# 在特定项目种使用特定的用户名和邮箱地址
# git config user.name "ylhao"
# git config user.email "765422195@qq.com"

# 查看配置信息
# git config --list
# git config user.name
# git config user.email

# 首先拉远程仓库
git pull origin master --allow-unrelated-histories

# 手动解决冲突问题（如果有的话）

# 向远程仓库推送
git push origin master
```

## git 补充

## npm 包管理工具
[npm 章节学习](./npm包管理工具学习.md)