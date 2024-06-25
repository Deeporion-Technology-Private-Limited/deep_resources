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

interface userProps {
    handleBack:()=>void,
  userData: { Name: string, email: string, State: string, Address: string ,Card_Name: string,
    Card_Number: string,
    Expiry_Date: string,
    Security_Date: string },
  setUserData: React.Dispatch<React.SetStateAction<{ Name: string, email: string, State: string, Address: string ,Card_Name: string,
    Card_Number: string,
    Expiry_Date: string,
    Security_Date: string }>>,
}

export const AddressContactDetail: React.FC<userProps> = ({ userData}) => {


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



export const CardDetails : React.FC<userProps> = ({userData , setUserData}) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Card_Name" className="font-medium">Card Name</label>
        <input
          type="text"
          name="Card_Name"
          value={userData.Card_Name}
          placeholder="Enter Card Name"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Card_Number" className="font-medium">Card Number</label>
        <input
          type="text"
          name="Card_Number"
          value={userData.Card_Number}
          placeholder="0000 0000 0000 0000"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Expiry_Date" className="font-medium">Expiry Date</label>
        <input
          type="date"
          name="Expiry_Date"
          value={userData.Expiry_Date}
          placeholder="Enter Expiry Date"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label htmlFor="Security_Date" className="font-medium">Security Date</label>
        <input
          type="text"
          name="Security_Date"
          value={userData.Security_Date}
          placeholder="3-4 digits"
          className="p-2 border rounded-md w-full outline-none"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}


export const PaymentComp: React.FC<userProps> = ({ userData , handleBack , setUserData}) => {

  return (
    <div className="font-light w-full">
      <div className="w-full flex border">
        <div className="p-4">
          <div className="w-6 h-6 rounded-full border shadow-md"></div>
        </div>
        <div className="w-full flex">
          <div className="w-full h-full flex items-center pl-2">
            PayPal
          </div>
          <div className="w-fit h-full flex items-center">
            <div className="w-8 h-8">
              <PayPalIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex border mt-2">
        <div className="p-4">
          <div className="w-6 h-6 rounded-full border shadow-md"></div>
        </div>
        <div className="w-full flex">
          <div className="w-full h-full flex items-center pl-2">
            Google Pay
          </div>
          <div className="w-fit h-full flex items-center p-1">
            <div className="w-8 h-8">
              <GooglePayIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex border mt-2">
        <div className="p-4">
          <div className="w-6 h-6 rounded-full border shadow-md"></div>
        </div>
        <div className="w-full flex">
          <div className="w-full h-full flex items-center pl-2">
            Credit Card
          </div>
          <div className="w-fit h-full flex items-center">
            <div className="w-8 h-8">
              <VisaIcon />
            </div>
          </div>
          <div className="w-fit h-full flex items-center">
            <div className="w-8 h-8">
              <DiscoverIcon />
            </div>
          </div>
          <div className="w-fit h-full flex items-center">
            <div className="w-8 h-8">
              <MasterCardIcon />
            </div>
          </div>
          <div className="w-fit h-full flex items-center">
            <div className="w-8 h-8">
              <AmexIcon />
            </div>
          </div>
        </div>
      </div>
      <CardDetails userData={userData} handleBack={handleBack} setUserData={setUserData} />
      <div className="w-full mt-4 flex gap-2 flex-col md:flex-row md:mt-0">
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
