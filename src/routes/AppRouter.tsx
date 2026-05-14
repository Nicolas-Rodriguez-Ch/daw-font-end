import { BrowserRouter, Route, Routes } from 'react-router';

import { ROUTES } from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
