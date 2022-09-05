<p align="center">
  <img src="assets/logo.png" alt="logo" width="550px" />
</p>

<br />
<h1 align="center">Qhlab React App V2</h1>

<p align="center"> ⚛️ 领域驱动设计(DDD)模型架构 Qhlab React App V2</p>
<br />

[English](README.md) | 简体中文

- [开始](#开始)
  - [导入到 Github/Gitlab  (1)](#导入到-githubgitlab--1)
  - [手动克隆 (2)](#手动克隆-2)
  - [升级到 React 18](#升级到-react-18)
- [持续更新](#持续更新)
- [安装依赖](#安装依赖)
- [NPM 脚本](#npm-脚本)
- [项目架构](#项目架构)
- [路由](#路由)
  - [基本用法](#基本用法)
  - [导航](#导航)
  - [嵌套路由](#嵌套路由)
  - [URL 参数](#url-参数)
- [CSS in JS](#css-in-js)
  - [CSS Prop Styling](#css-prop-styling)
  - [Styled Components Styling](#styled-components-styling)
- [全局状态管理](#全局状态管理)
- [Mock](#mock)
  - [添加一个 Mock](#添加一个-mock)
- [Click To React Component](#click-to-react-component)
- [教程](#教程)
- [许可证](#许可证)

## 开始

这里有两种方式(1, 2)来克隆项目

### 导入到 Github/Gitlab  (1)

最简单的方式是以导入到 gitlab/github 的方式来新建仓库

在 Github 上

```sh
Open Gitlab site
-> Import repository
-> Your old repository’s clone URL
-> `https://github.com/QhlabTeam/cra-template-qhlab.git`
```

在 Gitlab 上

```sh
Open Gitlab site
-> New project
-> Import project
-> Select repo by URL
-> Git repository URL
-> `https://github.com/QhlabTeam/cra-template-qhlab.git`
```

### 手动克隆 (2)

添加一个 `--bare` 参数来克隆，然后推送到你自己的**远程空仓库中**

```bash
git clone --bare https://github.com/QhlabTeam/cra-template-qhlab.git old-repo

cd old-repo
git push --mirror https://github.com/QhlabTeam/new-repo

cd ..
rm -rf old-repo

git clone https://github.com/QhlabTeam/new-repo
```

> <https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository>

### 升级到 React 18

当你完成克隆后，你的仓库会有两个分支 `main` 和 `upgrade-to-react-18`

默认分支 `main` 仍然使用React 17来支持IE，但如果你的项目是一个移动端，那么你完全不需要考虑IE，这时候更推荐使用React 18来获得更高的性能和更好的体验

以合并分支的方式来升级到React 18

```sh
git swtich main
git merge upgrade-to-react-18

# 完成后你就可以删除 `upgrade-to-react-18` 分支了
git branch -d upgrade-to-react-18
```

## 持续更新

拉取并合并自模板源分支来更新

```sh
# React17
git switch main
git pull https://github.com/QhlabTeam/cra-template-qhlab.git

# React18
git switch main
git pull https://github.com/QhlabTeam/cra-template-qhlab.git upgrade-to-react-18
```

如果你遇到错误 `fatal: refusing to merge unrelated histories`, 尝试添加一个参数 `--allow-unrelated-histories` 来强制合并

```sh
git pull https://github.com/QhlabTeam/cra-template-qhlab.git --allow-unrelated-histories
```

## 安装依赖

```sh
yarn

# or
yarn install
```

## NPM 脚本

所有的脚本都应该编写在 `scripts.json` 文件中然后通过一行命令来使用. 我们使用 [better-scripts](https://github.com/iamyoki/better-scripts) 来管理所有的npm脚本, 更多请阅读 [📄 文档](https://better-scripts.vercel.app/)

```sh
# Show all scripts
yarn scripts

# Run a specific script
yarn scripts run dev
```

## 项目架构

大部分代码编写在 `src` 目录:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- constants         # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # DDD feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- mock              # test utilities and mock server
|
+-- utils             # shared utility functions
|
+-- index.jsx         # index entry for the entire app
|
+-- App.jsx           # root component
|
+-- AppProviders.jsx  # all of the application providers
|
+-- AppRoutes.jsx     # routes configuration
|
+-- GlobalStyles.jsx  # css-in-js based global style component
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

为了能更轻松且最易于维护的方式来扩展项目，保持大部分代码编写在 `features` 目录中以不同的特性(feature)为单位分布. 所有的 `feature` 目录应该包含以领域特定的特性代码. 这将允许您将功能保持在一个特性的范围内，而不是将其声明与共享事物混合. 这比扁平的包含大量文件的目录结构更容易维护.

一个特性(feature)可以包含以下目录:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores/contexts    # state stores or contexts for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
```

## 路由

| Library               | Docs                                 | API                                      |
| --------------------- | ------------------------------------ | ---------------------------------------- |
| React Router Dom - V6 | <https://reactrouter.com/docs/en/v6> | <https://reactrouter.com/docs/en/v6/api> |

### 基本用法

`AppRoutes.jsx`

```jsx
<Routes>
  <Route index element={<HomePage />} />
  <Route element={<NotFoundPage />} path='*' />
</Routes>
```

### 导航

```jsx
<nav>
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>
</nav>
```

### 嵌套路由

```jsx
<Routes>
  <Route element={<Layout />} path='/'>
    <Route index element={<HomePage />} />
    <Route element={<NotFoundPage />} path='*' />
  </Route>
</Routes>
```

### URL 参数

```jsx
<Routes>
  <Route path='/:postId' element={<PostPage />} />
</Routes>
```

```jsx
const {postId} = useParams()
```

## CSS in JS

按照规范, 所有的样式都应该以 `CSS in JS`的方式使用emotion来编写.

| Library         | Docs                                   | API                                |
| --------------- | -------------------------------------- | ---------------------------------- |
| @emotion/react  | <https://emotion.sh/docs/introduction> | <https://emotion.sh/docs/css-prop> |
| @emotion/styled | <https://emotion.sh/docs/introduction> | <https://emotion.sh/docs/styled>   |

### CSS Prop Styling

```jsx
<button
  css={css`
    background-color: hotpink;
    color: white;
    &:hover {
      filter: brightness(1.3);
    }
  `}
  >
  Click Me
</button>
```

如果你觉得这样写不易读，可以抽离为变量

```jsx
const buttonCSS = css`
  background-color: hotpink;
  color: white;
  &:hover {
    filter: brightness(1.3);
  }
`
...

<button css={buttonCSS}>
  Click Me
</button>
```

### Styled Components Styling

css prop和styled components这两种方式都推荐使用

```jsx
const Button = styled.button`
  background-color: hotpink;
  color: white;
  &:hover {
    filter: brightness(1.3);
  }
`
```

## 全局状态管理

> 使用官方的Context API取而代之

| Library   | Docs                                                              | API                                   |
| --------- | ----------------------------------------------------------------- | ------------------------------------- |
| ~~Jotai~~ | ~~<https://jotai.org/> <br> https://jotai.org/docs/introduction~~ | ~~<https://jotai.org/docs/api/core>~~ |

## Mock

| Library | Docs                | API |
| ------- | ------------------- | --- |
| msw     | <https://mswjs.io/> |

### 添加一个 Mock

以数组的方式在 `mock/handles/[your-handler].js` 中添加一个handler

```js
import {rest} from 'msw';

export const userHandlers = [
  ...
  rest.get('user', (req, res, ctx)=> res(ctx.status(200), ctx.json({
    username: 'Qhlaber',
    age: 20
  })))
];
```

然后尝试fetch api, 打开浏览器的控制台执行如下:

```js
fetch('/user').then(res=>res.json()).then(data=>console.log(data))
```

如果你在日志中看到打印结果即完成

## Click To React Component

按住 `Option` 键+单击跳转组件源码

| Library                  | Docs                                                 | API |
| ------------------------ | ---------------------------------------------------- | --- |
| click-to-react-component | <https://github.com/ericclemmons/click-to-component> |

## 教程

- [Write a Feature](tutorials/write-a-feature.md)
- [Write a Component](tutorials/write-a-component.md)
- [Write a Story](tutorials/write-a-story.md)

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)

░██████╗░██╗░░██╗██╗░░░░░░█████╗░██████╗░
██╔═══██╗██║░░██║██║░░░░░██╔══██╗██╔══██╗
██║██╗██║███████║██║░░░░░███████║██████╦╝
╚██████╔╝██╔══██║██║░░░░░██╔══██║██╔══██╗
░╚═██╔═╝░██║░░██║███████╗██║░░██║██████╦╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░
