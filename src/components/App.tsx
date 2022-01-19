import React, { lazy, Suspense } from 'react';

import 'bootstrap';
import '../scss/littlegarden.scss';

import Loader from './Loader';

const Header = lazy(() => import('components/Header'));

const Main: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Main;
