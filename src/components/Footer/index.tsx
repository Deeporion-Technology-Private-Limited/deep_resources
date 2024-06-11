import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box, Button, IconButton, IconsList, Input, Text } from "@/components";

const navBarStyles = cva([
  ["pl-[30px]", "text-[#36454f]", "text-[13px]", "max-w-[320px]"],
]);

type serviceItem = {
  name?: string;
  value?: string;
};
type socialLinks = {
  iconUrl?: string;
};

type listItem = {
  name?: string;
  href?: string;
};

type CustomerProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  services?: serviceItem[];
  links?: socialLinks[];
  list?: listItem[];
  newsLetter?: boolean;
} & ComponentProps<"div"> &
  VariantProps<typeof navBarStyles>;

// SERVICE

export const Footer = forwardRef<HTMLDivElement, CustomerProps>(
  (
    {
      className,
      title,
      services,
      links,
      list=[],
      description = "",
      newsLetter = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Box ref={ref} className={cn(navBarStyles({ className }))} {...props}>
        <Text
          as="p"
          className="text-[14px] mb-[15px] font-[600] text-[#ec048a] tracking-[.8px]"
        >
          {title}
        </Text>
        <Box className="flex flex-col">
          {list?.length > 0 && (
            <ul className="list-none">
              {list?.map((item) => (
                <li className="text-[12px] mb-[7px] text-[#36454f]">
                  <a href={item.href} className="hover:text-[#5ac4be] hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {services?.map((item) => (
            <Text as="p" className="mb-[20px] text-[13px] tracking-[.8px]">
              <Text as="b" className="text-[13px]">
                {item.name}
              </Text>{": "}
              {item.value}
            </Text>
          ))}

          {description !== "" && (
            <Text as="p" className="mb-[15px] tracking-[.8px] text-[13px]">
              {description}
            </Text>
          )}
          {newsLetter && (
            <Box className="flex relative mb-[20px]">
              <Input className="rounded-none flex-1 h-[46px]" />
              <Button className="absolute right-0 w-fit h-full rounded-none text-[11px] bg-[#f00]">
                SUBSCRIBE
              </Button>
            </Box>
          )}
          {links && (
            <IconsList className="justify-start">
              {links.map((item) => (
                <>
                  <IconButton iconUrl={item.iconUrl} />
                </>
              ))}
            </IconsList>
          )}
        </Box>
      </Box>
    );
  }
);
