import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import SignIn from './SignIn';

const SignInPage: FC = () => (
  <>
    <Helmet title="NotFound page" />
    <SignIn />
  </>
);

export default SignInPage;
