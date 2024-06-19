export interface serviceItem {
    name?: string;
    value?: string;
  }
  export interface socialLinks {
    iconUrl?: string;
  }
  
  export interface titleFooter {
    title?: string;
    titleColor?: string;
  }
  
  export interface listItem {
    name?: string;
    href?: string;
  }
  
  export interface CoreCustomerProps {
    children?: React.ReactNode;
    className?: string;
    heading?: titleFooter;
    description?: string;
    services?: serviceItem[];
    links?: socialLinks[];
    list?: listItem[];
    newsLetter?: boolean;
    footerTextColor?: string;
    customInnerBoxClass?: string;
    innerClass?: string;
  }