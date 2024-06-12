import React from 'react';
import { Label } from './label';
import { StepProps } from './StepProps';

const Step2: React.FC<StepProps> = ({ data, handleChange }) => (
  <div>
    <h2>{Label.StepHead}</h2>
    <label>
      {Label.StepAdrs}
      <input type="text" name="address" value={data.address} onChange={handleChange} />
    </label>
  </div>
);

export default Step2;
