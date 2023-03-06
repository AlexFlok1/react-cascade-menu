import { FC } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CascadeMenu from './cascadeMenu';
import { MenuItemT } from './cascadeMenu/types';

const App: FC = () => {
  const menu: MenuItemT[] = [
    {
      key: '1',
      itemContent: <>Menu 1</>,
    },
    {
      key: '2',
      itemContent: <>Menu 2</>,
    },
    {
      key: '3',
      itemContent: <>Menu 3</>,
      subMenu: {
        items: [
          {
            key: '4',
            itemContent: (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker label='Basic date time picker' />
              </LocalizationProvider>
            ),
          },
          {
            key: '5',
            itemContent: <>Sub Item 2</>,
            subMenu: {
              items: [
                {
                  key: '6',
                  itemContent: (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker label='Basic date time picker' />
                    </LocalizationProvider>
                  ),
                },
              ],
              spacing: '0px 0px 0px 15px',
            },
          },
        ],
        spacing: '0px 0px 0px 15px',
      },
    },
  ];

  return (
    <div className='App'>
      <CascadeMenu
        triggerElement={
          <span style={{ width: '50px', padding: '10px' }}>Menu</span>
        }
        menu={menu}
      />
    </div>
  );
};

export default App;
