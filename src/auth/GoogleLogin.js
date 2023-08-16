// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function GoogleButton() {
  const navigate = useNavigate();

  // const { loginWithCredential } = useAuthContext();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);

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
