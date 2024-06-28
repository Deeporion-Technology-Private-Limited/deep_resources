import { ICardDetails } from './Data';
import { VariantProps } from 'class-variance-authority';

declare const wishListStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface WishlistProps extends VariantProps<typeof wishListStyles> {
    children?: React.ReactNode;
    title: string;
    data: ICardDetails[];
    onClick: (data: any) => void;
    sortingArray: string[];
    handleAddToCart: () => void;
    handleSorting: () => void;
    className: string;
}
declare const Wishlist: import('../../../node_modules/react').ForwardRefExoticComponent<WishlistProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Wishlist;
