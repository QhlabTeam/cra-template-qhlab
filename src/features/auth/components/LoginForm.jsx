import styled from '@emotion/styled';
import {useReducer} from 'react';

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
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
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

const ActionTypes = {
  FIELD: 'FIELD',
  ERROR: 'ERROR',
  LOGIN: 'LOGIN',
  SUCCESS: 'SUCCESS',
};

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
};

function loginReducer(state, action) {
  switch (action.type) {
    case ActionTypes.FIELD:
      return {...state, [action.field]: action.payload};
    case ActionTypes.CLEAR:
      return initialState;
    case ActionTypes.ERROR:
      return {
        ...initialState,
        error: action.payload ?? 'Invalid username or password',
      };
    case ActionTypes.LOGIN:
      return {
        ...initialState,
        isLoading: true,
      };
    case ActionTypes.SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export function LoginForm({onSuccess}) {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const {username, password, error, isLoading} = state;

  async function auth(method) {
    dispatch({type: ActionTypes.LOGIN});

    try {
      const {userInfo, token} = await method({username, password});
      dispatch({type: ActionTypes.SUCCESS});
      storage.setToken(token);
      storage.setUserInfo(userInfo);
      if (onSuccess) onSuccess({userInfo, token});
    } catch (e) {
      dispatch({type: ActionTypes.ERROR, payload: e.response.data?.message});
    }
  }

  function handleLogin() {
    auth(login);
  }

  function handleSignup() {
    auth(register);
  }

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
                type: ActionTypes.FIELD,
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
                type: ActionTypes.FIELD,
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
