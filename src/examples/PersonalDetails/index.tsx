import React, { useEffect, useState } from 'react';
import { AccordionTypes } from '@/components/types';
import { UpCursor } from '@/components/Accordion/Icon/Icon';
import { GreenArrow } from './CartIcon';
import { AddressDetails, ContactDetails, SaveAsAddress, initialData } from '@/components/Data/PersonalDetailsData';
import { StateProp } from './interfaceAddCart';
import Accordion from '@/components/Accordion/Accordion';




export interface MyCartProp {
  handleBack: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  initialState: StateProp;
  setInitialState: React.Dispatch<React.SetStateAction<StateProp>>;
  handleSubmit: (e: any) => void;
}

export const PersonalDetails: React.FC<MyCartProp> = ({
  handleBack = () => alert('back'),
  handleChange = (e) => console.log('value', e.target.value),
  initialState = initialData,
  setInitialState = (prev) => ({ ...prev }),
  handleSubmit = ((e) => {e.preventDefault()
                          alert("submit")})
}) => {
  const [ticks, setTicks] = useState({ tick1: false, tick2: false, tick3: false });

  useEffect(() => {
    setTicks({
      tick1: initialState.first_name.length > 0 && initialState.Last_name.length > 0 && initialState.email.length > 0 && initialState.phone_Number.length > 0,
      tick2: initialState.pincode.length > 0 && initialState.Area.length > 0 && initialState.Country.length > 0 && initialState.city.length > 0 && initialState.State.length > 0 && initialState.Address.length > 0,
      tick3: initialState.addressType.length > 0
    });
  }, [initialState]);
   

  const sections = [
    {
      content: <ContactDetails handleChange={handleChange} value={initialState} />,
      title: 'Contact Details',
      status: ticks.tick1
    },
    {
      content: <AddressDetails handleChange={handleChange} value={initialState} />,
      title: 'Address',
      status: ticks.tick2
    },
    {
      content: <SaveAsAddress getData={setInitialState} handleBack={handleBack} />,
      title: 'Save address as',
      status: ticks.tick3
    }
  ];

  return (
    <form className="flex-row h-fit" onSubmit={handleSubmit}  >
      {sections.map((section, index) => (
        <Accordion
          key={index}
          variant={AccordionTypes.Cursor}
          content={section.content}
          children={section.title}
          className="bg-[#EBE3E0] text-[#26282B] font-sans font-bold w-[60vw] mt-2"
          childClassName="border-none h-fit"
          Icon={<UpCursor />}
          status={section.status && <GreenArrow />}
        />
      ))}
    </form>
  );
};
