使用 git 做代码管理工具时，设置 gitignore 是必不可少的流程，一些系统或者 IDE 会在目录下生成与项目不相关的文件，而这些文件我们不期望被提交到仓库之中。理解 gitignore 的 pattern 规则十分重要。

## 参考教程
- [GitHub提供的 .gitignore文件](https://github.com/github/gitignore)
- [参考链接1](https://blog.haohtml.com/archives/15965)
- [参考链接2](https://git-scm.com/docs/gitignore)
- [参考链接3](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758404317281e54b6f5375640abbb11e67be4cd49e0000)

## PATTERN 规则
- 空行不匹配任何内容，所以可以作为块分隔符
- “#”开头表示注释
- 如果在匹配的内容前面加上“!”，则这些匹配过的部分将被移出（双重否定，放在ignore文件里的是要忽略掉的文件，加上“!”则变成了不需要忽略掉的）
- 如果一个匹配 pattern 后面有一个斜杠，如 foo/，则默认会匹配 foo 文件夹下的所有（包含子文件夹）内容
- 如果一个匹配 pattern 不包含斜杠，如 foo，则匹配单个文件
- 转义字符“\”，比如“\#”、“\*”等。

## glob 模式
所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。星号（*）匹配零个或多个任意字符；[abc] 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；问号（?）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9]表示匹配所有 0 到 9 的数字）。

## 补充
```
# 可以匹配到文件或文件夹
test

# 只能匹配到文件夹
test/

# 可以在子目录下单独放置一个 gitignore 文件
es6
|--abc
|--|--test.js
|--|--.gitignore
```

## **
[参考链接](http://git-scm.com/docs/gitignore)
