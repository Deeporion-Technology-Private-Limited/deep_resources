import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box, Button, IconButton, Input, Text } from "@/components";
import { InputType, InputVariant } from "../Input/type";
import { CoreCustomerProps } from "./footerInterface";

const navBarStyles = cva([
  ["pl-[30px]", "text-[#36454f]", "text-[13px]", "max-w-[320px]"],
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
            <Box className="flex relative mb-[20px]">
              <Input
              value=""
              variant={InputVariant.Standard}
                type={InputType.Text}
                className="rounded-none flex-1 h-[46px]"
              />
              <Button className="absolute right-0 w-fit h-full rounded-none text-[11px] bg-[#f00]">
                SUBSCRIBE
              </Button>
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
