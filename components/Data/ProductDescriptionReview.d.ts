export interface IProductReviewDescription {
    rating: number;
    heading: string;
    contents: string;
    helpFull: number;
    notHelpfull: number;
    days: number;
}
export declare const DescriptionReview: IProductReviewDescription[];
export interface IDescriptionReviewSingleCard {
    objectData: any;
}
export declare const DescriptionReviewSingleCard: IDescriptionReviewSingleCard;
