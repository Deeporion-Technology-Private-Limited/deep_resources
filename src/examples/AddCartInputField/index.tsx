import React, { useState } from 'react';
import Accordion from '@/components/Accordion';
import { AccordionTypes } from '@/components/Accordion/AccordionTypes';
import { UpCursor } from '@/components/Accordion/Icon/Icon';
import { AddressDetais, ContactDetails, SaveAsAddress } from './cartComponents';
import { GreenArrow } from './CartIcon';

interface StateProp {
  first_name: string;
  Last_name: string;
  phone_Number: string;
  email: string;
  pincode: string;
  Area: string;
  Country: string;
  city: string;
  State: string;
  Address: string;
  addressType: string;
}

interface MyCartProp {
     handleBack: ()=> void;
     initialState :{
      first_name?: string;
      Last_name?: string;
      phone_Number?: string;
      email?: string;
      pincode?: string;
      Area?: string;
      Country?: string;
      city?: string;
      State?: string;
      Address?: string;
      addressType?: string;
      Checked?: boolean;
    };
}

export const MyCartSummary: React.FC < MyCartProp> = ({handleBack}) => {
  const [initialState, setInitialState] = useState<StateProp>({
    first_name: '',
    Last_name: '',
    phone_Number: '',
    email: '',
    pincode: '',
    Area: '',
    Country: '',
    city: '',
    State: '',
    Address: '',
    addressType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInitialState((prev) => ({ ...prev, [name]: value }));
  };
  
  const AFJ = [
    {
      Icon: <UpCursor />,
      content: <ContactDetails handleChange={handleChange} value={initialState} />,
      children: 'Contact Details',
      className: 'bg-[#EBE3E0] text-[#26282B] font-sans font-bold w-[600px]',
      childClassName: 'border-none font-normal',
      status: <GreenArrow />
    },
    {
      Icon: <UpCursor />,
      content: <AddressDetais handleChange={handleChange} value={initialState} />,
      children: 'Address',
      className: 'bg-[#EBE3E0] text-[#26282B] font-sans font-bold w-[600px] mt-2',
      childClassName: 'border-none'
    },
    {
      Icon: <UpCursor />,
      content: <SaveAsAddress getData={setInitialState} handleBack={handleBack} />,
      children: 'Save address as',
      className: 'bg-[#EBE3E0] text-[#26282B] font-sans font-bold w-[600px] mt-2',
      childClassName: 'border-none'
    }
  ];

  return (
    <form className="flex-row" onSubmit={(e)=> e.preventDefault}>
      {AFJ.map((value, index) => (
        <Accordion
          key={index}
          variant={AccordionTypes.Cursor}
          content={value.content}
          children={value.children}
          className={value.className}
          childClassName={value.childClassName}
          Icon={value.Icon}
          status={value.status}
        />
      ))}
    </form>
  );
};
