import { FC, useState } from 'react';
import MenuWrapper from './MenuWrapper';
import { StyledMenuItem } from './styles';
import { MenuItemT } from './types';

type MenuItemProps = Omit<MenuItemT, 'key'>;

const MenuItem: FC<MenuItemProps> = ({ itemContent, subMenu }) => {
  const [show, setShow] = useState(false);
  return (
    <StyledMenuItem
      onClick={(event) => {
        event.stopPropagation();
      }}
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {itemContent && itemContent}
      {subMenu && subMenu.items && subMenu.items.length > 0 && (
        <MenuWrapper
          isVisible={show}
          menuItems={subMenu.items}
          boxPosition={{ vertical: 'top', horizontal: 'right' }}
          spacing={subMenu.spacing}
        />
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
