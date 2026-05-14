import type { ReactNode } from 'react';

export type AppRoute = {
  path: string;
  label: string;
  element?: ReactNode;
  children?: ChildRoute[];
};
type ChildRoute =
  | { index: true; element: ReactNode; path?: never }
  | { index?: never; path: string; element?: ReactNode };
