import { useState } from "react";
import { countries, indianStates } from "../../components/Data/Address";
import { Box } from "@/components/Layout/Box/index";
import { Headings } from "@/components/Headings/index";
import { ButtonSize, ButtonVariant, IAddress } from "@/components/types";
import { DefaultButton, PopupModal } from "@/components";

type AddressProps = {
  userName: string;
  addressData: IAddress;
  onUpdateAddress: (address: IAddress) => void;
  addressType: string;
};

const AddressComponent = ({
  userName,
  addressData,
  onUpdateAddress,
  addressType,
}: AddressProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(addressData);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onUpdateAddress(formData);
    setIsEditing(false);
  };

  return (
    <Box className="h-auto p-5  rounded-lg shadow-lg bg-white space-y-5">
      <Box className="flex justify-between mb-6">
        <Box className="text-base font-bold leading-6 text-gray-800">
          {addressType === "pickup" ? "Pickup Address" : "Address"}
        </Box>

        <button
          className="text-beige-600 font-semibold text-base"
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
        >
          Change
        </button>
      </Box>
      <Box className="space-y-1">
        <Box className="text-sm font-normal text-gray-800 font-poppins">
          {userName}
        </Box>
        <Box className="text-sm font-normal text-gray-800 font-poppins">
          {addressData.phone}
        </Box>
        <Box className="text-sm font-normal text-gray-500 font-poppins">
          {addressData.address}
        </Box>
        <Box className="text-sm font-normal text-gray-500 font-poppins">
          {addressData.city}, {addressData.state}, {addressData.country} -{" "}
          {addressData.postalCode}
        </Box>
      </Box>
      {isEditing && (
        <PopupModal
          crossIcon
          button02={false}
          button01={false}
          modalbutton={false}
          header={
            <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
              <Headings
                FontSize="text-xl"
                fontWeight="font-bold"
                text="Update Address"
              />{" "}
            </Box>
          }
          onClose={() => {}}
          openModal
        >
          <Box>
            <Box className="space-y-4">
              <Box>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </Box>
              <Box>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                {formData.country !== "IN" ? (
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                ) : (
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select State</option>
                    {indianStates.map((state) => (
                      <option key={state.code} value={state.label}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                )}
              </Box>
              <Box>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </Box>
              <Box>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </Box>

              <Box>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </Box>

              <Box>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </Box>
              <Box className="flex justify-end mt-4">
                <Box className="flex justify-end space-x-4 p-6">
                  <DefaultButton
                    hover
                    size={ButtonSize.Small}
                    variant={ButtonVariant.DefaultPrimary}
                    className="rounded-lg bg-gray-300 text-gray-700 text-base font-semibold flex items-center justify-center gap-2 px-4 py-2 w-28 h-14 hover:bg-gray-400"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </DefaultButton>
                  <DefaultButton
                    hover
                    size={ButtonSize.Medium}
                    variant={ButtonVariant.DefaultPrimary}
                    onClick={handleSubmit}
                    type="submit"
                    className="rounded-lg bg-gradient-to-r from-[#BFA59A] to-[#3F271E] text-white text-base font-semibold flex items-center justify-center gap-2 px-4 py-2 w-28 h-14 hover:bg-gray-200"
                  >
                    Submit
                  </DefaultButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </PopupModal>
      )}
    </Box>
  );
};

export default AddressComponent;
