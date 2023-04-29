import { Box, CSSObject, Paper, styled } from '@mui/material';

type StyledMenuWrapperPropsT = {
  originPosition?: {
    vertical: 'top' | 'bottom' | 'middle';
    horizontal: 'left' | 'right' | 'center';
  };
  customStyle?: CSSObject;
};

type StyledMenuButtonWrapperPropsT = {
  customStyle?: CSSObject;
};

type StyledMenuBoxPropsT = {
  customStyle?: CSSObject;
};

const handleHorizontalPosition = (value: 'left' | 'right' | 'center') => {
  switch (value) {
    case 'right':
      return '95%';
    case 'left':
      return '0%';
    case 'center':
      return '50%';
  }
};

const handleVerticalPosition = (value: 'top' | 'bottom' | 'middle') => {
  switch (value) {
    case 'top':
      return '0%';
    case 'bottom':
      return '90%';
    case 'middle':
      return '50%';
  }
};

export const StyledMenuBox = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'customStyle',
})(({ customStyle }: StyledMenuBoxPropsT) => () => ({
  borderRadius: '10px',
  position: 'relative',
  ...customStyle,
}));

export const StyledMenuWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'originPosition',
})(({ originPosition }: StyledMenuWrapperPropsT) => () => ({
  background: 'transparent',
  position: 'absolute',
  width: 'auto',
  left: handleHorizontalPosition(originPosition?.horizontal || 'left'),
  top: handleVerticalPosition(originPosition?.vertical || 'bottom'),
  zIndex: 10000,
}));

export const StyledMenuButtonWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'customStyle',
})(({ customStyle }: StyledMenuButtonWrapperPropsT) => () => ({
  display: 'inline-block',
  position: 'relative',
  ...customStyle,
}));

export const StyledMenuItem = styled('span')({
  display: 'flex',
  position: 'relative',
  width: '100%',
  textAlign: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(0,0,0,.2)',
  },
});
