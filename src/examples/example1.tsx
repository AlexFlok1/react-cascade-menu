import { FC } from 'react';
import CascadeMenu from '../cascadeMenu';
import { Box, Button } from '@mui/material';

const Example1: FC = () => {
  const menu = [
    {
      key: '1',
      itemContent: () => <Box p={1}>Test 1</Box>,
    },
    {
      key: '2',
      itemContent: () => <Box p={1}>Test 2</Box>,
    },
    {
      key: '3',
      itemContent: () => <Box p={1}>Test 3</Box>,
      subMenu: {
        items: [
          {
            key: '5',
            itemContent: () => <Box p={1}>Sub Item 2</Box>,
          },
        ],
      },
    },
  ];
  return (
    <>
      <CascadeMenu
        triggerElement={<Button>Menu</Button>}
        menu={menu}
        rootIdName='root'
        customStyle={{ menuBox: { borderRadius: 0 } }}
      />
    </>
  );
};

export default Example1;
