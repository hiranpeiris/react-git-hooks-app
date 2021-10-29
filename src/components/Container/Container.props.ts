import { ReactNode } from 'react';

export enum ContainerOrientation {
  Column = 'column',
  Row = 'row',
  ColumnReverse = 'column-reverse',
  RowReverse = 'row-reverse',
}

export enum ContainerAlign {
  Center = 'center',
  Start = 'flex-start',
  End = 'flex-end',
}

export interface ContainerProps {
  children: ReactNode;
  orientation?: ContainerOrientation;
  align: ContainerAlign;
}
