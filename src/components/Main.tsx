import React, { Suspense } from 'react';

import 'bootstrap';
import '../scss/littlegarden.scss';

const Header = React.lazy(() => import('./Header'));

const Main: React.FC = () => {
  return (
    <>
      <Suspense fallback={<p>Cargando...</p>}>
        <Header />
      </Suspense>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Main;
