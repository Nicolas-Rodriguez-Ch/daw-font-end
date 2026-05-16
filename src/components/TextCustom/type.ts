export interface TextCustomProps {
  text: string;
  variant: TextCustomVariant;
  className?: string;
}
type TextCustomVariant = 'regular' | 'heading' | 'small';
