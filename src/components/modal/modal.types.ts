export interface IModal {
  children: React.ReactNode;
  closeModalPath: string;
  onRemove: () => void;
}
