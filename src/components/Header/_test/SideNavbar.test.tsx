import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SideNavbar } from '../SideNavbar/index';
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import setting from "../navbarIcons/settings.svg";
import {
    Cart,
    Favourite,
    Notification,
    Setting,
    
  } from "@/components/MenuItem/Icon/icon";

const SubMenu = () => <div>Mocked SubMenu Icon</div>;
const SubMenu1 = () => <div>Mocked SubMenu Icon</div>;

const SubMenu2 = () => <div>Mocked SubMenu Icon</div>;

const mockNavItems =  [
    {
      menuLeftIcon: <Favourite />,
      menuIcon: fav,
      menus: "Favourite",
    },
    {
      menuLeftIcon: <Notification />,
      menuIcon: notification,
      menus: "Notifications",
    },
    { menuLeftIcon: <Cart />, menuIcon: cart, menus: "Cart" },
    { menuLeftIcon: <Setting />, menuIcon: setting, menus: "Setting" },
    {
        menuLeftIcon: <SubMenu />,
        menuIcon: "subMenu",
        menus: "SubMenu",
        submenu: [
          {
            menuLeftIcon: <SubMenu1 />,
            menuIcon: "subMenu1",
            menus: "SubMenu1",
          },
          {
            menuLeftIcon: <SubMenu2 />,
            menuIcon: "subMenu2",
            menus: "SubMenu2",
            
          },
          {
            
                menus: 'Item With Path',
                path: '/item-with-path',
            
          }
        ],
      },
  ];

const mockProfileItem = {
  profileName: 'John Doe',
  profilePicture: '/path/to/profile.jpg',
};

describe('SideNavbar Component', () => {
  test('should render correctly with default props', () => {
    render(<SideNavbar />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  test('should render navigation items correctly', () => {
    render(<SideNavbar navItem={mockNavItems} />);
    expect(screen.getByText('Favourite')).toBeInTheDocument();
    expect(screen.getByText('Setting')).toBeInTheDocument();
  });



  it('should handle submenu opening and closing', async () => {

const newHref = '/item-with-path';

Object.defineProperty(window, 'location', {
  writable: true,
  value: { href: '' },
});

render(<SideNavbar navItem={mockNavItems} />);
const favouriteItem = screen.getByText('Favourite');
fireEvent.click(favouriteItem);
const subMenuItem = screen.getByText('SubMenu');
fireEvent.click(subMenuItem);

// Assert that submenu is rendered
expect(screen.getByTestId('submenu')).toBeInTheDocument();

// Click on an item in the submenu
const subMenu1Item = screen.getByText('SubMenu1');
fireEvent.click(subMenu1Item);

// Assert that submenu is still rendered
expect(screen.getByTestId('submenu')).toBeInTheDocument();

// Click on an item with a path
const itemWithPath = screen.getByText('Item With Path');
fireEvent.click(itemWithPath);

// Assert that the window location has changed
expect(window.location.href).toBe(newHref);

// Click on the submenu item again to close it
fireEvent.click(subMenuItem);

// Assert that submenu is no longer rendered
expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();

// Click on the favourite item again to close the submenu
fireEvent.click(favouriteItem);


expect(screen.queryByTestId('submenu')).not.toBeInTheDocument();  
  });

  test('should render profile section when logged in', () => {
    render(<SideNavbar isLogin={true} showProfile={true} profileItem={mockProfileItem} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('should render profile section when not logged in', () => {
    render(<SideNavbar isLogin={false} showProfile={true} />);
    expect(screen.getByText('profile')).toBeInTheDocument();
  });
});
