import { Input } from "@/components";
import { InputType, InputVariant } from "@/components/Input/type";
import React from "react";
import { stepperData } from "./StepperData";

interface Step2CardProps {
  data: { address: string; city: string };
  onDataChange: (data: { address: string; city: string }) => void;
}

const Step2Card: React.FC<Step2CardProps> = ({ data, onDataChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onDataChange({ ...data, [name]: value });
  };

  return (
    <div className="card p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">{stepperData.addressInfo}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {stepperData.address}
        </label>
        <Input
          name="address"
          placeholder="Insert address here"
          type={InputType.Text}
          variant={InputVariant.Standard}
          value={data.address}
          onChange={handleChange}
          className="pt-2 mt-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{stepperData.city}</label>
        <Input
          name="city"
          placeholder="Insert city here"
          type={InputType.Text}
          variant={InputVariant.Standard}
          value={data.city}
          onChange={handleChange}
          className="pt-2 mt-2"
        />
      </div>
    </div>
  );
};

export default Step2Card;
