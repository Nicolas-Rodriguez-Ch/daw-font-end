// src/routes/routes.ts
import { Home } from '@/pages';

import type { AppRoute } from './types';

export const ROUTES: AppRoute[] = [
  {
    path: '/',
    element: <Home />,
    label: 'Home',
  },
];

export const ROUTE_PATHS = {
  HOME: '/',
} as const;
