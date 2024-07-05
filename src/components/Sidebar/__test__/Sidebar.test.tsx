import { render, fireEvent } from '@testing-library/react';
import {Sidebar} from '../index'; // Assuming the component is exported as default from '../Sidebar'
import '@testing-library/jest-dom';

describe('Sidebar component', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const mockHandleClose = jest.fn();
    const mockHandleLogin = jest.fn();
  
    const navItems = [
      { menus: 'Menu 1' },
      { menus: 'Menu 2', navComponent: <div>Custom Component</div> },
      { menus: 'Menu 3', submenu: [{ menus: 'Submenu 1' }] },
    ];
  const mockNavItem = [
    {
      menus: 'Menu1',
      path: '/menu1',
      menuLeftIcon: <svg />,
    },
    {
      menus: 'Menu2',
      submenu: [
        {
          menus: 'SubMenu1',
          path: '/submenu1',
          menuLeftIcon: <svg />,
        },
        {
          menus: 'SubMenu2',
          path: '/submenu2',
          menuLeftIcon: <svg />,
        },
      ],
      menuLeftIcon: <svg />,
    },
  ];

  const mockProfileItem = {
    profileName: 'John Doe',
    profilePic: 'avatar.jpg',
  };

  it('handles click on regular menu item', () => {
    const { getByText } = render(
      <Sidebar
        navItem={mockNavItem}
        profileItem={mockProfileItem}
        isLogin={false}
      />
    );

    fireEvent.click(getByText('Menu1'));
 
  });

  it('expands and collapses submenu correctly', () => {
    const { getByText, queryByText } = render(
      <Sidebar
        navItem={mockNavItem}
        profileItem={mockProfileItem}
        isLogin={false}
      />
    );

    fireEvent.click(getByText('Menu2'));
    expect(getByText('SubMenu1')).toBeInTheDocument();

    fireEvent.click(getByText('Menu2')); 
    expect(queryByText('SubMenu1')).toBeNull();
  });

  it('calls handleLogin when Login button is clicked', () => {
    const handleLogin = jest.fn();
    const { getByText } = render(
      <Sidebar
        navItem={mockNavItem}
        profileItem={mockProfileItem}
        isLogin={false}
        handleLogin={handleLogin}
      />
    );

    fireEvent.click(getByText('Login'));
    expect(handleLogin).toHaveBeenCalledTimes(1);
  });
  it('handles click correctly when item has no path, navComponent, or submenu', () => {
 
    const { getByText } = render(
      <Sidebar
        navItem={navItems}
        handleClose={mockHandleClose}
        handleLogin={mockHandleLogin}
      />
    );

    // Simulate click on menu item without path, navComponent, or submenu
    fireEvent.click(getByText('Menu 1'));
    expect(mockAlert).toHaveBeenCalledWith('there is nothing we can do');
    // Assert that alert message is shown
    // expect(window.alert).toHaveBeenCalledWith('there is nothing we can do');
  });
  // Add more test cases as needed for other interactions and edge cases
});
