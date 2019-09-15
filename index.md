## VsCode
* 简介
  >VsCode 是微软推出的新一代免费开源的现代轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义快捷键、包括匹配和颜色区分、代码片段、代码对比Diff、GIT命令等特性，支持插件扩张，并针对网页开发和云端应用开发做了优化。VsCode跨平台支持win、Mac、以及Linux，运行流畅，可以算得上是微软的难得良心之作。

* VsCode官方网址：https://code.visualstudio.com/ 

* VsCode基本功能介绍

1. 常用快捷键

   >
   ``` Ctrl+Shift+E  资源管理器

    Ctrl+Shift+F  搜索

    Ctrl+Shift+G  源代码管理器

    Ctrl+Shift+D  调试

    Ctrl+Shift+X  插件扩展

    F1或Ctrl+Shift+P  打开命令面板

    Shift+Alt+F  代码格式化

    Ctrl+F  查找

    Ctrl+H  查找代替

    Ctrl+N 新建文件

    Ctrl+S  保存

    Alt+↑或Alt+↓上下移动一行

    Shift+Alt+↑或Shift+Alt+↓向上或向下复制一行

    . . . . . .
    ````

2. 扩展插件

* 常用的插件
    >
    ```
     中文语言包Chinese（Simplified）Language Pack for Visual Studio Code

     MarkDown预览增强Markdown Preview Enhanced

     代码拼写检查器CodeSpell Checker

     浏览器预览增强open in browser

     检查英文语句中的中文符号 sneak mark

     VsCode 图标vscode-icons

     格式化代码提示器beautify

     HTML代码提示器HTML Snippets

     css样式提升器HTML css support

     各种皮肤主题 列如：One DarkPro，Bimbo ,Atom One Dark Theme  
     
     . . . . . . 
     ````

## MarkDown

* 简介
  > markdown是一种可以使用普通文本编辑器编写的比HTML更加简单易学的标记语言，通过简单的标记语法，它可以是普通文本内容具有一定的格式，同时markdown又能转换成HTML、PDF等多种格式。


* 标题
  > markdown的标题标记能显示出文章的结构，行首插入1-6个#，每增加一个#表示更深层次的内容，对应到标题的深度由1-6阶
  >
  ```
  # 一级标题
  ## 二级标题
  ### 三级标题
  #### 四级标题
  ##### 五级标题
  ###### 六级标题
  ````
  > 
  ```
  #一级标题

  ##二级标题

  ###三级标题

  ####四级标题

  #####五级标题

  ######六二级标题
  ````

* 文本加粗

  > **文本加粗**

  >
  ```
   **文本加粗**
   ````

* 斜体

  > *斜体*

  >
   ```
  *斜体*
  ````

* 下划线

  > <u>下划线</u>

  >
  ```
  <u>下划线</u>
  ````

* 删除线

  > ~~删除线~~

  >
  ```
  ~~下划线~~
  ````

* 分割线

  > 下面是一条分割线
  ***

  >
  ```
  下面是一条分割线

  ***
  ````

* 引用文本

  > 这是介绍markdown引用文本语法的文字。

  >
  ```
  > 这是介绍markdown引用文本语法的文字。
  ````

* 符号列表或者数字列表

  * 圆点符号

  1. 数字序列列表

  2. 数字序列列表

  >
  ```
  * 圆点符号

  1. 数字序列列表

  2. 数字序列列表
  ````

* 高亮
  > ==文本的高亮==

  >
  ```
  ==文本的高亮==
  ````

* 待办事项

  *[]javascript

  *[]Java

  *[]c++

  *[]markdown

  >
  ```
  *[]javascript
  *[]Java
  *[]c++
  *[]markdown
  ````

* 插入链接

> [Markdown百度百科](https://baidu.baidu.com/item/markdown/3245829?fr=aladdin)

>
```
[Markdown百度百科](https://baidu.baidu.com/item/markdown/3245829?fr=aladdin)
````

* 插入图片

> markdown支持嵌入网络图片或者直接脱兔本地图片，其中本地图片格式支持jpg、png和GIF.

> ![](http://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/f6/a3/f3/f6a3f3b8-8243-05ad-41f2-2fe69ae9d0d5/source/512x512bb.jpg)

>
```
 ![](http://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/f6/a3/f3/f6a3f3b8-8243-05ad-41f2-2fe69ae9d0d5/source/512x512bb.jpg)
 ````

* 插入表格

  | 账户类型 | 免费账户 | 标准账户 | 高级账户 |
  | 账户流量 | 60M | 1GB | 10GB |
  | 设备数目 | 2台 | 无限制 | 无限制 |
  | 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|

  >
  ```
  | 账户类型 | 免费账户 | 标准账户 | 高级账户 |
  | 账户流量 | 60M | 1GB | 10GB |
  | 设备数目 | 2台 | 无限制 | 无限制 |
  | 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|
  ````

* 插入源代码
 
  > 插入源代码功能是为程序员量身定做的。用 ```上下包裹一段代码，并指定一种语言（指定语言可以显示语法高亮）。

  >
  ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>     

        </body>
        </html>
  ````

## Git & GitHub

* 简介
 
  > Git 是 Linux 的创始人 Linus Torvalds 开源的一款分布式版本控制系统，以帮助开发者更好的对项目进行版本管理。每一个优秀的开发者在进行项目开发时都会第一时间给自己的项目加上 Git，以便能更好的追踪代码修改，进行版本回溯等操作。在多人协作的开发过程中，Git 更是必不可少的

* 基本原理
  
  > 
  ```
  1. 工作目录
  2. 暂存区-----存放工作中更改的文件，避免项目代码丢失。
  3. 代码仓库-----当开发功能足够成为一个版本时，提交到仓库。其实就是暂存区中代码复制一份存储到代码仓库中
  ````

* 基本流程

  > 
  ```
  1. 初始化代码仓库git init

  2. 工作目标提交到暂存区

  3. 暂存区代码提交到代码仓库
  ````




* git bash 命令行模式的基本特点
  >
  ```
  * 简洁，迅速，高效
  ````

* git bash 基础命令

  > 
  ```
  pwd (print working directory) 查看当前所在路径--绝对路径
  cd(change directory) 切换目标
  mkdir(make directory) 创建目录
  touch 创建文件
  ls(list) 查看当前目录下的内容
  cat 查看文件内容（一次性将内容全部显示）
  clear 清屏
  q(quit) 退出
  ````

* Git官方教程

  >[Git官方教程](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

* GitHub网址

  > [GitHib网址](https://github.com/)