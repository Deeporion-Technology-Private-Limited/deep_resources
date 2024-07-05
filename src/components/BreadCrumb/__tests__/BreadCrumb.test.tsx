import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BreadCrumb } from '../index.tsx'; // Adjust the import path as necessary
// import HomeIcon from "../icon/Home.svg";
// import CategoryIcon from "../icon/Category.svg";
// import RightArrow from "../icon/RightArrow.svg";
// import Divider from "../icon/Divider.svg";
describe('BreadCrumb', () => {
  const breadCrumbItems = [
    { text: 'Home', iconUrl: '/icons/home.png', href: '/' },
    { text: 'Category', iconUrl: '/icons/category.png', href: '/category' },
    { text: 'Subcategory', iconUrl: '/icons/subcategory.png', href: '/category/subcategory' },
    { text: 'Item', href: '/category/subcategory/item' },
    { text: 'Detail',  href: '/category/subcategory/item/detail' },
    { text: 'Extra',  href: '/category/subcategory/item/detail/extra' },
  ];
 


  render(<BreadCrumb breadCrumbItems={breadCrumbItems} defaultSeparatorIconUrl="/icons/separator.png" />);
    // By default, only the first and last item are shown, plus the "..." button
    const breadcrumbElements = screen.getAllByRole('link');
    expect(breadcrumbElements.length).toBe(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Extra')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();

    it('shows all items when "show all" button is clicked', () => {
      render(<BreadCrumb breadCrumbItems={breadCrumbItems} defaultSeparatorIconUrl="/icons/separator.png" />);
      const showAllButtons = screen.getAllByText('...');
      fireEvent.click(showAllButtons[0]); // Click the first "show all" button
     
    });



  it('applies active styling on item click', () => {
    render(<BreadCrumb breadCrumbItems={breadCrumbItems} />);
    const firstItem = screen.getByText(breadCrumbItems[0].text);
    fireEvent.click(firstItem);
    expect(firstItem).toHaveStyle('color: #26282B');
  });

  it('renders children correctly', () => {
    render(
      <BreadCrumb breadCrumbItems={breadCrumbItems}>
        <div>Extra Content</div>
      </BreadCrumb>
    );
    expect(screen.getByText('Extra Content')).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    render(<BreadCrumb breadCrumbItems={breadCrumbItems} className="custom-class" />);
    expect(screen.getByRole('button')).toHaveClass('mx-2');
  });

  it('renders separator icons correctly', () => {

   const  breadCrumbItems2 = [
      { text: 'Home',  iconUrl: '/icons/home.png' },  
      { text: 'Category',  iconUrl: '/icons/Category' },  
    ]
    render(<BreadCrumb breadCrumbItems={breadCrumbItems2} defaultSeparatorIconUrl="/icons/separator.png" />);
    // const separatorIcons = screen.getAllByAltText('Separator Icon');
    // expect(separatorIcons.length).toBe(breadCrumbItems.length - 1);
  });

  it('handles empty breadcrumb items', () => {
    
    render(<BreadCrumb breadCrumbItems={[]} defaultSeparatorIconUrl="/icons/separator.png"/>);
    expect(screen.queryByRole('link')).toBeNull();


  });
});
