import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import SignUp from './SignUp';

const SignUpPage: FC = () => (
  <>
    <Helmet title="SignUp page" />
    <SignUp />
  </>
);

export default SignUpPage;
