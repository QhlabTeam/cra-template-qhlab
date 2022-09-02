# Write a Feature

Let's create a "landing" feature

## Create "landing" folder

```plain
src
└── features
    └── landing
        ├── api
        ├── components
        └── routes
```

## Create "LandingPage" route

```plain
landing
└── routes
    └── LandingPage.jsx
```

LandingPage.jsx

```jsx
import {LandingIntro} from '../components/LandingIntro'

export function LandingPage() {
  return <div>
    <LandingIntro />
  </div>
}
```

## Create "LandingIntro" component

Since we have used a `LandingIntro` component which requires api to fetch intro information from remote server, so let's implement it

```plain
landing
├── api
│   └── useGetIntro.js
└── components
    └── LandingIntro.jsx
```

LandingIntro.jsx

```jsx
import {useGetIntro} from '../api/useGetIntro'

export function LandingIntro() {
  const {data} = useGetIntro()

  if(!data) return <p>Loading...</p>

  return <div>
    <h1>{data.title}</h1>
    <p>{data.desc}</p>
  </div>
}
```

useGetIntro

```js
export function useGetIntro() {
  return useSWR('/api/intro')
}
```

So far so good! Now we basically finished "landing" feature.

## Register on AppRoutes

Once we finished a feature, the last thing is to register it on `AppRoutes.jsx` so that it can be rendered.

AppRoutes

```jsx
export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
}
```
