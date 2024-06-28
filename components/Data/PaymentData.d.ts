import { default as React } from '../../../node_modules/react';
import { stateProp } from '../../examples/PaymentPage/AddressInterFace';

interface userProps {
    handleBack: () => void;
    handleChange: (e: any) => void;
    userData: stateProp;
    setUserData: React.Dispatch<React.SetStateAction<stateProp>>;
}
export declare const AddressContactDetail: React.FC<userProps>;
export declare const CardDetails: React.FC<userProps>;
export declare const PaymentComp: React.FC<userProps>;
export {};
