export interface ICardDetails {
    id: number;
    brand: string;
    description: string;
    imageSrc: string;
    iconUrl?: string;
    price: number;
    rating: number;
    reviews: number;
}
export declare const sortingArray: string[];
export declare const cardData: ICardDetails[];
