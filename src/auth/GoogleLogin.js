// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useRef } from 'react';
import { loginApi } from '/src/apis/user.ts';
import { Button } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { isLoginAtom, loginIdAtom } from '/src/store/atom.ts';
import axios from 'axios';
export default function GoogleButton() {
  const setIsLoginState = useSetRecoilState(isLoginAtom);
  const setIsLoginIdState = useSetRecoilState(loginIdAtom);
  // const { loginWithCredential } = useAuthContext();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);

    const userInfo = {
      id: decodedToken.sub,
      name: decodedToken.family_name,
      email: decodedToken.email,
    };

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userInfo),
    //   cache: 'no-cache',
    // };
    // fetch(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/user`, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });

    loginApi(userInfo).then((res) => {
      console.log(res);
    });

    setIsLoginState(true);
    setIsLoginIdState(decodedToken.sub);
    // }, []);

    // const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_URL}/api/user`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userInfo),
    //   cache: 'no-cache',
    // });
    // const result = await response.json();
    // console.log(result);

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
