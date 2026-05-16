import type { TextCustomProps } from './type';

const variantMap: Record<TextCustomProps['variant'], React.ElementType> = {
  heading: 'h1',
  regular: 'p',
  small: 'small',
};

const TextCustom = ({ text, variant, className }: TextCustomProps) => {
  const Tag = variantMap[variant];
  return <Tag className={className}>{text}</Tag>;
};

export default TextCustom;
