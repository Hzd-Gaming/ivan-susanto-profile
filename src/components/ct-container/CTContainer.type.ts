import { ReactNode } from 'react';

export interface CTContainerProps {
  children?: ReactNode;
  title?: string | ReactNode;
  theme: 'black' | 'blue';
}
