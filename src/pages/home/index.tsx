import { mockData } from '@/assets/index';
import { Card } from '@/components';

const Home = () => {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4 sm:gap-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto'>
      {mockData.map((vehicle) => {
        return (
          <div key={vehicle.id}>
            <Card vehicle={vehicle} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
