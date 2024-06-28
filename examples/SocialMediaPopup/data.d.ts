export interface PopupButtons {
    icon?: string;
    text?: string;
    buttonText?: string;
    click?: () => void;
}
export interface PopupItem {
    item: PopupButtons[];
}
export declare const socialMedia: PopupButtons[];
