import { Home, RegisterVehicle, UpdateVehicle, VehicleDetail, Vehicles } from '@/pages';

import type { AppRoute } from './types';

export const ROUTES: AppRoute[] = [
  { path: '/', label: 'Home', element: <Home /> },
  {
    path: 'vehicles',
    label: 'Vehicles',
    children: [
      { index: true, element: <Vehicles /> },
      { path: ':id', element: <VehicleDetail /> },
    ],
  },
  {
    path: 'admin',
    label: 'Admin',
    children: [
      { path: 'register', element: <RegisterVehicle /> },
      { path: 'update/:id', element: <UpdateVehicle /> },
    ],
  },
] as const;

export const ROUTE_PATHS = {
  Home: '/',
  Vehicles: 'vehicles',
  Register: 'admin/register',
} as const;
