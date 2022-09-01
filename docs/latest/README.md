<p align="center">
  <img src="assets/logo.png" alt="logo" width="550px" />
</p>

<br />
<h1 align="center">Qhlab React App V2</h1>

<p align="center"> ⚛️ A Domain-Driven Design (DDD) Architecture for Qhlab React App V2</p>
<br />

<p align="center">
  English | <a href="README.zh-CN.md">简体中文</a>
</p>

- [Get Started](#get-started)
  - [Import on Github/Gitlab (1)](#import-on-githubgitlab-1)
  - [Manually clones (2)](#manually-clones-2)
  - [Upgrade to React 18](#upgrade-to-react-18)
- [Keep Updating](#keep-updating)
- [Install Dependencies](#install-dependencies)
- [NPM Scripts](#npm-scripts)
- [Project Structure](#project-structure)
- [Routes](#routes)
  - [Basic Usage](#basic-usage)
  - [Navigation](#navigation)
  - [Nested Routes](#nested-routes)
  - [URL Parameters](#url-parameters)
- [CSS in JS](#css-in-js)
  - [CSS Prop Styling](#css-prop-styling)
  - [Styled Components Styling](#styled-components-styling)
- [Global State Management](#global-state-management)
- [Mock](#mock)
  - [Add a Mock](#add-a-mock)
- [Click To React Component](#click-to-react-component)
- [License](#license)

## Get Started

There are two recommended ways(1, 2) to clone this template

### Import on Github/Gitlab (1)

The simplest way is by import this repo into your gitlab/github as a new clone repo

On Github

```sh
Open Gitlab site
-> Import repository
-> Your old repository’s clone URL
-> `https://github.com/QhlabTeam/cra-template-qhlab.git`
```

On Gitlab

```sh
Open Gitlab site
-> New project
-> Import project
-> Select repo by URL
-> Git repository URL
-> `https://github.com/QhlabTeam/cra-template-qhlab.git`
```

### Manually clones (2)

Clone template with `--bare` flag, and then publish to your own **remote blank repo**.

```bash
git clone --bare https://github.com/QhlabTeam/cra-template-qhlab.git old-repo

cd old-repo
git push --mirror https://github.com/QhlabTeam/new-repo

cd ..
rm -rf old-repo

git clone https://github.com/QhlabTeam/new-repo
```

> <https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository>

### Upgrade to React 18

Once you cloned this template, you will have two branches `main` and `upgrade-to-react-18`

The default branch `main` still using react 17 which supports IE, but if your project is a mobile-end, then you don't need to consider IE at all, and it is more recommended to use React18 for better performance and experience.

Upgrade your main branch to react18 by merging

```sh
git swtich main
git merge upgrade-to-react-18

# You may delete the `upgrade-to-react-18` branch now
git branch -d upgrade-to-react-18
```

## Keep Updating

Once you cloned this template repo, create a `template` branch with this template repo remote url, so that you can keep updates by merging the newest `template` branch.

```sh
# React17
git switch main
git pull https://github.com/QhlabTeam/cra-template-qhlab.git

# React18
git switch main
git pull https://github.com/QhlabTeam/cra-template-qhlab.git upgrade-to-react-18
```

If you met error `fatal: refusing to merge unrelated histories`, try to add a flag `--allow-unrelated-histories` to enforce merging

```sh
git pull https://github.com/QhlabTeam/cra-template-qhlab.git --allow-unrelated-histories
```

Make sure your template branch is targeting the correct remote

```sh
git branch -vv
```

## Install Dependencies

```sh
yarn

# or
yarn install
```

## NPM Scripts

All scripts should be written in `scripts.json` file and use them with one single command. We use [better-scripts](https://github.com/iamyoki/better-scripts) to manage all npm scripts, read more on the [docs site](https://better-scripts.vercel.app/).

```sh
yarn scripts
```

## Project Structure

Most of the code lives in the `src` folder and looks like this:

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

A feature could have the following structure:

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

## Routes

| Library               | Docs                                 | API                                      |
| --------------------- | ------------------------------------ | ---------------------------------------- |
| React Router Dom - V6 | <https://reactrouter.com/docs/en/v6> | <https://reactrouter.com/docs/en/v6/api> |

### Basic Usage

`AppRoutes.jsx`

```jsx
<Routes>
  <Route index element={<HomePage />} />
  <Route element={<NotFoundPage />} path='*' />
</Routes>
```

### Navigation

```jsx
<nav>
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>
</nav>
```

### Nested Routes

```jsx
<Routes>
  <Route element={<Layout />} path='/'>
    <Route index element={<HomePage />} />
    <Route element={<NotFoundPage />} path='*' />
  </Route>
</Routes>
```

### URL Parameters

```jsx
<Routes>
  <Route path='/:postId' element={<PostPage />} />
</Routes>
```

```jsx
const {postId} = useParams()
```

## CSS in JS

Every style should be written in `CSS in JS` using emotion, it's a convention.

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

If you complains about the readability of the code, you can extract it as a variable.

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

Both css prop and styled components are recommend to use.

```jsx
const Button = styled.button`
  background-color: hotpink;
  color: white;
  &:hover {
    filter: brightness(1.3);
  }
`
```

## Global State Management

> Use React Context API instead.

| Library   | Docs                                                              | API                                   |
| --------- | ----------------------------------------------------------------- | ------------------------------------- |
| ~~Jotai~~ | ~~<https://jotai.org/> <br> https://jotai.org/docs/introduction~~ | ~~<https://jotai.org/docs/api/core>~~ |

## Mock

| Library | Docs                | API |
| ------- | ------------------- | --- |
| msw     | <https://mswjs.io/> |

### Add a Mock

Append a handle in `mock/handles/[your-handler].js` in handlers array

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

Then try to fetch the api, open the devtool in browser, execute:

```js
fetch('/user').then(res=>res.json()).then(data=>console.log(data))
```

It's done if you see the response log in console.

## Click To React Component

Press `Option` + Click to open component source code in editor.

| Library                  | Docs                                                 | API |
| ------------------------ | ---------------------------------------------------- | --- |
| click-to-react-component | <https://github.com/ericclemmons/click-to-component> |

## License

[MIT](https://choosealicense.com/licenses/mit/)

░██████╗░██╗░░██╗██╗░░░░░░█████╗░██████╗░
██╔═══██╗██║░░██║██║░░░░░██╔══██╗██╔══██╗
██║██╗██║███████║██║░░░░░███████║██████╦╝
╚██████╔╝██╔══██║██║░░░░░██╔══██║██╔══██╗
░╚═██╔═╝░██║░░██║███████╗██║░░██║██████╦╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░
