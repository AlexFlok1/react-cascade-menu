import { Box, CSSObject, Paper, styled } from '@mui/material';

type StyledMenuWrapperPropsT = {
  originPosition?: {
    vertical: 'top' | 'bottom' | 'middle';
    horizontal: 'left' | 'right' | 'center';
  };
};

type StyledMenuButtonWrapperPropsT = {
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

export const StyledMenuBox = styled(Paper)({
  borderRadius: '10px',
  width: '200px',
  height: '200px',
  position: 'relative',
});

export const StyledMenuWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'originPosition',
})(({ originPosition }: StyledMenuWrapperPropsT) => () => ({
  background: 'transparent',
  minWidth: '200px',
  minHeight: '200px',
  position: 'absolute',
  left: handleHorizontalPosition(originPosition?.horizontal || 'left'),
  top: handleVerticalPosition(originPosition?.vertical || 'bottom'),
}));

export const StyledMenuButtonWrapper = styled(Box)(
  ({ customStyle }: StyledMenuButtonWrapperPropsT) =>
    () => ({
      display: 'inline-block',
      position: 'relative',
      ...customStyle,
    })
);

export const StyledMenuItem = styled('span')({
  display: 'flex',
  position: 'relative',
  width: '100%',
  minHeight: '30px',
  textAlign: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(0,0,0,.2)',
  },
});
