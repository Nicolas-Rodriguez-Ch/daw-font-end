import { client } from '@/api';
import type { ReservationResponse, VehicleRequest } from '@/api';

const BASE = '/ms-operations';

export const operationService = {
  createReservation: (payload: VehicleRequest) =>
    client.post<ReservationResponse>(`${BASE}/create-reservation`, payload),

  updateAvailability: (payload: VehicleRequest) =>
    client.post<ReservationResponse>(`${BASE}/update-availability`, payload),

  cancelReservation: (payload: VehicleRequest) =>
    client.post<ReservationResponse>(`${BASE}/cancel-reservation`, payload),
};
