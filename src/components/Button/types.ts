export interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  callback: () => void;
}

type ButtonVariant = 'primary' | 'secondary' | 'muted';
