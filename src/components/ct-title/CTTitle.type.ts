import { ReactNode } from 'react';

export interface CTTitleProps extends Partial<Omit<HTMLDivElement, 'title'>> {
  title: string | ReactNode;
}
