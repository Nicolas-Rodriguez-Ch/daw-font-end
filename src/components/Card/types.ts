import type { Vehicle } from '../../../public/index';
import type { ButtonVariant } from '../Button/types';

interface CardButton {
  text: string;
  variant: ButtonVariant;
  callback: () => void;
}

export interface CardProps {
  vehicle: Vehicle;
  primaryButton?: CardButton;
  secondaryButton?: CardButton;
}
