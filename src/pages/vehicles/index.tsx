import { useEffect, useState } from 'react';

import { Link } from 'react-router';

import { Card, TextCustom } from '@/components';
import { vehicleService } from '@/services/vehicleService.ts';

import type { Vehicle } from '../../../public';

const Vehicles = () => {
  const [vehicleData, setVehicleData] = useState<Vehicle[]>();

  const handleFetchVehicles = async () => {
    const { data } = await vehicleService.getAll();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleFetchVehicles();
      setVehicleData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className='text-center mt-4'>
        <TextCustom text='These are all the vehicles available in our system!' variant='heading' />
        <TextCustom
          text='Click on any of the cards to see each vehicle details'
          variant='regular'
        />
      </div>
      <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4 sm:gap-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto'>
        {vehicleData ? (
          vehicleData.map((vehicle) => {
            return (
              <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id}>
                <Card
                  vehicle={vehicle}
                  primaryButton={{
                    text: 'Vehicle Details',
                    variant: 'muted',
                    callback: () => {},
                  }}
                />
              </Link>
            );
          })
        ) : (
          <>
            <TextCustom
              text='No Vehicles in the system at this moment, try again later'
              variant='heading'
            />
            <Link to={'register'}>
              <TextCustom text='Register the first vehicle!' variant='regular' />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Vehicles;
