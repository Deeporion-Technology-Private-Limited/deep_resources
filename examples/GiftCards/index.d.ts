import { Box } from '../../components';
import { ComponentProps } from '../../../node_modules/react';
import { ICards, ILabels } from './data';

type GiftCardProps = ComponentProps<typeof Box> & {
    cardsArray: ICards[];
    labelsArray: ILabels[];
    addNew: () => void;
    viewMore: () => void;
    className?: string;
};
declare const GiftCard: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<GiftCardProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default GiftCard;
