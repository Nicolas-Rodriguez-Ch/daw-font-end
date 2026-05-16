import { mockData } from '@/assets/index';
import { TextCustom } from '@/components';

const Home = () => {
  const totalVehicles = mockData.length;
  const availableVehicles = mockData.filter((vehicle) => vehicle.status).length;
  const unavailableVehicles = totalVehicles - availableVehicles;
  const availabilityPct = totalVehicles ? Math.round((availableVehicles / totalVehicles) * 100) : 0;

  const brandCounts = mockData.reduce<Record<string, number>>((acc, vehicle) => {
    acc[vehicle.brand] = (acc[vehicle.brand] ?? 0) + 1;
    return acc;
  }, {});

  const uniqueBrands = Object.keys(brandCounts).length;
  const topBrands = Object.entries(brandCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-6'>
        <div className='flex flex-col gap-2 text-center'>
          <span className='text-xs md:text-sm uppercase tracking-[0.2em] text-periwinkle-800'>
            System overview
          </span>
          <TextCustom text='Fleet status at a glance' variant='heading' />
          <TextCustom
            text='Live snapshot of inventory availability and brand coverage.'
            variant='regular'
            className='text-periwinkle-900'
          />
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6'>
            <TextCustom text='Total vehicles' variant='small' className='text-steel-300' />
            <TextCustom text={`${totalVehicles}`} variant='heading' className='text-cream-300' />
          </div>
          <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6'>
            <TextCustom text='Available now' variant='small' className='text-steel-300' />
            <TextCustom text={`${availableVehicles}`} variant='heading' className='text-sage-300' />
          </div>
          <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6'>
            <TextCustom text='Unavailable' variant='small' className='text-steel-300' />
            <TextCustom
              text={`${unavailableVehicles}`}
              variant='heading'
              className='text-cream-300'
            />
          </div>
          <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6'>
            <TextCustom text='Active brands' variant='small' className='text-steel-300' />
            <TextCustom
              text={`${uniqueBrands}`}
              variant='heading'
              className='text-periwinkle-200'
            />
          </div>
        </div>

        <div className='grid gap-4 lg:grid-cols-2 md:my-6'>
          <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6 flex flex-col gap-3'>
            <TextCustom text='Availability ratio' variant='regular' className='text-cream-300' />
            <div className='w-full h-3 rounded-full bg-steel-600 overflow-hidden'>
              <div className='h-full bg-sage-300' style={{ width: `${availabilityPct}%` }} />
            </div>
            <TextCustom
              text={`${availabilityPct}% of vehicles are ready to rent.`}
              variant='small'
              className='text-steel-300'
            />
          </div>

          <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6 flex flex-col gap-3'>
            <TextCustom text='Top brands in stock' variant='regular' className='text-cream-300' />
            <div className='flex flex-col gap-2'>
              {topBrands.length === 0 ? (
                <TextCustom
                  text='No brands available yet.'
                  variant='small'
                  className='text-steel-300'
                />
              ) : (
                topBrands.map(([brand, count]) => (
                  <div
                    key={brand}
                    className='flex items-center justify-between text-sm md:text-base text-steel-200'
                  >
                    <span>{brand}</span>
                    <span className='text-steel-400'>{count} vehicles</span>
                  </div>
                ))
              )}
            </div>
            <TextCustom
              text='Focus inventory planning on high-demand brands.'
              variant='small'
              className='text-steel-300'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
