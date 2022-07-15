<p align="center">
  <img src="src/assets/images/logo.png" alt="logo" width="550px" />
</p>

<br />
<h1 align="center">Qhlab React App Template</h1>

<p align="center"> ⚛️ React App Template for Qhlab, based on <a href="README-CRA.md">CRA</a></p>
<br />

<p align="center">
  English | <a href="README-zh_CN.md">简体中文</a>
</p>

- [Clone This Template](#clone-this-template)
- [Keep Updates](#keep-updates)
- [Installation](#installation)
- [Scripts](#scripts)
- [File Structure](#file-structure)
  - [Root](#root)
  - [Src](#src)
- [Routes](#routes)
  - [Basic Usage](#basic-usage)
  - [Navigation](#navigation)
  - [Nested Routes](#nested-routes)
  - [URL Parameters](#url-parameters)
- [CSS in JS](#css-in-js)
  - [CSS Prop Styling](#css-prop-styling)
  - [Styled Components Styling](#styled-components-styling)
- [Global State Management](#global-state-management)
  - [Basic Usage](#basic-usage-1)
- [Mocks](#mocks)
  - [Add a Mock](#add-a-mock)
- [Click To React Component](#click-to-react-component)
- [License](#license)

## Clone This Template

The simplest way is by import this repo into your gitlab/github as a new clone repo
> gitlab/github -> new project -> import project -> Repo by URL -> `https://github.com/QhlabTeam/cra-template-qhlab.git` -> configs -> done

Or manually, clone template with `--bare` flag, and then publish to your own remote blank repo.
> <https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository>

```bash
git clone --bare https://github.com/QhlabTeam/cra-template-qhlab.git old-repo

cd old-repo
git push --mirror https://github.com/QhlabTeam/new-repo

cd ..
rm -rf old-repo

git clone https://github.com/QhlabTeam/new-repo
```

## Keep Updates

Once you cloned this template repo, create a `template` branch with this template repo remote url, so that you can keep updates by merging the newest `template` branch.

```sh
git remote add template https://github.com/QhlabTeam/cra-template-qhlab.git
git switch -c template template/main
```

Also, you can create another `template-upgrade-to-react-18` branch

```sh
git switch -c template-upgrade-to-react-18 template/upgrade-to-react-18
```

## Installation

```sh
yarn install
```

Or

```sh
npm install
```

## Scripts

`yarn start`

Runs the app in the development mode.

`yarn build`

Builds the app for production to the `build` folder.

`yarn test`

Launches the test runner in the interactive watch mode.

`yarn lint`

Lint your code quality by eslint.

## File Structure

### Root

```plain
├── README-CRA.md
├── README.md
├── commitlint.config.js
├── craco.config.js
├── node_modules
├── package.json
├── public
├── src
└── yarn.lock
```

### Src

```plain
src
├── App.jsx
├── assets
├── atoms
├── components
├── constants
├── containers
├── global.css.js
├── helpers
├── hooks
├── index.jsx
├── mocks
├── reportWebVitals.js
└── setupTests.js
```

- `index.jsx` : The entry file of the entire app
- `App.jsx` : The first root Component
- `global.css.js`: Global style written with 'css in js'
- `components/` Place global stateless UI components like **Button**, **Link**, **Text**
- `containers/`: Place stateful components like **route view components**, **layout components**, **business components**, **large combined components**
- `hooks/`: Place global custom hooks
- `helpers/`: Place global utility functions and any other useful tools
- `assets/`: Place your static files like **images**
- `atoms/`: Place your jotai global states
- `constants/`: All your constant variables like **configs**
- `mocks/`: msw mocks

## Routes

| Library               | Docs                                 | API                                      |
| --------------------- | ------------------------------------ | ---------------------------------------- |
| React Router Dom - V6 | <https://reactrouter.com/docs/en/v6> | <https://reactrouter.com/docs/en/v6/api> |

### Basic Usage

`index.jsx`

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

`App.jsx`

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

`PostPage.jsx`

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

| Library | Docs                                                          | API                               |
| ------- | ------------------------------------------------------------- | --------------------------------- |
| Jotai   | <https://jotai.org/> <br> https://jotai.org/docs/introduction | <https://jotai.org/docs/api/core> |

### Basic Usage

Create a primative atom

`atoms/count.js`

```jsx
import { atom } from 'jotai'

export const countAtom = atom(0)
```

Use the atom in your components

`HomePage.jsx`

```jsx
const [count, setCount] = useAtom(countAtom)
...
```

## Mocks

| Library | Docs                | API |
| ------- | ------------------- | --- |
| msw     | <https://mswjs.io/> |

### Add a Mock

Append a handle in `mocks/handles.js` in handlers array

```js
import {rest} from 'msw';

export const handlers = [
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
