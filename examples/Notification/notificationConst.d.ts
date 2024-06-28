export interface singleNotification {
    profile?: string;
    title?: string;
    message?: string;
    arrivedtime?: string;
    onclick?: () => void;
    isRead: boolean;
}
export interface NotificationProp {
    value?: singleNotification[];
}
export declare const notificationsObj: singleNotification[];
