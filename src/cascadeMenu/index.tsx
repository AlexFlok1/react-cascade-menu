import { FC, useRef, useState } from 'react';
import { Box, CSSObject } from '@mui/material';
import MenuWrapper from './MenuWrapper';
import { StyledMenuButtonWrapper } from './styles';
import { MenuItemT } from './types';

type CascadeMenuProps = {
  menu: MenuItemT[];
  triggerEvent?: 'click' | 'hover';
  triggerElement: React.ReactNode;
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
}) => {
  const [show, setShow] = useState(false);
  const attachemnt = useRef<HTMLDivElement>(null);

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
      {attachemnt && (
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
          />
        </Box>
      )}
    </>
  );
};

export default CascadeMenu;
