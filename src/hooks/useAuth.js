import {useNavigate} from 'react-router-dom';

import {storage} from '../utils/storage';

export function useAuth() {
  const navigate = useNavigate();

  const token = storage.getToken();
  const userInfo = storage.getUserInfo();

  function navigateLogin(redirect) {
    if (redirect) {
      navigate(`/auth/login?redirect=${redirect}`);
    } else {
      navigate('/auth/login');
    }
  }

  return {
    token,
    userInfo,
    navigateLogin,
  };
}
