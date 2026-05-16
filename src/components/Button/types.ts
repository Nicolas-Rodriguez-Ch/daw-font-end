export type ButtonProps = ActionButton | SubmitButton;

type BaseButton = {
  text: string;
  variant: ButtonVariant;
  disabled?: boolean;
};

type ActionButton = BaseButton & {
  type?: 'button';
  callback: () => void;
};

type SubmitButton = BaseButton & {
  type: 'submit' | 'reset';
  callback?: never;
};

export type ButtonVariant = 'primary' | 'secondary' | 'muted';
