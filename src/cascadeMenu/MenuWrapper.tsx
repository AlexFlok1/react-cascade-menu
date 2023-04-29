import { FC } from 'react';
import MenuItem from './MenuItem';
import { StyledMenuBox, StyledMenuWrapper } from './styles';
import { MenuItemT } from './types';
import { CSSObject } from '@mui/material';

type MenuWrapperPropsT = {
  isVisible: boolean;
  menuItems?: MenuItemT[];
  attachedTo?: React.RefObject<HTMLDivElement>;
  boxPosition?: {
    vertical: 'top' | 'bottom' | 'middle';
    horizontal: 'left' | 'right' | 'center';
  };
  spacing?: string;
  customStyleBox?: CSSObject;
  customStyleBoxWrapper?: CSSObject;
};

const MenuWrapper: FC<MenuWrapperPropsT> = ({
  isVisible,
  menuItems,
  boxPosition,
  attachedTo,
  spacing,
  customStyleBox,
  customStyleBoxWrapper,
}) => {
  const handleAttachment = () => {
    const node = attachedTo?.current;
    if (node) {
      const { height, x, y } = node.getBoundingClientRect();
      return { top: `${y + height}px`, left: `${x}px` };
    }
  };

  return (
    <StyledMenuWrapper
      component='div'
      hidden={!isVisible}
      originPosition={boxPosition}
      style={attachedTo ? handleAttachment() : {}}
      padding={`${spacing}`}
      customStyle={customStyleBoxWrapper}
    >
      <StyledMenuBox elevation={2} customStyle={customStyleBox}>
        {menuItems &&
          menuItems.length > 0 &&
          menuItems.map((item) => (
            <MenuItem
              isVisible={isVisible}
              key={item.key}
              subMenu={item.subMenu}
              itemContent={item.itemContent}
              customStyleBox={customStyleBox}
            />
          ))}
      </StyledMenuBox>
    </StyledMenuWrapper>
  );
};

export default MenuWrapper;
