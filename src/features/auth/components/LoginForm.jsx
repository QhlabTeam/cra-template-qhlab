import styled from '@emotion/styled';
import {useReducer} from 'react';

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
  CLEAR: 'CLEAR',
  ERRORS: 'ERRORS',
  SUBMIT: 'SUBMIT',
  SUCCESS: 'SUCCESS',
};

const initial = {
  name: '',
  password: '',
  errors: {
    name: '',
    password: '',
  },
  isLoading: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case ActionTypes.FIELD:
      return {...state, [action.field]: action.value};
    case ActionTypes.CLEAR:
      return initial;
    case ActionTypes.ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload,
        },
      };
    case ActionTypes.SUBMIT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

// new jose.EncryptJWT({'urn:example:claim': true})
//   .setProtectedHeader({alg: 'dir', enc: 'A256GCM'})
//   .setIssuedAt()
//   .setIssuer('urn:example:issuer')
//   .setAudience('urn:example:audience')
//   .setExpirationTime('2h')
//   .encrypt(crypto)
//   .then(console.log);

export function LoginForm({onSuccess}) {
  const [state, dispatch] = useReducer(formReducer, initial);
  const {name, password, errors, isLoading} = state;

  function handleLogin() {
    dispatch({type: ActionTypes.SUBMIT});
    login({username: name, password})
      .then(() => {})
      .finally(() => dispatch({type: ActionTypes.CLEAR}));
  }

  function handleSignup() {
    dispatch({type: ActionTypes.CLEAR});
    register({username: name, password})
      .then((data) => {
        console.log(data);
      })
      .finally(() => dispatch({type: ActionTypes.CLEAR}));
  }

  return (
    <Container>
      <Form
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
            value={name}
            onChange={(ev) =>
              dispatch({
                type: ActionTypes.FIELD,
                field: 'name',
                value: ev.target.value,
              })
            }
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </div>
        <div style={{marginBottom: 20}}>
          <Input
            placeholder='Password'
            readOnly={isLoading}
            type='password'
            value={password}
            onChange={(ev) =>
              dispatch({
                type: ActionTypes.FIELD,
                field: 'password',
                value: ev.target.value,
              })
            }
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>
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
