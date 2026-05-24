import { useState } from 'react';

import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { AdminSidePanel, Button, Form, Input, Select, TextCustom } from '@/components';
import { useVehicle } from '@/hooks';
import { vehicleService } from '@/services';

import type { Vehicle } from '../../../public/index';

const selectOptions = [
  { label: 'Available', value: 'true' },
  { label: 'Not Available', value: 'false' },
];

type FormValues = {
  vehicleModel: string;
  vehicleBrand: string;
  vehicleAvailability: string;
};

const validateFields = (values: FormValues): FormValues => {
  return {
    vehicleModel: values.vehicleModel ? '' : 'You must provide a vehicle model',
    vehicleBrand: values.vehicleBrand ? '' : 'You must provide a vehicle brand',
    vehicleAvailability: values.vehicleAvailability ? '' : 'You must set the vehicle availability',
  };
};

// Inner form — receives a guaranteed non-null vehicle, initialises state directly
const UpdateForm = ({ vehicle }: { vehicle: Vehicle }) => {
  const navigate = useNavigate();
  const [formValue, setFormValues] = useState<FormValues>({
    vehicleModel: vehicle.model,
    vehicleBrand: vehicle.brand,
    vehicleAvailability: String(vehicle.status),
  });
  const [errors, setErrors] = useState<FormValues>({
    vehicleModel: '',
    vehicleBrand: '',
    vehicleAvailability: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateFields(formValue);
    const isValid = !Object.values(validationErrors).some(Boolean);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setDisabled(true);
    await toast
      .promise(
        vehicleService.update(vehicle.id, {
          model: formValue.vehicleModel,
          brand: formValue.vehicleBrand,
          status: formValue.vehicleAvailability === 'true',
        }),
        {
          pending: 'Updating vehicle...',
          success: 'Vehicle updated successfully!',
          error: 'Failed to update vehicle.',
        },
      )
      .then(() => navigate(`/vehicles/${vehicle.id}`))
      .finally(() => setDisabled(false));
  };

  return (
    <div className='min-h-3/4 bg-steel-100 flex flex-col md:flex-row'>
      <AdminSidePanel
        title='Update vehicle'
        description='Modify the details of an existing vehicle in your fleet. Change its brand, model, or availability status.'
        bullets={[
          'Pre-filled with current vehicle data',
          'Update availability in real-time',
          'Changes reflect immediately across the system',
        ]}
      />

      <div className='flex flex-col flex-1 items-center justify-center px-4 py-10 md:py-5'>
        <div className='mb-6 text-center md:hidden'>
          <TextCustom variant='heading' text='Update vehicle' />
        </div>

        <Form onSubmit={handleSubmit}>
          <Input
            id='vehicleModel'
            label='Vehicle Model'
            placeholder='Corolla'
            value={formValue.vehicleModel}
            onChange={(value) => handleChange('vehicleModel', value)}
            error={errors.vehicleModel}
            disabled={disabled}
          />
          <Input
            id='vehicleBrand'
            label='Vehicle Brand'
            placeholder='Toyota'
            value={formValue.vehicleBrand}
            onChange={(value) => handleChange('vehicleBrand', value)}
            error={errors.vehicleBrand}
            disabled={disabled}
          />
          <Select
            id='availability'
            placeholder='Is the vehicle available?'
            label='Vehicle availability'
            options={selectOptions}
            value={formValue.vehicleAvailability}
            onChange={(value) => handleChange('vehicleAvailability', value)}
            error={errors.vehicleAvailability}
            disabled={disabled}
          />
          <div className='flex flex-row'>
            <Button
              text='← Cancel'
              variant='primary'
              disabled={disabled}
              callback={() => navigate(`/vehicles/${vehicle.id}`)}
            />
            <Button type='submit' text='Save changes' variant='secondary' disabled={disabled} />
          </div>
        </Form>
      </div>
    </div>
  );
};

// Outer shell — waits for the vehicle fetch, then hands off to UpdateForm
const UpdateVehicle = () => {
  const { id } = useParams<{ id: string }>();
  const { vehicle, loading, error } = useVehicle(Number(id));
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[50vh]'>
        <TextCustom text='Loading vehicle...' variant='regular' className='text-steel-400' />
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[50vh] gap-4'>
        <TextCustom text='Vehicle not found.' variant='heading' className='text-cream-500' />
        <Button text='Back to fleet' variant='primary' callback={() => navigate('/vehicles')} />
      </div>
    );
  }

  return <UpdateForm vehicle={vehicle} />;
};

export default UpdateVehicle;
