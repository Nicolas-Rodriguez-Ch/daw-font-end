import { useState } from 'react';

import Select from '@/components/Select';

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
    </>
  );
};

export default Vehicles;
