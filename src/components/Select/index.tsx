import TextCustom from '../TextCustom';
import type { SelectProps } from './types';

const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
}: SelectProps) => {
  const selectStyles = [
    'appearance-none bg-steel-100 rounded-md w-full',
    'px-3 py-2 text-sm text-steel-900',
    'border transition-all duration-150',
    'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white',
    'disabled:opacity-45 disabled:cursor-not-allowed',
    error
      ? 'border-cream-600 focus:ring-cream-500'
      : 'border-steel-300 focus:ring-periwinkle-400 focus:border-periwinkle-500',
  ].join(' ');

  return (
    <div className='flex flex-col gap-1.5 w-full p-2 md:p-4'>
      {label && (
        <label htmlFor={id} className='text-sm text-steel-700'>
          {label}
        </label>
      )}
      <div className='relative'>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={selectStyles}
        >
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
          <svg
            className='w-4 h-4 text-steel-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {error && <TextCustom text={`* ${error}`} variant='small' className='text-cream-500' />}
    </div>
  );
};

export default Select;
