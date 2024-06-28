import { default as React } from '../../../node_modules/react';
import { StateProp } from './interfaceAddCart';

export interface MyCartProp {
    handleBack: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    initialState: StateProp;
    setInitialState: React.Dispatch<React.SetStateAction<StateProp>>;
    handleSubmit: (e: any) => void;
}
export declare const PersonalDetails: React.FC<MyCartProp>;
