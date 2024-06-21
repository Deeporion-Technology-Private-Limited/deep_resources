import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box, Button, IconButton, Text } from "@/components";
import mail from "../Header/navbarIcons/mail.svg"
import { CoreCustomerProps } from "./footerInterface";

const navBarStyles = cva([
  ["pl-[30px]", "text-[#36454f]", "text-[13px]", "w-fit"],
]);

interface CustomerProps
  extends CoreCustomerProps,
    ComponentProps<typeof Box>,
    VariantProps<typeof navBarStyles> {}

export const Footer = forwardRef<HTMLDivElement, CustomerProps>(
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
            className={`${heading.titleStyle ? heading.titleStyle : "text-[14px]"} mb-[15px] font-[600] ${!heading.titleColor ? (footerTextColor ? `text-[${footerTextColor}` : "gray") : `text-[${heading.titleColor}`}] tracking-[.8px]`}
          >
            {heading.title}
          </Text>
        )}
        <Box className={`${innerClass} flex flex-col`}>
          {list?.length > 0 && (
            <ul className={`${innerUlClass} list-none`}>
              {list?.map((item) => (
                <li
                  className={`${innerLiClass} text-[12px] mb-[20px] text-[${footerTextColor ? footerTextColor : "black"}]`}
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
                className={`mb-[20px] text-[13px] tracking-[.8px] text-[${footerTextColor ? footerTextColor : "black"}]`}
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
                <IconButton iconUrl={mail}/>
                <input type="text" value={value} placeholder="Subscribe the newsletter" className="outline-none w-[160px]" onChange={handleInput}/>
              </Box>
              <Box>
                <Button className="bg-[#3F271E]" onClick={handleSubscribe}>Subscribe</Button>
              </Box>
            </Box>
          )}
          {description !== "" && (
            <Text
              as="p"
              className={` ${descriptionClass} mb-[15px] tracking-[.8px] text-[13px] text-[${footerTextColor ? footerTextColor : "black"}]`}
            >
              {description}
            </Text>
          )}
          {links && (
            <Box className="justify-start flex">
              {links.map((item) => (
                <>
                  <IconButton iconUrl={item.iconUrl} className="w-fit p-[5px]" onClick={item.onClick}/>
                </>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);
