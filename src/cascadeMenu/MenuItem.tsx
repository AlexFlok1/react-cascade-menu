import { FC, useEffect, useState } from 'react';
import MenuWrapper from './MenuWrapper';
import { StyledMenuItem } from './styles';
import { MenuItemT } from './types';

type MenuItemProps = Omit<MenuItemT, 'key'> & { isVisible: boolean };

const MenuItem: FC<MenuItemProps> = ({ itemContent, subMenu, isVisible }) => {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!show) setClicked(false);
  }, [show]);

  return (
    <StyledMenuItem
      onClick={(event) => {
        event.stopPropagation();
      }}
      onMouseOver={(event) => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {itemContent &&
        itemContent({
          menuIsVisiable: isVisible,
          isClicked: clicked,
          handleClick: setClicked,
        })}
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
