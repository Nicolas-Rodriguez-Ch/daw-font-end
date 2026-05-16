import { Button } from '@/components';

const Home = () => {
  return (
    <div>
      <span>From Home</span>
      <Button text='test' variant='primary' callback={() => console.log('sup')} />
    </div>
  );
};

export default Home;
