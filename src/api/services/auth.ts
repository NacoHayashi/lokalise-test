import Https from '@/api';
const Auth = {
  login: () => {
    return Https.get('/v2/user/login', {});
  },
  logout: () => {
    return Https.get('/v2/user/logout', {});
  },
  getMe: () => {
    return Https.get('/v2/user/status', {});
  },
};
export default Auth;
