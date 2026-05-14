import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from '@/components';

import { ROUTES } from './routes';
import type { AppRoute } from './types';

const renderRoutes = (routes: AppRoute[]) =>
  routes.map((route, i) => (
    <Route key={route.path ?? i} path={route.path} element={route.element}>
      {route.children?.map((child, j) => (
        <Route
          key={child.path ?? j}
          index={child.index}
          path={child.path}
          element={child.element}
        />
      ))}
    </Route>
  ));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>{renderRoutes(ROUTES)}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
