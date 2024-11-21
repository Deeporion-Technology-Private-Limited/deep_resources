import { Box, Footer, Logo, LogoImg, Text } from "@/components";
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
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
  (
    { className, footerCopyRights = {}, logoUrl = "", children, ...props },
    ref
  ) => {
    const [mailBox, setMailBox] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMailBox(e.target.value);
    };
    const handleSubscribe = () => {
      alert(mailBox);
    };

    return (
      <Box ref={ref} className={cn(footerCartStyles({ className }))} {...props}>
        <Box className="w-full bg-[#BFA59A]">
          <Box className="mx-[60px] max-[1000px]:mx-[24px] ">
            <Box className="py-5 border-b border-[#D7C7C1]">
              {logoUrl ? <LogoImg logo={logoUrl} /> : <Logo>Logo</Logo>}
            </Box>
            <Box className="py-5 flex justify-between flex-wrap gap-0 max-[1000px]:gap-2 max-[540px]:flex-col">
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
                descriptionClass="w-[318px]"
                className="block max-[1000px]:hidden "
                value={mailBox}
                handleInput={handleChange}
                handleSubscribe={handleSubscribe}
              />
            </Box>
            <Box className="hidden max-[1000px]:flex justify-end pb-5 max-[540px]:justify-center">
              <Footer
                newsLetter={true}
                description={descrip}
                links={linksItem}
                innerClass="items-end"
                footerTextColor={footerColor}
                descriptionClass="w-[318px]"
                className="pl-0"
                value={mailBox}
                handleInput={handleChange}
                handleSubscribe={handleSubscribe}
              />
            </Box>
          </Box>
        </Box>
        <Box
          className={` ${footerCopyRights.copyrightBgStyle} w-full py-[26px] flex justify-center items-center`}
        >
          <Text
            as="p"
            className={` ${footerCopyRights.copyrightTextStyle} font-[400] text-center text-[#fff] text-[14px]`}
          >
            {footerCopyRights.copyright}
          </Text>
        </Box>
      </Box>
    );
  }
);
