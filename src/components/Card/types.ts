import type { ButtonVariant } from '../Button/types';

interface CardButton {
  text: string;
  variant: ButtonVariant;
  callback: () => void;
}

export interface CardProps {
  primaryButton?: CardButton;
  secondaryButton?: CardButton;
}
