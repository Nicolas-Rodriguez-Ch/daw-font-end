import TextCustom from '../TextCustom';
import type { InputTextProps } from './types';

const InputText = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
}: InputTextProps) => {
  const inputStyles = [
    'bg-steel-100 rounded-md w-full',
    'px-3 py-2 text-sm text-steel-900',
    'placeholder:text-steel-400',
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
      <input
        id={id}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={inputStyles}
      />
      {error && (
        <TextCustom text={`* ${error}`} variant='small' className='text-cream-500 font-bold' />
      )}
    </div>
  );
};

export default InputText;
