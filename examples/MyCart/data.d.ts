export interface CardObj {
    id?: number;
    imageSrc?: string;
    price?: number;
    brand?: string;
    description?: string;
    rating?: number;
    reviews?: number;
    checked?: boolean;
}
export interface CardItem {
    item: CardObj[];
    handleCart: () => void;
}
export declare const demo: CardObj[];
