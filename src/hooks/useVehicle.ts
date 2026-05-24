import { useEffect, useState } from 'react';

import { vehicleService } from '@/services';

import type { Vehicle } from '../../public/index';

type UseVehicleState = {
  vehicle: Vehicle | null;
  loading: boolean;
  error: string | null;
};

export const useVehicle = (id: number): UseVehicleState => {
  const [state, setState] = useState<UseVehicleState>({
    vehicle: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    vehicleService
      .getById(id)
      .then(({ data }) => setState({ vehicle: data, loading: false, error: null }))
      .catch(() => setState({ vehicle: null, loading: false, error: 'Vehicle not found' }));
  }, [id]);

  return state;
};
