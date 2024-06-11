import React from 'react';

interface Step3Props {
  data: { paymentDetails: string }; 
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step3: React.FC<Step3Props> = ({ data, handleChange }) => (
  <div>
    <h2>Step 3: Payment Details</h2>
    <label>
      Payment Details:
      <input type="text" name="paymentDetails" value={data.paymentDetails} onChange={handleChange} />
    </label>
  </div>
);

export default Step3;