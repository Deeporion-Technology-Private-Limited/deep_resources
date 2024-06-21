import { Button, Checkbox } from "@/components";
import Chips from "@/components/Chips";
import { ChipsTypes } from "@/components/Chips/chipsTypes";
import { Dispatch, SetStateAction, useState } from "react";

interface StateProp {
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
}

interface ContactDetailsProps {
  handleChange: (e: any) => void;
  value: StateProp;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ handleChange, value }) => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-[50%]">
          <label htmlFor="first_name" className="font-medium">First Name</label>
          <div className="pt-1">
            <input
              type="text"
              name="first_name"
              value={value.first_name}
              placeholder="Enter First Name"
              className="p-2 border rounded-md w-[90%] outline-none"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-[50%]">
          <label htmlFor="Last_name" className="font-medium">Last Name</label>
          <div className="pt-1">
            <input
              type="text"
              name="Last_name"
              value={value.Last_name}
              placeholder="Enter Last Name"
              className="p-2 border rounded-md w-[90%] outline-none"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full pt-2">
        <div className="w-[50%]">
          <label htmlFor="phone_Number" className="font-medium">Phone Number</label>
          <div className="pt-1">
            <input
              type="text"
              name="phone_Number"
              value={value.phone_Number}
              placeholder="Enter Phone Number"
              className="p-2 font-light border rounded-md w-[90%] outline-none"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-[50%]">
          <label htmlFor="email" className="font-medium">Email</label>
          <div className="pt-1">
            <input
              type="email"
              name="email"
              value={value.email}
              placeholder="Enter email"
              className="p-2 border font-light rounded-md w-[90%] outline-none"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const AddressDetais: React.FC<ContactDetailsProps> = ({ handleChange, value }) => {
  return (
    <>
      <div className="w-full">
        <label htmlFor="Country" className="font-medium">Country</label>
        <div className="mt-1">
          <select
            name="Country"
            className="outline-none w-full bg-transparent border font-light p-2 rounded-md"
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
      </div>
      <div className="flex w-full pt-2">
        <div className="w-[50%]">
          <label htmlFor="pincode" className="font-medium">Pincode</label>
          <div className="pt-1">
            <input
              type="text"
              name="pincode"
              placeholder="Enter pincode"
              className="p-2 border font-light rounded-md w-[90%] outline-none"
              value={value.pincode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-[50%]">
          <label htmlFor="Area" className="font-medium">Area</label>
          <div className="pt-1">
            <input
              type="text"
              name="Area"
              placeholder="Enter area/locality"
              className="p-2 border font-light rounded-md w-[90%] outline-none"
              value={value.Area}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full pt-2">
        <div className="w-[50%]">
          <label htmlFor="city" className="font-medium">City</label>
          <div className="pt-1">
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              className="p-2 border font-light rounded-md w-[90%] outline-none"
              value={value.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-[50%]">
          <label htmlFor="State" className="font-medium">State</label>
          <div className="pt-1">
            <input
              type="text"
              name="State"
              placeholder="Enter State"
              className="p-2 font-light border rounded-md w-[90%] outline-none"
              value={value.State}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-1">
        <label htmlFor="Address" className="font-medium">Address</label>
        <div className="mt-1">
          <input
            name="Address"
            className="outline-none w-full bg-transparent border font-light p-2 rounded-md"
            placeholder="Enter complete address (optional)"
            value={value.Address}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
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
    <>
      <div className="w-full flex gap-3 pt-2">
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
      <div className="flex w-full items-center pt-3 font-light">
        <Checkbox value={"Make this my default address"} label={"Make this my default address"} onChange={(e) => (getData((prev) => ({ ...prev, Checked: e.target.checked })))} />
      </div>
      <div className="w-full h-fit pt-4">
        <div className="ml-auto w-fit flex gap-2">
          <Button 
          type="button"
          className="w-[6.6875rem] h-[2.5rem] bg-[#E8EBED] text-[#72787F]"
           onClick={handleBack}>
            Back
          </Button>
          <Button className="w-[6.6875rem] h-[2.5rem]" type="submit">
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
