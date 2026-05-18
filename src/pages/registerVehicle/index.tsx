import { useState } from 'react';

import { toast } from 'react-toastify';

import { Button, Form, Input, Select, TextCustom } from '@/components';

const selectOptions = [
  { label: 'Available', value: 'true' },
  { label: 'Not Available', value: 'false' },
];

const RegisterVehicle = () => {
  const [formValue, setFormValues] = useState<Record<string, string>>({
    vehicleModel: '',
    vehicleBrand: '',
    vehicleAvailability: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({
    vehicleModel: '',
    vehicleBrand: '',
    vehicleAvailability: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const updateError = (field: string, value: string) => {
    setErrors((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    setDisabled(true);
    let isValid = true;

    if (!formValue.vehicleModel) {
      updateError('vehicleModel', 'You must pass a car model');
      isValid = false;
    }

    if (!formValue.vehicleBrand) {
      updateError('vehicleBrand', 'You must pass a car Brand');
      isValid = false;
    }

    if (!formValue.vehicleAvailability) {
      updateError('vehicleAvailability', 'You have to make the vehicle available or not available');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (!isValid) {
      setDisabled(false);
      return;
    } else {
      const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
      await toast
        .promise(resolveAfter3Sec, {
          pending: 'Request was sent',
          success: 'Request has finished',
          error: 'error during Request',
        })
        .finally(() => {
          setFormValues({ vehicleModel: '', vehicleBrand: '', vehicleAvailability: '' });
          setDisabled(false);
        });
    }
  };

  return (
    <div className='min-h-3/4 bg-steel-100 flex flex-col md:flex-row'>
      <div className='hidden md:flex flex-col justify-center px-16 lg:px-24 py-16 bg-steel-800 md:w-5/12 lg:w-1/2'>
        <div className='max-w-sm'>
          <TextCustom
            variant='small'
            text='Fleet Management'
            className='text-steel-400 uppercase mb-4'
          />
          <TextCustom
            variant='heading'
            text='Register a new vehicle'
            className='text-steel-100 mb-4'
          />
          <TextCustom
            variant='regular'
            text='Expand your fleet with a few clicks. Add vehicles to your inventory and manage their availability status effortlessly.'
            className='text-steel-400 mb-10'
          />
          <div className='flex flex-col gap-4'>
            {[
              'Track availability in real-time',
              'Manage multiple vehicles seamlessly',
              'Update details whenever you need',
            ].map((item) => (
              <div key={item} className='flex items-start gap-3'>
                <span className='mt-0.5 w-1.5 h-1.5 rounded-full bg-periwinkle-400 shrink-0' />
                <TextCustom variant='small' text={item} className='text-steel-400' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col flex-1 items-center justify-center px-4 py-10 md:py-5'>
        <div className='mb-6 text-center md:hidden'>
          <TextCustom variant='heading' text='Register a new vehicle' />
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
            placeholder='Is the vehicle Available?'
            label='Vehicle availability'
            options={selectOptions}
            value={formValue.vehicleAvailability}
            onChange={(value) => handleChange('vehicleAvailability', value)}
            error={errors.vehicleAvailability}
            disabled={disabled}
          />
          <Button
            type='submit'
            text='Register this vehicle!'
            variant='secondary'
            disabled={disabled}
          />
        </Form>
      </div>
    </div>
  );
};

export default RegisterVehicle;
