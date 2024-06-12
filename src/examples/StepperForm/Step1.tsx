import React from 'react';
import { Label } from '../StepperForm/label';

interface Step1Props {
  data: { name: string }; 
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ data, handleChange }) => (
  <div>
    <h2>{Label.Heading}</h2>
    <label>
      {Label.Name}
      <input type="text" name="name" value={data.name} onChange={handleChange} />
    </label>
  </div>
);

export default Step1;
