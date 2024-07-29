import { Input } from "@/components";
import { InputType, InputVariant } from "@/components/types";
import React from "react";
import { stepperData } from "@/components/Data/StepperData";

interface Step3CardProps {
  data: { paymentMethod: string };
  onDataChange: (data: { paymentMethod: string }) => void;
}

const Step3Card: React.FC<Step3CardProps> = ({ data, onDataChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onDataChange({ ...data, [name]: value });
  };

  return (
    <div className="card p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">{stepperData.payMode}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {stepperData.payMode}
        </label>
        <Input
          name="paymentMethod"
          placeholder="Insert Payment Method here"
          type={InputType.Text}
          variant={InputVariant.Standard}
          value={data.paymentMethod}
          onChange={handleChange}
          className="pt-2 mt-2"
        />
      </div>
    </div>
  );
};

export default Step3Card;
