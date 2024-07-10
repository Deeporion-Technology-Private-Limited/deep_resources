
import '@testing-library/jest-dom';
import { render, screen ,fireEvent} from '@testing-library/react';
import { Modal } from '../index';




const Props ={
    onClose:jest.fn(),
    button02: false,
    button01: false,
    modalbutton: true,
    openModal: false,
    

}
describe('Modal Component', () => {
  
  it('should render the modal when modalbutton is clicked', async() => {
  
    const headerContent = <div>Modal Header</div>;
    const childrenContent = <div>Modal Content</div>;

  const {getByTestId}=  render(<Modal header={headerContent} {...Props} >
        {childrenContent}
    </Modal>);
 screen.debug();
const openButton = await screen.getByText("Open Modal");
fireEvent.click(openButton);
const accountBtn = getByTestId('Open-toggle')
fireEvent.click(accountBtn)
expect(screen.getByText("Modal Header")).toBeInTheDocument();
expect(screen.getByText("Modal Content")).toBeInTheDocument();
  
  });
  it("should be true when the button is to clicked", async ()=> {
    const headerContent = <div>Modal Header</div>;
    const childrenContent = <div>Modal Content</div>;
    // const toggleMenuMock = jest.fn();
  render(<Modal header={headerContent} {...Props} crossIcon={true} >
        {childrenContent}
    </Modal>)
    const openButton = await screen.getByText("Open Modal");
    fireEvent.click(openButton);
const accountBtn = screen.getByTestId('Open-toggle')
fireEvent.click(accountBtn)

  })
  it('calls handleClose when close icon is clicked and handleClose is provided', () => {
    const toggleMenuMock = jest.fn();
      const handleCloseMock = jest.fn();

    render(
      <Modal
        
      
        header="Header"
        crossIcon={true} handleClose={handleCloseMock} onClose={toggleMenuMock} button02={false} button01={false} modalbutton={false} openModal={true}      />
    );

    fireEvent.click(screen.getByTestId('close-icon'));
    expect(handleCloseMock).toHaveBeenCalledTimes(1);
    expect(toggleMenuMock).toHaveBeenCalledTimes(0);
  });

  it('calls toggleMenu when close icon is clicked', () => {
    const toggleMenuMock = jest.fn();

    render(
      <Modal
        onClose={toggleMenuMock}
         button02={false}
          button01={false}
           modalbutton={false}
            openModal={true}      
        header="Header"
        crossIcon={true}
      />
    );

    fireEvent.click(screen.getByTestId('close-icon'));
  
  });
  it('renders button01 when button01 is true', () => {
    render(
      <Modal
        
        onClose={jest.fn()}
        header="Header"
        crossIcon={true}
        button01={true} button02={false} modalbutton={false} openModal={true}      />
    );

    expect(screen.getByTestId('button01')).toBeInTheDocument();
  });
  it('renders button02 when button02 is true', () => {
    render(
      <Modal
      
        onClose={jest.fn()}

        header="Header"
        crossIcon={true}
        button02={true} button01={false} modalbutton={false} openModal={true}      />
    );

    expect(screen.getByTestId('button02')).toBeInTheDocument();
  });
});
