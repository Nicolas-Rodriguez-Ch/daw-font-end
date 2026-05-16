import type { ElementType } from 'react';

import type { TextCustomProps } from './type';

const variantMap: Record<TextCustomProps['variant'], ElementType> = {
  heading: 'h1',
  regular: 'p',
  small: 'small',
  button: 'span',
};

const variantClass: Record<TextCustomProps['variant'], string> = {
  heading: 'text-xl md:text-2xl font-medium leading-snug',
  regular: 'text-base md:text-lg leading-relaxed',
  small: 'text-sm md:text-base leading-normal',
  button: 'text-sm font-medium leading-none tracking-wide',
};

const TextCustom = ({ text, variant, className = '' }: TextCustomProps) => {
  const Tag = variantMap[variant];
  return <Tag className={`${variantClass[variant]} ${className}`}>{text}</Tag>;
};

export default TextCustom;
