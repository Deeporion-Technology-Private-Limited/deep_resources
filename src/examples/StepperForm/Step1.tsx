import React from 'react';

interface Step1Props {
  data: { name: string }; 
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ data, handleChange }) => (
  <div>
    <h2>Step 1: Personal Information</h2>
    <label>
      Name:
      <input type="text" name="name" value={data.name} onChange={handleChange} />
    </label>
  </div>
);

export default Step1;
