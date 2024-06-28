export interface IValue {
    id?: number;
    imagesSrc?: string;
    price?: number;
    title?: string;
    des?: string;
    rating?: number;
    reviews?: number;
}
export interface Items {
    item: IValue[];
}
export declare const array: IValue[];
export declare const demo: IValue[];
