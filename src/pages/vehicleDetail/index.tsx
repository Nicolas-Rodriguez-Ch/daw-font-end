import { useState } from 'react';

import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { Button, Card, TextCustom } from '@/components';
import { useVehicle } from '@/hooks/useVehicle';
import { operationService } from '@/services/operationService';

import type { Vehicle } from '../../../public/index';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { vehicle, loading, error } = useVehicle(Number(id));

  // Only holds the post-reservation update; null means "use the fetched vehicle"
  const [reservedVehicle, setReservedVehicle] = useState<Vehicle | null>(null);
  const displayVehicle = reservedVehicle ?? vehicle;

  const handleReserve = async () => {
    if (!displayVehicle) {
      return;
    }

    const response = await toast.promise(
      operationService.createReservation({ vehicle: displayVehicle }),
      {
        pending: 'Sending reservation...',
        success: 'Vehicle reserved successfully!',
        error: 'Failed to reserve vehicle.',
      },
    );
    setReservedVehicle(response.data.vehicle);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[50vh]'>
        <TextCustom text='Loading vehicle...' variant='regular' className='text-steel-400' />
      </div>
    );
  }

  if (error || !displayVehicle) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[50vh] gap-4'>
        <TextCustom text='Vehicle not found.' variant='heading' className='text-cream-500' />
        <Button text='Back to fleet' variant='primary' callback={() => navigate('/vehicles')} />
      </div>
    );
  }

  return (
    <section className='max-w-2xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8'>
      <div className='flex flex-col gap-1'>
        <span className='text-xs uppercase tracking-[0.2em] text-periwinkle-800'>
          Vehicle detail
        </span>
        <TextCustom text='Vehicle information' variant='heading' />
        <TextCustom
          text='Full details for this vehicle. Reserve it or go back to the fleet.'
          variant='regular'
          className='text-steel-400'
        />
      </div>

      <Card
        vehicle={displayVehicle}
        primaryButton={{
          text: displayVehicle.status ? 'Reserve this vehicle' : 'Not available',
          variant: displayVehicle.status ? 'muted' : 'secondary',
          callback: displayVehicle.status ? handleReserve : () => {},
        }}
        secondaryButton={{
          text: 'Edit vehicle',
          variant: 'secondary',
          callback: () => navigate(`/admin/update/${displayVehicle.id}`),
        }}
      />

      <div className='flex'>
        <Button text='← Back to fleet' variant='primary' callback={() => navigate('/vehicles')} />
      </div>
    </section>
  );
};

export default VehicleDetail;
