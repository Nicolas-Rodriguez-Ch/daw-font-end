import type { TextCustomProps } from './type';

const variantMap: Record<TextCustomProps['variant'], React.ElementType> = {
  heading: 'h1',
  regular: 'p',
  small: 'small',
  button: 'span',
};

const variantClass: Record<TextCustomProps['variant'], string> = {
  heading: 'font-medium leading-tight',
  regular: 'leading-relaxed',
  small: 'leading-normal',
  button: 'text-sm md:text-base font-medium leading-none tracking-wide',
};

const TextCustom = ({ text, variant, className = '' }: TextCustomProps) => {
  const Tag = variantMap[variant];
  return <Tag className={`${variantClass[variant]} ${className}`}>{text}</Tag>;
};

export default TextCustom;
