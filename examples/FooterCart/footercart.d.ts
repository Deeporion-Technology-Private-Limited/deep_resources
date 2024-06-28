import { titleFooter } from '../../components/Footer/footerInterface';

interface serviceItem {
    name?: string;
    value?: string;
}
interface socialLinks {
    iconUrl?: string;
    href?: string;
}
interface listItem {
    name?: string;
    href?: string;
}
interface footerCopyright {
    copyright?: string;
    copyrightBgStyle?: string;
    copyrightTextStyle?: string;
}
export declare const serviceData: serviceItem[];
export declare const listItem: listItem[];
export declare const needHelpListItem: listItem[];
export declare const linksItem: socialLinks[];
export declare const descrip: string;
export declare const titleForCustomerServices: titleFooter;
export declare const titleForNeedHelp: titleFooter;
export declare const titleForCompany: titleFooter;
export declare const footerCopyrightItem: footerCopyright;
export declare const footerColor: string;
export {};
