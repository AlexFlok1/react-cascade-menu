/**
 * Represents a menu item.
 * @typedef {Object} MenuItemT
 * @property {string} key - The unique key for the menu item.
 * @property {Function} itemContent - A function that returns the content for the menu item.
 * @param {Object} props - An object containing props for the menu item content.
 * @property {Object[]} props.children - The children of the menu item.
 * @returns {(React.ReactNode|React.ReactElement|string)} The content for the menu item.
 * @property {Object} [subMenu] - An optional sub-menu for the menu item.
 * @property {Array<MenuItemT>} subMenu.items - An array of menu items for the sub-menu.
 * @property {string} subMenu.spacing - The spacing between sub-menu items.
 */

/**
 * A type that represents a menu item.
 * @type {MenuItemT}
 */

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
