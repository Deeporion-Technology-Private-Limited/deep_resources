export declare const CardData: ICardData[];
export declare const CategoryItem: ICategoryItem[];
export declare const ReviewData: IReviewData[];
interface ICardData {
    imageSrc: string;
    description: string;
    brand: string;
    isnew: string;
}
interface ICategoryItem {
    imageSrc: string;
    boxStyle: string;
    titleClass: string;
    descriptionClass: string;
    buttonClass: string;
    className: string;
    buttonText: string;
    title: string;
    description: string;
}
interface IReviewData {
    StarRating: boolean;
    avatar: boolean;
    avatarImage: string;
    imageStyle: string;
    rating: number;
    reviewText: string;
    reviewerName: string;
    className: string;
    starStyle: string;
    textStyle: string;
}
export {};
