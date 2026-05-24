import { client } from '@/api/client';
import type { ReservationResponse, VehicleRequest } from '@/api/types';

const BASE = '/ms-operations';

export const operationService = {
  createReservation: (payload: VehicleRequest) =>
    client.post<ReservationResponse>(`${BASE}/create-reservation`, payload),

  updateAvailability: (payload: VehicleRequest) =>
    client.post<ReservationResponse>(`${BASE}/update-availability`, payload),

  cancelReservation: (payload: VehicleRequest) =>
    client.post<ReservationResponse>(`${BASE}/cancel-reservation`, payload),
};
