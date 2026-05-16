export interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  callback: () => void;
  disabled?: boolean;
}

type ButtonVariant = 'primary' | 'secondary' | 'muted';
