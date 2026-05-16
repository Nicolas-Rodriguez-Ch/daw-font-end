export interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  callback: () => void;
  disabled?: boolean;
}

export type ButtonVariant = 'primary' | 'secondary' | 'muted';
