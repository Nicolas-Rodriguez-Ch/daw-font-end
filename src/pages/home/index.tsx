import { useState } from 'react';

import { Button } from '@/components';

const Home = () => {
  const [enableButton, setEnableButton] = useState(true);
  return (
    <div>
      <span>From Home</span>
      <Button text='test' variant='primary' callback={() => setEnableButton(!enableButton)} />
      <Button
        text='disbletest'
        variant='muted'
        callback={() => console.log('sup')}
        disabled={enableButton}
      />
    </div>
  );
};

export default Home;
