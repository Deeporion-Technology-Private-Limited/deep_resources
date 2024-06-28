import { Dispatch, SetStateAction } from '../../../node_modules/react';

export interface StateProp {
    first_name: string;
    Last_name: string;
    phone_Number: string;
    email: string;
    pincode: string;
    Area: string;
    Country: string;
    city: string;
    State: string;
    Address: string;
    addressType: string;
    Checked?: boolean;
}
interface ContactDetailsProps {
    handleChange: (e: any) => void;
    value: StateProp;
}
export declare const ContactDetails: React.FC<ContactDetailsProps>;
export declare const AddressDetails: React.FC<ContactDetailsProps>;
interface SaveAsAddressProps {
    getData: Dispatch<SetStateAction<StateProp>>;
    handleBack: () => void;
}
export declare const SaveAsAddress: React.FC<SaveAsAddressProps>;
export declare const initialData: {
    first_name: string;
    Last_name: string;
    phone_Number: string;
    email: string;
    pincode: string;
    Area: string;
    Country: string;
    city: string;
    State: string;
    Address: string;
    addressType: string;
    Checked: boolean;
};
export {};
