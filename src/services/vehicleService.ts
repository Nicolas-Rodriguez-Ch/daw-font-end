import { client } from '@/api/client';
import type { VehiclePayload } from '@/api/types';

import type { Vehicle } from '../../public/index';

const BASE = '/ms-vehicles/api/vehicles';

export const vehicleService = {
  getAll: () => client.get<Vehicle[]>(BASE),

  getById: (id: number) => client.get<Vehicle>(`${BASE}/id/${id}`),

  getByBrand: (brand: string) => client.get<Vehicle[]>(`${BASE}/brand/${brand}`),

  getByModel: (model: string) => client.get<Vehicle[]>(`${BASE}/model/${model}`),

  getByStatus: (status: boolean) => client.get<Vehicle[]>(`${BASE}/status/${status}`),

  create: (payload: VehiclePayload) => client.post<Vehicle>(BASE, payload),

  update: (id: number, payload: VehiclePayload) => client.put<Vehicle>(`${BASE}/id/${id}`, payload),

  updateStatus: (id: number, status: boolean) =>
    client.put<Vehicle>(`${BASE}/id/${id}/status/${status}`),

  delete: (id: number) => client.delete<void>(`${BASE}/id/${id}`),
};
