export type MenuItemT = {
  key: string;
  itemContent: React.ReactNode | string;
  subMenu?: { items: MenuItemT[]; spacing?: string };
};
