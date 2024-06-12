import React from 'react';
import { Label } from './label';

interface Step3Props {
  data: { paymentDetails: string }; 
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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