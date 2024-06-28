export interface IData {
    id: number;
    imgSrc: string;
    label: string;
    products?: Products[];
}
export interface breadCrumbsType {
    text: string;
    iconUrl?: string;
}
export declare const breadCrumbsData: breadCrumbsType[];
export declare const optionsArray: string[];
export declare const chipsArray: string[];
interface Products {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
export declare const Data: IData[];
export {};
