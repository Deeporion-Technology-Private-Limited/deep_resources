import { ReviewDataType } from '.';

export interface SlideItem {
    image: string;
    heading?: string;
    headingClassName?: string;
    text?: string;
    textClassName?: string;
    button?: {
        label: string;
        onClick: () => void;
        buttonClassName?: string;
    };
    reviewData?: ReviewDataType;
}
