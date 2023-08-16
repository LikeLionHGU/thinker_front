// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useRef } from 'react';
import { loginApi } from '/src/apis/user.ts';
import { Button } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { isLoginAtom, loginIdAtom } from '/src/store/atom.ts';
export default function GoogleButton() {
  const setIsLoginState = useRecoilValue(isLoginAtom);
  const setIsLoginIdState = useRecoilValue(loginIdAtom);
  // const { loginWithCredential } = useAuthContext();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);

    console.log(decodedToken);
    const userInfo = {
      id: parseInt(decodedToken.sub.slice(0, 8)),
      name: decodedToken.family_name,
      email: decodedToken.email,
    };
    const res = await loginApi(decodedToken.sub);

    setIsLoginState(true);
    setIsLoginIdState(decodedToken.sub);

    // userLogin(decodedToken.sub)
    //   .then((response) => {
    //     if (response.data.isRegistered === true) {
    //       localStorage.setItem('accessToken', response.data.tokens.accessToken);
    //       localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
    //       window.location.href = '/';
    //       setIsLogin(true);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response.data.isRegistered === false) {
    //       console.log('ddd', error.response.data);
    //       navigate('/');
    //       setRegisterModalState(true);
    //       setUserLoginInfo(decodedToken);
    //     }
    //   });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={onFailure}
        useOneTap
      />
    </>
  );
}
