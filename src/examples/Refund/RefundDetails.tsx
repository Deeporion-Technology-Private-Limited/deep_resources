import { useState } from "react";
import Product1 from "../../images/shipment_product.png";
import AddressComponent from "../Address/AddressUpdate";
import { Address } from "@/components/Data/Address";
import { Box } from "@/components/Layout/Box/index";
import { ButtonSize, ButtonVariant } from "@/components/types";
import { Button } from "@/components/Button/DefaultButton/index";
import FormInput from "@/components/Form/FormInput/index";
import {
  FormInputType,
  FormInputVariant,
} from "@/components/Data/FormInputData";

function RefundDetails() {
  const [formData, setFormData] = useState({
    returnReason: "",
    refundMethod: "",
    comment: "",
  });

  const [pickupAddress, setPickupAddress] = useState(Address);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateAddress = (newAddress: any) => {
    setPickupAddress(newAddress);
  };

  const handleRefundSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      formData,
      pickupAddress,
    };
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <Box className="h-auto rounded-lg bg-white">
      <Box className="space-y-6">
        <Box className="rounded-lg shadow-lg bg-white">
          <Box className="text-base font-bold leading-6 text-gray-800 p-5">
            Refund
          </Box>
          <Box className="flex items-center gap-4 p-5 pt-0">
            <img
              src={Product1}
              alt="product"
              className="w-[70px] h-[90px] rounded-[8px]"
            />
            <Box className="flex flex-col gap-1">
              <Box className="flex items-center">
                <span className="text-sm font-semibold font-poppins text-[#26282B]">
                  Mango
                </span>
              </Box>
              <Box className="flex items-center">
                <span className="text-base font-poppins text-[#26282B]">
                  ₹ 3000
                </span>
              </Box>
              <Box className="flex items-center">
                <span className="text-sm font-poppins text-[#72787F]">
                  Woman Expire dress
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="rounded-lg shadow-lg bg-white p-5">
          <Box className="text-base font-bold leading-6 text-gray-800 pb-3">
            Why are you returning?
          </Box>
          <Box className="space-y-3">
            <Box className="flex items-center space-x-3">
              <input
                type="radio"
                id="changeMyMind"
                name="returnReason"
                value="I have changed my mind"
                className="w-4 h-4"
                onChange={handleChange}
              />
              <label
                htmlFor="changeMyMind"
                className="text-sm font-normal leading-6 text-[#26282B]"
              >
                I have changed my mind
              </label>
            </Box>
            <Box className="flex items-center space-x-3">
              <input
                type="radio"
                id="deliveryTimeLong"
                name="returnReason"
                value="Delivery time is too long"
                className="w-4 h-4"
                onChange={handleChange}
              />
              <label
                htmlFor="deliveryTimeLong"
                className="text-sm font-normal leading-6 text-[#26282B]"
              >
                Delivery time is too long
              </label>
            </Box>
            <Box className="flex items-center space-x-3">
              <input
                type="radio"
                id="productNotMatch"
                name="returnReason"
                value="The product did not match the description"
                className="w-4 h-4"
                onChange={handleChange}
              />
              <label
                htmlFor="productNotMatch"
                className="text-sm font-normal leading-6 text-[#26282B]"
              >
                The product did not match the description
              </label>
            </Box>
            <Box className="flex items-center space-x-3">
              <input
                type="radio"
                id="other"
                name="returnReason"
                value="Other"
                className="w-4 h-4"
                onChange={handleChange}
              />
              <label
                htmlFor="other"
                className="text-sm font-normal leading-6 text-[#26282B]"
              >
                Other
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <AddressComponent
            userName="Pawan Kumar"
            addressData={pickupAddress}
            onUpdateAddress={handleUpdateAddress}
            addressType="Update"
          />
        </Box>
        <Box className="rounded-lg shadow-lg bg-white p-5">
          <Box className="text-base font-bold leading-6 text-gray-800 pb-3">
            Refund method
          </Box>
          <Box className="space-y-3">
            <Box className="flex items-center space-x-3">
              <input
                type="radio"
                id="refundInPoints"
                name="refundMethod"
                value="Refund in points to my account"
                className="w-4 h-4"
                onChange={handleChange}
              />
              <label
                htmlFor="refundInPoints"
                className="text-sm font-normal leading-6 text-[#26282B]"
              >
                Refund in points to my account
              </label>
            </Box>
            <Box className="flex items-center space-x-3">
              <input
                type="radio"
                id="refundToOriginal"
                name="refundMethod"
                value="Refunds to my original payment method"
                className="w-4 h-4"
                onChange={handleChange}
              />
              <label
                htmlFor="refundToOriginal"
                className="text-sm font-normal leading-6 text-[#26282B]"
              >
                Refunds to my original payment method
              </label>
            </Box>
          </Box>
        </Box>
        <Box className="rounded-lg shadow-lg bg-white p-5">
          <Box className="space-y-3">
            <FormInput
              className="FormInput-class"
              label=" Provide more info (optional)"
              name="comment"
              placeholder="Comment"
              required
              size={30}
              type={FormInputType.Text}
              value={formData.comment}
              onChange={handleChange}
              variant={FormInputVariant.Outlined}
            />
          </Box>
        </Box>
        <Box className="flex justify-end space-x-4 p-6">
          <Button
            hover
            size={ButtonSize.Medium}
            variant={ButtonVariant.DefaultPrimary}
            className="rounded-lg bg-gray-300 text-gray-700 text-base font-semibold flex items-center justify-center gap-2 px-4 py-2 w-28 h-14 hover:bg-gray-400"
            onClick={() => (window.location.href = "#")}
          >
            Cancel
          </Button>
          <Button
            hover
            size={ButtonSize.Medium}
            onClick={handleRefundSubmit}
            variant={ButtonVariant.DefaultPrimary}
            type="submit"
            className="rounded-lg bg-gradient-to-r from-[#BFA59A] to-[#3F271E] text-white text-base font-semibold flex items-center justify-center gap-2 px-4 py-2 w-28 h-14 hover:bg-gray-200"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default RefundDetails;
