import { ReactNode } from 'react';

export type CTMenuListList = {
  key: string;
  label: string | ReactNode;
  path?: string;
}[];

export interface CTMenuListProps {
  title?: string | ReactNode;
  list: CTMenuListList;
  clickable?: boolean;
  listWrapperContainerProps?: React.HTMLAttributes<HTMLDivElement>;
}
