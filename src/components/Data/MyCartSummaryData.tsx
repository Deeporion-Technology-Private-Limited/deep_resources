import { Button, Checkbox, Input } from "@/components";
import Chips from "@/components/Chips";
import { ChipsTypes } from "@/components/Chips/chipsTypes";
import { Dispatch, SetStateAction, useState } from "react";
import { InputType, InputVariant } from "../Input/type";

export interface StateProp {
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
  Checked?: boolean;
}

interface ContactDetailsProps {
  handleChange: (e: any) => void;
  value: StateProp;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ handleChange, value }) => {


  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="first_name" >First Name</label>
        <Input
          type={InputType.Text}
          variant={InputVariant.Filled}
          name="first_name"
          value={value.first_name}
          placeholder="Enter First Name"
          className="p-2 border rounded-md w-full
           font-light bg-white  mt-2 focus:outline-transparent focus:border-gray-300 "
          onChange={handleChange} />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Last_name" className="font-medium">Last Name</label>
        <Input
          type={InputType.Text}
          variant={InputVariant.Filled}
          name="Last_name"
          value={value.Last_name}
          placeholder="Enter Last Name"
           className="p-2 border rounded-md w-full
           font-light bg-white  mt-2 focus:outline-transparent focus:border-gray-300 "
          onChange={handleChange} />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="phone_Number" className="font-medium">Phone Number</label>
        <div className="p-2 border flex rounded-md w-full bg-transparent mt-2 gap-1">
          <div className="flex items-center justify-center">+91</div>
            <Input 
            type={InputType.Number}
            variant={InputVariant.Outlined}
            name="phone_Number"
            value={value.phone_Number}
            placeholder="Enter Phone Number"
            className=" w-full h-5 bg-transparent outline-none focus:outline-transparent
             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none font-light border-none" 
            onChange={handleChange}
            />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="email" className="font-medium ">Email</label>
        <Input 
        type={InputType.Email}
        variant={InputVariant.Outlined}
        name="email"
        value={value.email}
        placeholder="Enter email"
         className="p-2 border rounded-md w-full
           font-light bg-white  mt-2 focus:outline-transparent focus:border-gray-300 "
        onChange={handleChange}/>
      </div>
    </div>
  );
};


export const AddressDetails: React.FC<ContactDetailsProps> = ({ handleChange, value }) => {
  return (
    <div className="flex flex-wrap ">
      <div className="w-full  px-2 mb-4">
        <label htmlFor="Country" className="font-medium">Country</label>
        <select
          name="Country"
          className="p-2 border rounded-md font-light w-full outline-none bg-transparent"
          value={value.Country}
          onChange={handleChange}
        >
          <option value="" disabled>Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="China">China</option>
          <option value="Paris">Paris</option>
        </select>
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="pincode" className="font-medium">Pincode</label>
        <Input
          type={InputType.Number}
          variant={InputVariant.Filled}
          name="pincode"
          placeholder="Enter pincode"
          className=" p-2 w-full border font-light rounded-md bg-transparent
           outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
           [&::-webkit-inner-spin-button]:appearance-none focus:outline-[grey] mt-2"

          value={value.pincode}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Area" className="font-medium">Area</label>
        <Input
          type={InputType.Text}
          variant={InputVariant.Outlined}
          name="Area"
          placeholder="Enter area/locality"
          className="p-2 border rounded-md w-full font-light outline-none focus:outline-[grey] mt-2"
          value={value.Area}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="city" className="font-medium">City</label>
        <Input
          type={InputType.Text}
          variant={InputVariant.Outlined}
          placeholder="Enter city"
          className="p-2 border rounded-md w-full font-light outline-none focus:outline-[grey] mt-2"
          value={value.city}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="State" className="font-medium">State</label>
        <Input
          type={InputType.Text}
          variant={InputVariant.Outlined}
          name="State"
          placeholder="Enter State"
          className="p-2 border rounded-md w-full font-light outline-none focus:outline-[grey] mt-2"
          value={value.city}
          onChange={handleChange}
        />
      </div>

      <div className="w-full px-2 mb-4">
        <label htmlFor="Address" className="font-medium">Address</label>
         <Input
          type={InputType.Text}
          variant={InputVariant.Outlined}
           name="Address"
          placeholder="Enter complete address (optional)"
          className="p-2 border rounded-md w-full font-light outline-none focus:outline-[grey] mt-2"
          value={value.city}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};


interface SaveAsAddressProps {
  getData: Dispatch<SetStateAction<StateProp>>;
  handleBack: () => void;
}

export const SaveAsAddress: React.FC<SaveAsAddressProps> = ({ getData, handleBack }) => {
  const [changeColour, setChangeColour] = useState(false);
  const [changeColour1, setChangeColour1] = useState(false);

  return (
    <div className=" flex-row md:flex-row md:items-center md:justify-between">
      <div className="flex gap-3 pt-2 md:pt-0">
        <Chips
          variant={ChipsTypes.default}
          children={"Home"}
          className={`bg-[${changeColour1 ? "#EBE3E0" : "#E8EBED"}] text-[${changeColour1 ? "#3F271E" : "#72787F"}] rounded-[1.625rem] h-[2.0625rem] px-4 py-4`}
          onClick={() => {
            setChangeColour(false);
            getData((prev) => ({ ...prev, addressType: "Home" }));
            setChangeColour1(true);
          }}
        />
        <Chips
          variant={ChipsTypes.default}
          children={"Work"}
          className={`bg-[${changeColour ? "#EBE3E0" : "#E8EBED"}] text-[${changeColour ? "#3F271E" : "#72787F"}] rounded-[1.625rem] h-[2.0625rem] px-4 py-4`}
          onClick={() => {
            setChangeColour1(false);
            getData((prev) => ({ ...prev, addressType: "Work" }));
            setChangeColour(true);
          }}
        />
      </div>
      <div className="flex items-center pt-3 font-light border-b" >
        <Checkbox
          value={"Make this my default address"}
          label={"Make this my default address"}
          onChange={(e) => getData((prev) => ({ ...prev, Checked: e.target.checked }))}
          containerClassName="h-[1.25rem] w-[1.25rem] rounded-md"
        />
      </div>
      <div className="w-full mt-4 md:mt-0 md:w-auto md:ml-auto flex gap-2 pt-3 ">
        <Button
          type="button"
          className="w-full md:w-auto h-[2.5rem] bg-[#E8EBED] text-[#72787F] ml-auto"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button className="w-full md:w-auto h-[2.5rem]">
          Next
        </Button>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const initialData = {
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
  addressType: '',
  Checked: false
}
