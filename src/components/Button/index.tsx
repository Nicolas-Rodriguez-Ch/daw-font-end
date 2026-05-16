import TextCustom from '../TextCustom';
import type { ButtonProps } from './types';

const variantStyles: Record<string, string> = {
  secondary: [
    'bg-steel-600 text-steel-100 border border-steel-700',
    'hover:bg-steel-700',
    'active:scale-[0.97]',
    'focus-visible:ring-2 focus-visible:ring-periwinkle-400 focus-visible:ring-offset-1',
    'disabled:opacity-45 disabled:cursor-not-allowed',
  ].join(' '),

  primary: [
    'bg-transparent text-periwinkle-600 border border-periwinkle-500',
    'hover:bg-periwinkle-100 hover:text-periwinkle-700 hover:border-periwinkle-700',
    'active:scale-[0.97]',
    'focus-visible:ring-2 focus-visible:ring-periwinkle-400 focus-visible:ring-offset-1',
    'disabled:opacity-45 disabled:cursor-not-allowed',
  ].join(' '),

  muted: [
    'bg-sage-100 text-sage-600 border border-sage-200',
    'hover:bg-sage-200',
    'active:scale-[0.97]',
    'focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-1',
    'disabled:opacity-45 disabled:cursor-not-allowed',
  ].join(' '),
};

const Button = ({ text, variant, callback }: ButtonProps) => {
  return (
    <button
      onClick={callback}
      className={[
        'inline-flex items-center justify-center rounded-md',
        'px-4 py-2 md:px-5 md:py-2.5',
        'transition-all duration-150',
        variantStyles[variant],
      ].join(' ')}
    >
      <TextCustom text={text} variant='button' />
    </button>
  );
};

export default Button;
