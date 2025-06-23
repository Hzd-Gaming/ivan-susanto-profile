import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CTContainerProps
  extends Partial<
    Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title'
    >
  > {
  theme: 'black' | 'blue';
  title?: string | ReactNode;
}
