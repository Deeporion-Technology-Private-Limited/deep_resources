import React from 'react';

interface Step2Props {
  data: { address: string }; 
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step2: React.FC<Step2Props> = ({ data, handleChange }) => (
  <div>
    <h2>Step 2: Address</h2>
    <label>
      Address:
      <input type="text" name="address" value={data.address} onChange={handleChange} />
    </label>
  </div>
);

export default Step2;
