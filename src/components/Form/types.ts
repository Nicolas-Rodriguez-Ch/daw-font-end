import type { ReactNode } from 'react';

export interface FormProps {
  onSubmit: () => void;
  children: ReactNode;
}
