import React, { FC, Fragment, Suspense, lazy } from 'react';

import 'bootstrap';
import '../scss/littlegarden.scss';

import Loader from './Loader';

const Header: FC = lazy(
  () => import(/* webpackChunkName: "header" */ 'components/Header'),
);
const NavMenu: FC = lazy(
  () => import(/* webpackChunkName: "navmenu" */ 'components/NavMenu'),
);
const Main: FC = lazy(
  /* webpackChunkName: "main" */ () => import('components/Main'),
);

const App: FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader text="Cargando cabecera..." />}>
        <Header />
        <NavMenu />
      </Suspense>
      <Suspense fallback={<Loader text="Cargando contenido..." />}>
        <Main />
      </Suspense>
    </Fragment>
  );
};

export default App;
