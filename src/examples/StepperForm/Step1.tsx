import React from 'react';
import { Label } from '../StepperForm/label';
import { StepProps } from './StepProps';

const Step1: React.FC<StepProps> = ({ data, handleChange }) => (
  <div>
    <h2>{Label.Heading}</h2>
    <label>
      {Label.Name}
      <input type="text" name="name" value={data.name} onChange={handleChange} />
    </label>
  </div>
);

export default Step1;
