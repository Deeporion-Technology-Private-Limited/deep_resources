/// <reference types="react" />
export interface CommonStepData {
    name: string;
    address: string;
    paymentDetails: string;
}
export interface Step1Props {
    data: {
        name: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface Step2Props {
    data: {
        address: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface Step3Props {
    data: {
        paymentDetails: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
