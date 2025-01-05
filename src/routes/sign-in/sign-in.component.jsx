import { useEffect } from 'react';
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils.js';
import SignUpForm from '../../components/sign-up-form/sign-up-form-compomem.jsx';

import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const logGoogleRedirectUser = async () => {
    const response = await signInWithGoogleRedirect();
    console.log(response);
  };

  return (
    <div>
      Sign in
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
