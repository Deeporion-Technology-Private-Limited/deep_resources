import { stateProp } from './AddressInterFace';

export interface Props {
    handleBack: () => void;
    handleSubmit: (e: any) => void;
    userData: stateProp;
    setUserData: React.Dispatch<React.SetStateAction<stateProp>>;
    handleChange: (e: any) => void;
}
export declare const PaymentDetails: React.FC<Props>;
