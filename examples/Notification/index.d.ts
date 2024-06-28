import { Box } from '../../components';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../node_modules/react';
import { NotificationProp } from './notificationConst';

declare const notificationStyle: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
interface NotifyProps extends NotificationProp, ComponentProps<typeof Box>, VariantProps<typeof notificationStyle> {
}
export declare const Notification: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<NotifyProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
