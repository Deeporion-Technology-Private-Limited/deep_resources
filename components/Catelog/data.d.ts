export interface subcomponent {
    id?: number;
    type?: string;
}
export interface category {
    id?: number;
    type?: string;
    subcomponent?: subcomponent[];
}
export interface user {
    id?: number;
    type?: string;
    category?: category[];
}
export interface Items {
    data: user[] | undefined | any;
    handleClick?: (user: Object) => void;
    userType?: string;
}
export declare const arr: user[];
