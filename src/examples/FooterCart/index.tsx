import { Box, Logo, LogoImg, Text } from "@/components";
import { Footer } from "@/components/Footer";
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef } from "react";
import {
  descrip,
  footerColor,
  linksItem,
  listItem,
  needHelpListItem,
  serviceData,
  titleForCompany,
  titleForCustomerServices,
  titleForNeedHelp,
} from "./footercart";

const footerCartStyles = cva([]);

interface footerCopyright {
  copyright?: string;
  copyrightBgStyle?: string;
  copyrightTextStyle?: string;
}

type FooterCartProps = ComponentProps<typeof Footer> &
  VariantProps<typeof footerCartStyles> & {
    children?: React.ReactNode;
    logoUrl?: string;
    footerCopyRights?: footerCopyright;
  };

export const FooterCart = forwardRef<HTMLDivElement, FooterCartProps>(
  ({ className, footerCopyRights={}, logoUrl = "", children, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn(footerCartStyles({ className }))} {...props}>
        <Box className="w-full bg-[#BFA59A]">
          <Box className="mx-[60px]">
            <Box className="py-5 border-b border-[#D7C7C1]">
              {logoUrl ? <LogoImg logo={logoUrl} /> : <Logo>Logo</Logo>}
            </Box>
            <Box className="py-5 flex justify-between flex-wrap">
              <Footer
                className="pl-[0px]"
                heading={titleForCustomerServices}
                footerTextColor={footerColor}
                services={serviceData}
              />
              <Footer
                className="pl-[0px]"
                heading={titleForCompany}
                footerTextColor={footerColor}
                list={listItem}
              />
              <Footer
                className="pl-[0px]"
                heading={titleForNeedHelp}
                footerTextColor={footerColor}
                list={needHelpListItem}
              />
              <Footer
                newsLetter={true}
                description={descrip}
                links={linksItem}
                innerClass="items-end"
                footerTextColor={footerColor}
                descriptionClass="w-[240px]"
              />
            </Box>
          </Box>
        </Box>
        <Box
          className={` ${footerCopyRights.copyrightBgStyle} w-full py-[26px] flex justify-center items-center`}
        >
          <Text as="p" className={` ${footerCopyRights.copyrightTextStyle} font-[400] text-center text-[#fff] text-[14px]`}>{footerCopyRights.copyright}</Text>
        </Box>
      </Box>
    );
  }
);
