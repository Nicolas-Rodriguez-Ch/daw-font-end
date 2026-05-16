import Button from '../Button';
import TextCustom from '../TextCustom';
import type { CardProps } from './types';

const Card = ({ primaryButton, secondaryButton, vehicle }: CardProps) => {
  console.log('🚀 ~ Card ~ Vehicle:', vehicle);
  const hasButtons = primaryButton ?? secondaryButton;

  return (
    <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6 flex flex-col gap-4 w-full'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row items-start justify-between gap-2'>
          <TextCustom text={vehicle.model} variant='heading' />
          <span
            className={`text-xs md:text-sm px-2 py-1 rounded shrink-0 ${vehicle.status ? 'text-sage-300 bg-sage-700' : 'bg-cream-700 text-steel-300'}`}
          >
            {vehicle.status ? 'Available' : 'Not Available'}
          </span>
        </div>

        <TextCustom text={vehicle.brand} variant='regular' className='text-periwinkle-300' />

        <TextCustom text={`Vehicle id: ${vehicle.id}`} variant='small' className='text-steel-300' />
      </div>

      {hasButtons && (
        <>
          <div className='h-px bg-steel-600' />
          <div
            className={`flex flex-col md:flex-row gap-2 md:gap-3 ${
              primaryButton && secondaryButton ? 'md:justify-between' : ''
            }`}
          >
            {primaryButton && (
              <Button
                text={primaryButton.text}
                variant={primaryButton.variant}
                callback={primaryButton.callback}
              />
            )}
            {secondaryButton && (
              <Button
                text={secondaryButton.text}
                variant={secondaryButton.variant}
                callback={secondaryButton.callback}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
