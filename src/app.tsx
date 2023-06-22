import type { Component } from 'solid-js';
import { Link, useRoutes, useLocation } from '@solidjs/router';

import { routes } from './routes';
import NavBar from './components/NavBar';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <NavBar />
      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
