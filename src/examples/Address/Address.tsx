import { useState } from "react";
import { Address } from "@/components/Data/Address";
import AddressComponent from "./AddressUpdate";

function AddressPage() {
  const [pickupAddress, setPickupAddress] = useState(Address);

  const handleUpdateAddress = (newAddress: any) => {
    console.log(newAddress);

    console.log(newAddress);
    setPickupAddress(newAddress);
  };
  return (
    <>
      <AddressComponent
        userName="Pawan Kumar"
        addressData={pickupAddress}
        onUpdateAddress={handleUpdateAddress}
        addressType="Update"
      />
    </>
  );
}

export default AddressPage;
