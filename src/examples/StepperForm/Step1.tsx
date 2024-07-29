import { Input } from "@/components";
import { InputType, InputVariant } from "@/components/types";
import React from "react";
import { stepperData } from "@/components/Data/StepperData";

interface Step1CardProps {
  data: { name: string; email: string };
  onDataChange: (data: { name: string; email: string }) => void;
}

const Step1Card: React.FC<Step1CardProps> = ({ data, onDataChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onDataChange({ ...data, [name]: value });
  };

  return (
    <div className="card p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">{stepperData.personalInfo}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{stepperData.name}</label>
        <Input
          name="name"
          placeholder="Insert name here"
          type={InputType.Text}
          variant={InputVariant.Standard}
          value={data.name}
          onChange={handleChange}
          className="pt-2 mt-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">{stepperData.email}</label>
        <Input
          name="email"
          placeholder="Insert email here"
          type={InputType.Text}
          variant={InputVariant.Standard}
          value={data.email}
          onChange={handleChange}
          className="pt-2 mt-2"
        />
      </div>
    </div>
  );
};

export default Step1Card;
