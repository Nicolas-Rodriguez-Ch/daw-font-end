import { useState } from 'react';

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
  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };
  const updateError = (field: string, value: string) => {
    setErrors((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formValue.vehicleModel) {
      updateError('vehicleModel', 'You must pass a car model');
    }
    if (!formValue.vehicleBrand) {
      updateError('vehicleBrand', 'You must pass a car Brand');
    }
    if (!formValue.vehicleAvailability) {
      updateError('vehicleAvailability', 'You have to make the vehicle available or not available');
    }
  };
  const handleSubmit = () => {
    validateForm();
    console.log(Object.values(errors).join());
    if (Object.values(errors).length > 1) {
      return;
    } else {
      console.log(formValue);
    }
  };

  return (
    <>
      <TextCustom
        variant='heading'
        text='Please enter the data of the vehicle you whish to register'
      />
      <Form onSubmit={handleSubmit}>
        <Input
          id='vehicleModel'
          label='Vehicle Model'
          placeholder='Corolla'
          value={formValue.vehicleModel}
          onChange={(value) => handleChange('vehicleModel', value)}
          error={errors.vehicleModel}
        />
        <Input
          id='vehicleBrand'
          label='Vehicle Brand'
          placeholder='Toyota'
          value={formValue.vehicleBrand}
          onChange={(value) => handleChange('vehicleBrand', value)}
          error={errors.vehicleBrand}
        />
        <Select
          id='availability'
          placeholder='Is the vehicle Available?'
          options={selectOptions}
          value={formValue.vehicleAvailability}
          onChange={(value) => handleChange('vehicleAvailability', value)}
          error={errors.vehicleAvailability}
        />
        <Button type='submit' text='Register this vehicle!' variant='secondary' />
      </Form>
    </>
  );
};

export default RegisterVehicle;
