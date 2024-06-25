import React from "react";
import { Button } from "../Button/DefaultButton";
import {
  ModileIcon,
  EditIcon,
  HomeIcon,
  PayPalIcon,
  GooglePayIcon,
  VisaIcon,
  DiscoverIcon,
  MasterCardIcon,
  AmexIcon
} from "../Icons";
import { Checkbox } from "../Checkbox";
import { ButtonSize } from "../Button/type";
import Input from "../Input";
import { InputType, InputVariant } from "../Input/type";
import { stateProp } from "@/examples/AddressInputField/AddressInterFace";




interface userProps {
  handleBack: () => void,
  handleChange: (e: any) => void,
  userData: stateProp,
  setUserData: React.Dispatch<React.SetStateAction<stateProp>>,
}

export const AddressContactDetail: React.FC<userProps> = ({ userData }) => {


  return (
    <div className="w-full">
      <div className="w-full border px-2 py-1 flex">
        <div className="p-4 bg-[#E8EBED] rounded">
          <ModileIcon />
        </div>
        <div className="w-full flex">
          <div className="w-full pt-2 pl-2">
            <div className="font-normal">{userData.Name}</div>
            <div className="font-medium">{userData.email}</div>
          </div>
          <div className="h-full justify-center items-center flex">
            <div className="w-8 h-8">
              <EditIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border px-2 py-1 flex mt-2">
        <div className="p-4 bg-[#E8EBED] rounded">
          <HomeIcon />
        </div>
        <div className="w-full flex">
          <div className="w-full pt-2 pl-2">
            <div className="font-normal">
              {userData.State}
            </div>
            {userData.Address}
          </div>
          <div className="h-full justify-center items-center flex">
            <div className="w-8 h-8">
              <EditIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export const CardDetails: React.FC<userProps> = ({ userData, setUserData }) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))

    const sanitizedValue = value.replace(/\D/g, '');
      setUserData((prev) => ({ ...prev, [name]: sanitizedValue }));
  }


  const formatDate = (dateString:any) => {
    if (!dateString) return ''; 
  
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const formattedDate = `${month}/${year.slice(-2)}`;
  
    return formattedDate;
  };
  



  return (
    <div className="flex flex-wrap mt-4 border-b">
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Card_Name" className="font-medium">Card Name</label>
        <Input
        variant={InputVariant.Outlined}
        type={InputType.Text}
        name="Card_Name"
        value={userData.Card_Name}
        placeholder="Enter Card Name"
       className="p-2 border rounded-md w-full outline-none mt-2 bg-transparent focus:outline-[grey]"
        onChange={handleChange}
         />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Card_Number" className="font-medium">Card Number</label>
        <Input 
        variant={InputVariant.Filled}
        type={InputType.Text}
          name="Card_Number"
          value={userData.Card_Number}
          placeholder="0000 0000 0000 0000"
          className="p-2 border rounded-md w-full outline-none mt-2 bg-transparent focus:outline-[grey]"
          onChange={handleChange}
          maxLength={19}
          />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4  relative">
      <label htmlFor="Expiry_Date" className="font-medium">Expiry Date</label>
      <Input
        type={InputType.Date} 
        variant={InputVariant.Outlined}
        className="p-2 border rounded-md w-full outline-none mt-2
         bg-white focus:outline-[grey] focus:border-none "
        name="Expiry_Date"
        placeholder="MM/YY"
        value={formatDate(userData.Expiry_Date)}
        onChange={handleChange}
      /> 
      <input type="text"
               placeholder="MM/YY" 
               value={ formatDate(userData.Expiry_Date)}
                className=" absolute top-9 left-4 h-6 w-[22vw] bg-white  outline-none border-none" 
                disabled />
    </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Security_Date" className="font-medium">Security Date</label>
          <Input 
        variant={InputVariant.Filled}
        type={InputType.Text}
        name="Security_Date"
        value={userData.Security_Date}
        placeholder="3-4 digits"
       className="p-2 border rounded-md w-full outline-none mt-2
         bg-white focus:outline-[grey] focus:border-none"
        onChange={handleChange}
        maxLength={4}
        pattern={"[0-9]"}
        
        />
      </div>
    </div>
  )
}


export const PaymentComp: React.FC<userProps> = ({ userData, handleBack, setUserData, handleChange }) => {

  return (
    <div className="font-light w-full ">
      <div className="w-full justify-between  flex border">
        <div className="p-4 ">
          <Checkbox
            onChange={handleChange}
            label="PayPal"
            size={ButtonSize.Small}
            type="radio"
            variant="Basic"
            value="PayPal"
            checked={userData.Checked === "payPal"}
            name="payPal"
            containerClassName="w-[1.5rem] h-[1.5rem]"
            checkedClassName="w-[0.6rem] h-[0.6rem]"
          />
        </div>
        <div className=" flex items-center">
          <div className="w-8 h-8">
            <PayPalIcon />
          </div>
        </div>
      </div>
      <div className="w-full justify-between  flex border">
        <div className="p-4 ">
          <Checkbox
            onChange={handleChange}
            label="Google Pay"
            size={ButtonSize.Small}
            type="radio"
            variant="Basic"
            value="googlePay"
            checked={userData.Checked === "googlePay"}
            name="googlePay"
            containerClassName="w-[1.5rem] h-[1.5rem]"
            checkedClassName="w-[0.6rem] h-[0.6rem]"
          />
        </div>
        <div className=" flex items-center">
          <div className="w-8 h-8">
            <GooglePayIcon />
          </div>
        </div>
      </div>
      <div className="w-full justify-between  flex border">
        <div className="p-4 ">
           <Checkbox
            onChange={handleChange}
             label="Credit Card"
            size={ButtonSize.Small}
            type="radio"
            variant="Basic"
            value="CreditCard"
            checked={userData.Checked === "CreditCard"}
           name="CreditCard"
            containerClassName="w-[1.5rem] h-[1.5rem]"
            checkedClassName="w-[0.6rem] h-[0.6rem]"
          />
        </div>
        <div className=" flex items-center">
          <div className=" flex gap-2 pr-2">
            <div className=" px-1  border flex items-center justify-center">
              <VisaIcon />
            </div>
            <div className=" px-1 border flex items-center justify-center">
              <DiscoverIcon />
            </div>
            <div className=" px-1 border flex items-center justify-center">
              <MasterCardIcon />
            </div>
            <div className=" px1 border flex items-center justify-center">
              <AmexIcon />
            </div>
          </div>
        </div>
      </div>
      <CardDetails userData={userData} handleBack={handleBack} setUserData={setUserData} handleChange={handleChange} />
      <div className="w-full mt-4 flex gap-2 flex-col md:flex-row md:mt-0 pt-3">
        <Button
          type="button"
          className="w-full md:w-auto h-10 bg-[#E8EBED] text-[#72787F] ml-auto"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button className="w-full md:w-auto h-10">
          Next
        </Button>
      </div>
    </div>
  )
}
