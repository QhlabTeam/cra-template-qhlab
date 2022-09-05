# Write a Component

## Stateless UI Component

Let's create a "Head" component which takes title, children as props to display the html title

```plain
src
└── components
    └── Head.jsx
```

[Head.jsx](../../../src/components/Head.jsx)

```jsx
import {Helmet} from 'react-helmet-async';

import {CONFIG} from '../constants/config';

/** @param {React.ComponentProps<typeof Helmet>} */
export function Head({title, children, ...rest}) {
  return (
    <Helmet {...rest}>
      <title>
        {title
          ? `${title} | ${CONFIG.helmet.baseTitle}`
          : CONFIG.helmet.baseTitle}
      </title>
      {children}
    </Helmet>
  );
}
```

## Stateless Styled UI Component

Let's create a "Image" component using `@emotion/styled` library

```plain
src
└── components
    └── Image.jsx
```

[Image.jsx](../../../src/components/Image.jsx)

```jsx
import styled from '@emotion/styled';

export const Image = styled.img((props) => ({
  width: props.size ?? props.width ?? '100%',
  height: props.size ?? props.height ?? '100%',
  objectFit: props.fit ?? 'contain',
  flexShrink: 0,
}));
Image.displayName = 'Image';
```

## Feature Component

A feature component can be either stateful or stateless, but it has to be strongly related to the feature

For example, let's make a complex "LoginForm" component for "auth" feature which focus on login and logout logic

```plain
src
└── features
    └── auth
        └── components
            └── LoginForm.jsx
```

[LoginForm.jsx](../../../src/features/auth/components/LoginForm.jsx)

```jsx
import styled from '@emotion/styled';
import {size} from 'polished';
import {useReducer} from 'react';

import {Image} from '../../../components/Image';
import {useAuth} from '../../../hooks/useAuth';
import {storage} from '../../../utils/storage';
import {login} from '../api/login';
import {register} from '../api/register';

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  background-color: white;
  padding: 40px 24px;
  border-radius: 12px;
  box-shadow: 0 60px 20px -10px rgba(0, 0, 0, 0.04),
    0 40px 80px 40px rgba(0, 0, 0, 0.08);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: -8px;
`;

const Tagline = styled.p`
  color: gray;
  margin-bottom: 12px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  width: 100%;
  letter-spacing: 1px;

  &:focus-within {
    outline: none;
    border-bottom-color: black;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 40px;
  height: 50px;
`;

const SignupButton = styled(LoginButton)`
  background-color: transparent;
  border: 2px solid black;
  color: currentColor;
`;

const ErrorMessage = styled.p`
  color: orangered;
  padding: 4px 0;
  font-size: 14px;
`;

const Avatar = styled(Image)`
  ${size(80)}
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const TYPES = {
  field: 'field',
  error: 'error',
  login: 'login',
  logout: 'logout',
  success: 'success',
};

const initialState = {
  hasLogged: false,
  username: '',
  password: '',
  error: '',
  isLoading: false,
};

function loginReducer(state, action) {
  switch (action.type) {
    case TYPES.field:
      return {...state, [action.field]: action.payload};
    case TYPES.error:
      return {
        ...initialState,
        error: action.payload ?? 'Invalid username or password',
      };
    case TYPES.login:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.logout:
      return {
        ...initialState,
        hasLogged: false,
      };
    case TYPES.success:
      return {
        ...initialState,
        hasLogged: true,
      };
    default:
      return state;
  }
}

export function LoginForm({onSuccess}) {
  const [state, dispatch] = useReducer(
    loginReducer,
    initialState,
    (initial) => ({
      ...initial,
      hasLogged: !!storage.getToken(),
    })
  );
  const {username, password, error, isLoading} = state;
  const {userInfo: loggedUserInfo} = useAuth();

  async function req(apiMethod) {
    dispatch({type: TYPES.login});

    try {
      const {userInfo, token} = await apiMethod({username, password});
      dispatch({type: TYPES.success});
      storage.setToken(token);
      storage.setUserInfo(userInfo);
      if (onSuccess) onSuccess({userInfo, token});
    } catch (e) {
      dispatch({type: TYPES.error, payload: e.response.data?.message});
    }
  }

  function handleLogin() {
    req(login);
  }

  function handleSignup() {
    req(register);
  }

  function handleLogout() {
    storage.clearToken();
    storage.clearUserInfo();
    dispatch({type: TYPES.logout});
  }

  const logged = state.hasLogged && loggedUserInfo && (
    <Container>
      <Title>Hi, {loggedUserInfo.username}</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 30,
        }}
      >
        <Avatar src={loggedUserInfo.avatar} />
      </div>
      <LoginButton disabled={isLoading} type='button' onClick={handleLogout}>
        Logout
      </LoginButton>
    </Container>
  );

  if (logged) return logged;

  return (
    <Container>
      <Form
        autoComplete='off'
        spellCheck='false'
        onSubmit={(ev) => {
          ev.preventDefault();
          handleLogin();
        }}
      >
        <Title>Log in</Title>
        <Tagline>Enter your credentials to access your account.</Tagline>
        <div>
          <Input
            placeholder='Name'
            readOnly={isLoading}
            type='text'
            value={username}
            onChange={(ev) =>
              dispatch({
                type: TYPES.field,
                field: 'username',
                payload: ev.target.value,
              })
            }
          />
        </div>
        <div style={{marginBottom: error ? 0 : 20}}>
          <Input
            autoComplete='new-password'
            placeholder='Password'
            readOnly={isLoading}
            type='password'
            value={password}
            onChange={(ev) =>
              dispatch({
                type: TYPES.field,
                field: 'password',
                payload: ev.target.value,
              })
            }
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton disabled={isLoading} type='submit'>
          Login
        </LoginButton>
        <SignupButton disabled={isLoading} type='button' onClick={handleSignup}>
          Sign up
        </SignupButton>
      </Form>
    </Container>
  );
}
```
