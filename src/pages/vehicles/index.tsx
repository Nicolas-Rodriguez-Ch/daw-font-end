import { useState } from 'react';

import { Button, Input, Select } from '@/components';
import Form from '@/components/Form';

const OPTIONS = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const Vehicles = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<{ name?: string; category?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) {
      next.name = 'Name is required';
    }
    if (!category) {
      next.category = 'Please select a category';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    console.log({ name, category });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id='name'
        label='Name'
        placeholder='Enter a name'
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Select
        id='category'
        label='Category'
        options={OPTIONS}
        value={category}
        onChange={setCategory}
        placeholder='Select one...'
        error={errors.category}
      />
      <Button text='Submit' variant='secondary' type='submit' />{' '}
    </Form>
  );
};

export default Vehicles;
