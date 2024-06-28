export interface IAddress {
    country: string;
    state: string;
    city: string;
    address: string;
    phone: string;
    postalCode: number;
}
export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}
export interface IIndialStates {
    code: string;
    label: string;
}
export declare const Address: IAddress;
export declare const countries: CountryType[];
export declare const indianStates: IIndialStates[];
