import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../utils";
import { DefaultButton, SingleIconButton } from "../Button";
import { Box } from "../Layout";
import { Text } from "../Text";
import { CoreCustomerProps } from "../types";
import MailIcon from "./Images/mail";
const navBarStyles = cva([
  ["pl-[30px]", "text-[#36454f]", "text-[13px]", "w-fit"],
]);

interface CustomerProps
  extends CoreCustomerProps,
    ComponentProps<typeof Box>,
    VariantProps<typeof navBarStyles> {}

export const Footer = React.forwardRef<HTMLDivElement, CustomerProps>(
  (
    {
      className,
      heading = {},
      services,
      links,
      list = [],
      description = "",
      newsLetter = false,
      children,
      footerTextColor = "",
      customInnerBoxClass = "",
      innerClass = "",
      innerUlClass = "",
      innerLiClass = "",
      descriptionClass = "",
      handleInput,
      handleSubscribe,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Box ref={ref} className={cn(navBarStyles({ className }))} {...props}>
        {Object.keys(heading).length > 0 && (
          <Text
            as="p"
            className={`${
              heading.titleStyle ? heading.titleStyle : "text-[14px]"
            } mb-[15px] font-[600] ${
              !heading.titleColor
                ? footerTextColor
                  ? `text-[${footerTextColor}`
                  : "gray"
                : `text-[${heading.titleColor}`
            }] tracking-[.8px]`}
          >
            {heading.title}
          </Text>
        )}
        <Box className={`${innerClass} flex flex-col`}>
          {list?.length > 0 && (
            <ul className={`${innerUlClass} list-none`}>
              {list?.map((item) => (
                <li
                  className={`${innerLiClass} text-[12px] mb-[20px] text-[${
                    footerTextColor ? footerTextColor : "black"
                  }]`}
                >
                  <a href={item.href} className="">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {services &&
            services?.map((item) => (
              <Text
                as="p"
                className={`mb-[20px] text-[13px] tracking-[.8px] text-[${
                  footerTextColor ? footerTextColor : "black"
                }]`}
              >
                <Text as="b" className="text-[13px]">
                  {item.name}
                </Text>
                {": "}
                {item.value}
              </Text>
            ))}
          {newsLetter && (
            <Box className="flex relative mb-[20px] p-[8px] rounded-[12px] gap-[11px] bg-[#fff]">
              <Box className="flex gap-[8px]">
                <SingleIconButton iconUrl={<MailIcon />} />
                <input
                  type="text"
                  value={value}
                  placeholder="Subscribe the newsletter"
                  className="outline-none w-[160px]"
                  onChange={handleInput}
                />
              </Box>
              <Box>
                <DefaultButton
                  className="bg-[#3F271E]"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </DefaultButton>
              </Box>
            </Box>
          )}
          {description !== "" && (
            <Text
              as="p"
              className={` ${descriptionClass} mb-[15px] tracking-[.8px] text-[13px] text-[${
                footerTextColor ? footerTextColor : "black"
              }]`}
            >
              {description}
            </Text>
          )}
          {links && (
            <Box className="justify-start flex">
              {links.map((item) => (
                <>
                  <SingleIconButton
                    iconUrl={item.iconUrl}
                    className="w-fit p-[5px]"
                    onClick={item.onClick}
                  />
                </>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);
