import Button from '../Button';
import TextCustom from '../TextCustom';
import type { CardProps } from './types';

const Card = ({ primaryButton, secondaryButton }: CardProps) => {
  const hasButtons = primaryButton ?? secondaryButton;

  return (
    <div className='bg-steel-800 border border-steel-600 rounded-lg p-4 md:p-6 flex flex-col gap-4 w-full'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row items-start justify-between gap-2'>
          <TextCustom text='Lorem ipsum title' variant='heading' />
          <span className='text-xs md:text-sm text-sage-300 bg-sage-700 px-2 py-1 rounded shrink-0'>
            Category
          </span>
        </div>

        <TextCustom
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          variant='regular'
          className='text-periwinkle-300'
        />

        <TextCustom
          text='Lorem ipsum detail · Jan 2025'
          variant='small'
          className='text-steel-300'
        />
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
