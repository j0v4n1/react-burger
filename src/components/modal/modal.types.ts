import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  closeModalPath: string;
  onRemove: () => void;
}
