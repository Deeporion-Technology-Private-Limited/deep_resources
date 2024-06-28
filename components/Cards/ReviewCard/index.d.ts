import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';

declare const reviewCardStyles: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ReviewCardProps = ComponentProps<"div"> & VariantProps<typeof reviewCardStyles> & {
    imageSrc?: string;
    reviewerName: string;
    reviewText?: string;
    rating: number;
    avatarImage?: string;
    StarRating?: boolean;
    image?: boolean;
    avatar?: boolean;
    imageStyle?: string;
    textStyle?: string;
    starStyle?: string;
};
declare const ReviewCard: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ReviewCardProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default ReviewCard;
