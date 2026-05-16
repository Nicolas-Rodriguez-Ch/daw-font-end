import { useState } from 'react';

import { Input, Select } from '@/components';

const Vehicles = () => {
  const [test, setTest] = useState('');
  return (
    <>
      <div>Vehicles</div>
      <Select
        label='test'
        id='test'
        options={[
          { label: 'ppp', value: 'ppp' },
          { label: 'ccc', value: 'ccc' },
        ]}
        onChange={(e) => {
          setTest(e);
        }}
        value={test}
        placeholder='placeholder'
        error={test}
      />
      <Input
        id='testinput'
        label='testinput'
        placeholder='test input'
        value={test}
        onChange={(e) => setTest(e)}
        error={test}
      />
    </>
  );
};

export default Vehicles;
