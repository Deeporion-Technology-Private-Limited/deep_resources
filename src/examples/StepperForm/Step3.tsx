import React from 'react';
import { Label } from './label';
import { Step3Props } from './StepProps';

const Step3: React.FC<Step3Props> = ({ data, handleChange }) => (
  <div>
    <h2>{Label.StepDetls}</h2>
    <label>
      {Label.StepPay}
      <input type="text" name="paymentDetails" value={data.paymentDetails} onChange={handleChange} />
    </label>
  </div>
);

export default Step3;
