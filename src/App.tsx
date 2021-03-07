import React, { lazy, Suspense, FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import Layout from '@/utils/components/Layout';
import ROUTES from '@/const/routes';
import '@/assets/styles/index.scss';

const HomePage = lazy(() => import('./pages/Home'));
const SignUpPage = lazy(() => import('./pages/SignUp'));
const SignInPage = lazy(() => import('./pages/SignIn'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const App: FC = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <Layout>
      <Suspense fallback={(
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '50vh',
        }}
        >
          {/* <LoadingCircle isLoading size={64} /> */}
          LOADING
        </div>
      )}
      >
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.SIGN_IN} exact component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} exact component={SignUpPage} />
          <Route path={ROUTES.NOT_FOUND} exact component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;
