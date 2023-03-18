type ItemContentPropsT = {
  menuIsVisiable?: boolean;
  isClicked?: boolean;
  handleClick?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuItemT = {
  key: string;
  itemContent: (
    props: ItemContentPropsT
  ) => React.ReactNode | React.ReactElement | string;
  subMenu?: { items: MenuItemT[]; spacing?: string };
};
