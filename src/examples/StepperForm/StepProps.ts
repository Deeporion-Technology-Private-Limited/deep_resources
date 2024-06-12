export interface CommonStepData {
    name: string;
    address: string;
    paymentDetails: string;
  }
  
  export interface StepProps {
    data: CommonStepData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  