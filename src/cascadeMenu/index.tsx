import { FC, useRef, useState } from 'react';
import { Box, CSSObject } from '@mui/material';
import MenuWrapper from './MenuWrapper';
import { StyledMenuButtonWrapper } from './styles';
import { MenuItemT } from './types';
import { createPortal } from 'react-dom';

/**
 * Props for the CascadeMenu component.
 * @typedef {Object} CascadeMenuProps
 * @property {MenuItemT[]} menu - The menu items to display.
 * @property {string} triggerEvent - The event to trigger the menu.
 * @property {React.ReactNode} triggerElement - The element that triggers the menu.
 * @property {string} rootIdName - The ID to use for the root element of the menu.
 * @property {Object} [customStyle] - Custom styles for the menu and trigger element.
 * @property {Object} [customStyle.menuBox] - Custom styles for the menu box.
 * @property {Object} [customStyle.menuButtonWrapper] - Custom styles for the menu button wrapper.
 */

/**
 * A component that renders a cascade menu.
 * @type {FC<CascadeMenuProps>}
 * @param {CascadeMenuProps} props - Props for the component.
 * @returns {React.ReactElement} The rendered component.
 */

type CascadeMenuProps = {
  menu: MenuItemT[];
  triggerEvent?: 'click' | 'hover';
  triggerElement: React.ReactNode;
  rootIdName: string;
  customStyle?: {
    menuBox?: CSSObject;
    menuButtonWrapper?: CSSObject;
  };
};

const CascadeMenu: FC<CascadeMenuProps> = ({
  menu,
  triggerElement,
  triggerEvent = 'hover',
  customStyle,
  rootIdName,
}) => {
  const [show, setShow] = useState(false);
  const attachemnt = useRef<HTMLDivElement>(null);
  const portalContainer = document.getElementById(rootIdName);

  return (
    <>
      <StyledMenuButtonWrapper
        customStyle={customStyle?.menuButtonWrapper}
        ref={attachemnt}
        {...(triggerEvent === 'hover'
          ? {
              onMouseOver: () => {
                setShow(true);
              },
              onMouseLeave: () => {
                setShow(false);
              },
            }
          : {
              onClick: () => {
                setShow((prev) => !prev);
              },
            })}
      >
        {triggerElement && triggerElement}
      </StyledMenuButtonWrapper>
      {attachemnt &&
        portalContainer &&
        createPortal(
          <Box
            onMouseOver={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          >
            <MenuWrapper
              isVisible={show}
              menuItems={menu}
              attachedTo={attachemnt}
              customStyle={customStyle?.menuBox}
            />
          </Box>,
          portalContainer
        )}
    </>
  );
};

export default CascadeMenu;
