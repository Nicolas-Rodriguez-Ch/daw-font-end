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
  HOME: '/',
  VEHICLES: 'vehicles',
  VEHICLE_DETAIL: (id: string) => `vehicles/${id}`,
  REGISTER: 'admin/register',
  UPDATE_VEHICLE: (id: string) => `admin/update/:${id}`,
} as const;
