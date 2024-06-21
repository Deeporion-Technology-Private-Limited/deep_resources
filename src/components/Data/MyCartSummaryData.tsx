import { Button, Checkbox } from "@/components";
import Chips from "@/components/Chips";
import { ChipsTypes } from "@/components/Chips/chipsTypes";
import { Dispatch, SetStateAction, useState } from "react";

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
  handleChange: (e: any) => void ;
  value: StateProp;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ handleChange , value }) => {
  
  
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="first_name" className="font-medium">First Name</label>
        <input
          type="text"
          name="first_name"
          value={value.first_name}
          placeholder="Enter First Name"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Last_name" className="font-medium">Last Name</label>
        <input
          type="text"
          name="Last_name"
          value={value.Last_name}
          placeholder="Enter Last Name"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="phone_Number" className="font-medium">Phone Number</label>
        <input
          type="text"
          name="phone_Number"
          value={value.phone_Number}
          placeholder="Enter Phone Number"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="email" className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={value.email}
          placeholder="Enter email"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};


export const AddressDetails: React.FC<ContactDetailsProps> = ({ handleChange, value }) => {
  return (
    <div className="flex flex-wrap">
       <div className="w-full  px-2 mb-4">
        <label htmlFor="Country" className="font-medium">Country</label>
        <select
          name="Country"
          className="p-2 border rounded-md w-full outline-none bg-transparent"
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
        <input
          type="text"
          name="pincode"
          placeholder="Enter pincode"
          className="p-2 border rounded-md w-full outline-none"
          value={value.pincode}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Area" className="font-medium">Area</label>
        <input
          type="text"
          name="Area"
          placeholder="Enter area/locality"
          className="p-2 border rounded-md w-full outline-none"
          value={value.Area}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="city" className="font-medium">City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          className="p-2 border rounded-md w-full outline-none"
          value={value.city}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="State" className="font-medium">State</label>
        <input
          type="text"
          name="State"
          placeholder="Enter State"
          className="p-2 border rounded-md w-full outline-none"
          value={value.State}
          onChange={handleChange}
        />
      </div>
     
      <div className="w-full px-2 mb-4">
        <label htmlFor="Address" className="font-medium">Address</label>
        <input
          name="Address"
          placeholder="Enter complete address (optional)"
          className="p-2 border rounded-md w-full outline-none"
          value={value.Address}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};


interface SaveAsAddressProps {
  getData: Dispatch<SetStateAction<StateProp>> ;
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
      <div className="flex items-center pt-3 font-light">
        <Checkbox 
          value={"Make this my default address"} 
          label={"Make this my default address"} 
          onChange={(e) => getData((prev) => ({ ...prev, Checked: e.target.checked }))} 
        />
      </div>
      <div className="w-full mt-4 md:mt-0 md:w-auto md:ml-auto flex gap-2 ">
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
  Checked:false
}
