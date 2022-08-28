import {useNavigate} from 'react-router-dom';

import {storage} from '../utils/storage';

export function useAuth() {
  const navigate = useNavigate();

  const token = storage.getToken();
  const userInfo = storage.getUserInfo();

  function navigateLogin(redirectLocation) {
    navigate('/auth/login', {
      state: redirectLocation,
    });
  }

  return {
    token,
    userInfo,
    navigateLogin,
  };
}
